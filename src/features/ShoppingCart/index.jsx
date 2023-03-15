import { Box, Grid } from '@mui/material';
import { Container } from '@mui/system';
import PaymentInformation from './components/PaymentInformation';
import TableCartItems from './components/TableCartItems';

CartFeature.propTypes = {};

function CartFeature(props) {
  return (
    <Box mt={4}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8} lg={8}>
            <TableCartItems />
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <PaymentInformation />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default CartFeature;
