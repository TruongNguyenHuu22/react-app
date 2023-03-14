import { AccountCircle, Close } from '@mui/icons-material';
import CodeIcon from '@mui/icons-material/Code';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge, IconButton, Menu, MenuItem, styled } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { ALBUM, CART, PRODUCT_LIST, TODO } from 'constants/route';
import Login from 'features/Auth/components/Login';
import Register from 'features/Auth/components/Register';
import { logout } from 'features/Auth/userSlice';
import { cartItemsCountSelector } from 'features/ShoppingCart/selectors';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const CloseButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: theme.spacing(1),
  right: theme.spacing(1),
  color: theme.palette.grey[500],
  zIndex: 1,
}));

const MODE = { LOGIN: 'login', REGISTER: 'register' };

export default function Header() {
  const loggedInUser = useSelector((state) => state.user.current);
  const cartItemsCount = useSelector(cartItemsCountSelector);
  const isLoggedIn = !!loggedInUser.id;
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const [mode, setMode] = useState(MODE.LOGIN);
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason && reason === 'backdropClick' && 'escapeKeyDown') return;
    setOpen(false);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleUserClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLogoutClick = () => {
    setAnchorEl(null);
    dispatch(logout());
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <CodeIcon />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            KUKAN SHOP
          </Typography>
          <Button color="inherit" onClick={() => navigate(PRODUCT_LIST)}>
            Product
          </Button>
          <Button color="inherit" onClick={() => navigate(TODO)}>
            Todo
          </Button>
          <Button color="inherit" onClick={() => navigate(ALBUM)}>
            Album
          </Button>
          {!isLoggedIn ? (
            <>
              <IconButton size="large" color="inherit" onClick={() => navigate(CART)}>
                <Badge badgeContent={cartItemsCount} color="error">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
              <Button color="inherit" onClick={handleClickOpen}>
                Login
              </Button>
            </>
          ) : (
            <IconButton color="inherit" onClick={handleUserClick}>
              <AccountCircle />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
      <Menu anchorEl={anchorEl} open={!!anchorEl} onClose={handleCloseMenu}>
        <MenuItem onClick={handleCloseMenu}>My account</MenuItem>
        <MenuItem onClick={handleLogoutClick}>Logout</MenuItem>
      </Menu>
      <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
        <CloseButton onClick={handleClose}>
          <Close />
        </CloseButton>
        <DialogContent>
          {mode === MODE.REGISTER && (
            <>
              <Register closeDialog={handleClose} />
              <Box textAlign="center">
                <Button color="primary" onClick={() => setMode(MODE.LOGIN)}>
                  Already have an account. Login here
                </Button>
              </Box>
            </>
          )}
          {mode === MODE.LOGIN && (
            <>
              <Login closeDialog={handleClose} />
              <Box textAlign="center">
                <Button color="primary" onClick={() => setMode(MODE.REGISTER)}>
                  Don't have an account. Register here
                </Button>
              </Box>
            </>
          )}
        </DialogContent>
      </Dialog>
    </Box>
  );
}
