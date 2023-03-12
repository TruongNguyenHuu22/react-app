import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { PRODUCT_DETAIL } from 'constants/route';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import Product from './Product';

ProductList.propTypes = {
  data: PropTypes.array,
};

ProductList.defaultProps = {
  data: [],
};

function ProductList({ data }) {
  const navigate = useNavigate();
  return (
    <Box>
      <Grid container>
        {data.length > 0 &&
          data.map((product, index) => (
            <Grid
              item
              key={product.id}
              xs={12}
              sm={6}
              md={4}
              lg={3}
              onClick={() => {
                navigate(PRODUCT_DETAIL.replace(':id', product.id));
              }}
            >
              <Product product={product} />
            </Grid>
          ))}
        {data.length === 0 && (
          <Typography variant="h4" gutterBottom>
            Product not found
          </Typography>
        )}
      </Grid>
    </Box>
  );
}

export default ProductList;
