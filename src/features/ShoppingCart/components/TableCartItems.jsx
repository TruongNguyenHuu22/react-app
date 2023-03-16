import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { Stack, styled } from '@mui/material';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import { STATIC_HOST, THUMBNAIL_PLACEHOLDER } from 'constants';
import { useDispatch, useSelector } from 'react-redux';
import { formatPrice } from 'utils';
import { removeFromCart } from '../cartSlice';
import CartItemQuantity from './CartItemQuantity';

const headCells = [
  {
    id: 'total',
    align: 'left',
    disablePadding: false,
    label: 'Tất cả',
  },
  {
    id: 'price',
    align: 'center',
    disablePadding: false,
    label: 'Đơn giá',
  },
  {
    id: 'number',
    align: 'center',
    disablePadding: false,
    label: 'Số lượng',
  },
  {
    id: 'Total',
    align: 'right',
    disablePadding: false,
    label: 'Thành tiền',
  },
  {
    id: 'delete',
    align: 'center',
    disablePadding: false,
    label: 'Xóa',
  },
];

const EnhancedTableHead = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.align || 'right'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
          >
            {headCell.id === 'total' ? `${headCell.label} (${cartItems.length} sản phẩm)` : headCell.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

const OriginalPriceTypography = styled(Typography)(({ theme }) => ({
  textDecoration: 'line-through',
  color: 'grey',
}));

const TableCartItems = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.cartItems);

  const thumbnailURL = (product) =>
    product.thumbnail ? `${STATIC_HOST}${product.thumbnail?.url}` : `${THUMBNAIL_PLACEHOLDER}`;

  const removeCartItem = (productId) => {
    dispatch(removeFromCart(productId));
  };

  return (
    <Paper elevation={0} sx={{ width: '100%', mb: 2 }}>
      <TableContainer>
        <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle" size="medium">
          <EnhancedTableHead />
          <TableBody>
            {cartItems.map((row) => (
              <TableRow hover role="checkbox" tabIndex={-1} key={row.id} sx={{ transition: 'margin .2s ease-in-out' }}>
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
                <TableCell align="right">
                  <CartItemQuantity item={row} />
                </TableCell>
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
};

export default TableCartItems;
