import styled from '@emotion/styled';
import { Box, Grid, Link, Typography } from '@mui/material';

ShippingAddress.propTypes = {};
const AddressContent = styled(Typography)({
  padding: 16,
});
function ShippingAddress(props) {
  return (
    <Box>
      <Grid container direction="row" justifyContent="space-between" alignItems="center">
        <Grid item>
          <AddressContent>Giao tới</AddressContent>
        </Grid>
        <Grid item>
          <Link
            component="button"
            variant="body2"
            onClick={() => {
              console.info("I'm a button.");
            }}
            underline="hover"
          >
            <AddressContent>Thay đổi</AddressContent>
          </Link>
        </Grid>
      </Grid>
      <Grid container direction="row" spacing={1} pl={2}>
        <Grid item>
          <Typography fontWeight="bold">Truong Nguyen </Typography>
        </Grid>
        <Grid item>
          <Typography>| </Typography>
        </Grid>
        <Grid item>
          <Typography fontWeight="bold"> 123456789</Typography>
        </Grid>
      </Grid>
      <Grid container direction="row" spacing={1} pl={2} mb={2}>
        <Grid item>
          <Typography>Văn phòng: Số 10 đường Phổ Quang, Tân Bình, HCM </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ShippingAddress;
