import { Box } from '@mui/material';
import { Container } from '@mui/system';
import TableHeader from './components/TableHeader';

CartFeature.propTypes = {};

function CartFeature(props) {
  return (
    <Box mt={4}>
      <Container>
        <TableHeader />
      </Container>
    </Box>
  );
}

export default CartFeature;
