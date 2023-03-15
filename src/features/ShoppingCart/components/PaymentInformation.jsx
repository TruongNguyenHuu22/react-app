import { Box, Paper, Stack } from '@mui/material';
import ShippingAddress from './ShippingAddress';

PaymentInformation.propTypes = {};

function PaymentInformation(props) {
  return (
    <Box>
      <Stack direction="column" spacing={1}>
        <Paper elevation={0}>
          <Box width="100%">
            <ShippingAddress />
          </Box>
        </Paper>
        <Paper elevation={0}>
          <Box></Box>
        </Paper>
      </Stack>
    </Box>
  );
}

export default PaymentInformation;
