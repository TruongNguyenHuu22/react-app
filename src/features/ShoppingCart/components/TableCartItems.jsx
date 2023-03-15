import DeleteIcon from '@mui/icons-material/Delete';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import FilterListIcon from '@mui/icons-material/FilterList';
import { Stack, styled } from '@mui/material';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import { alpha } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { visuallyHidden } from '@mui/utils';
import { STATIC_HOST, THUMBNAIL_PLACEHOLDER } from 'constants';
import PropTypes from 'prop-types';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { formatPrice } from 'utils';
import { removeFromCart } from '../cartSlice';
import { cartItemsCountSelector, cartTotalSelector } from '../selectors';

function createData(name, calories, fat, carbs, protein) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
  };
}

const rows = [
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Donut', 452, 25.0, 51, 4.9),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('Honeycomb', 408, 3.2, 87, 6.5),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Jelly Bean', 375, 0.0, 94, 0.0),
  createData('KitKat', 518, 26.0, 65, 7.0),
  createData('Lollipop', 392, 0.2, 98, 0.0),
  createData('Marshmallow', 318, 0, 81, 2.0),
  createData('Nougat', 360, 19.0, 9, 37.0),
  createData('Oreo', 437, 18.0, 63, 4.0),
];

const headCells = [
  {
    id: 'total',
    numeric: false,
    disablePadding: true,
    label: 'Tất cả',
  },
  {
    id: 'price',
    disablePadding: false,
    label: 'Đơn giá',
  },
  {
    id: 'number',
    numeric: true,
    disablePadding: false,
    label: 'Số lượng',
  },
  {
    id: 'Total',
    numeric: true,
    disablePadding: false,
    label: 'Thành tiền',
  },
  {
    id: 'delete',
    numeric: true,
    disablePadding: false,
    label: 'Xóa',
  },
];

function EnhancedTableHead(props) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount } = props;

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all desserts',
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            {headCell.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const OriginalPriceTypography = styled(Typography)(({ theme }) => ({
  textDecoration: 'line-through',
  color: 'grey',
}));

export default function TableCartItems() {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);

  const total = useSelector(cartTotalSelector);
  const dispatch = useDispatch();

  const count = useSelector(cartItemsCountSelector);

  const cartItems = useSelector((state) => state.cart.cartItems);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.name);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const thumbnailURL = (product) =>
    product.thumbnail ? `${STATIC_HOST}${product.thumbnail?.url}` : `${THUMBNAIL_PLACEHOLDER}`;

  const removeCartItem = (productId) => {
    dispatch(removeFromCart(productId));
  };

  return (
    <Paper elevation={0} sx={{ width: '100%', mb: 2 }}>
      <TableContainer>
        <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle" size="medium">
          <EnhancedTableHead
            numSelected={selected.length}
            order={order}
            orderBy={orderBy}
            onSelectAllClick={handleSelectAllClick}
            onRequestSort={handleRequestSort}
            rowCount={rows.length}
          />
          <TableBody>
            {cartItems.map((row) => (
              <TableRow hover role="checkbox" tabIndex={-1}>
                <TableCell padding="checkbox">
                  <Checkbox color="primary" />
                </TableCell>
                <TableCell component="th" scope="row" padding="none">
                  <Stack spacing={2} direction="row" alignItems="center">
                    <Box
                      sx={{
                        width: '100px',
                        p: 1,
                      }}
                    >
                      <img src={thumbnailURL(row.product)} alt={row.product.name} width="100%" />
                    </Box>

                    <Box>{row.product.name}</Box>
                  </Stack>
                </TableCell>
                <TableCell align="right">
                  <Stack direction="row" spacing={1}>
                    <Typography sx={{ fontWeight: 'bold' }}>{formatPrice(row.product.salePrice)}</Typography>
                    {row.product.promotionPercent > 0 && (
                      <OriginalPriceTypography variant="body2">
                        {formatPrice(row.product.originalPrice)}
                      </OriginalPriceTypography>
                    )}
                  </Stack>
                </TableCell>
                <TableCell align="right">{row.quantity}</TableCell>
                <TableCell align="right">
                  <Typography sx={{ fontWeight: 'bold', color: 'red' }}>
                    {formatPrice(row.product.salePrice * row.quantity)}
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  <DeleteOutlineOutlinedIcon
                    sx={{ cursor: 'pointer' }}
                    onClick={() => removeCartItem(row.product.id)}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
