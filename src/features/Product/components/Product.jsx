import React from 'react';
import PropTypes from 'prop-types';
import { Box, Skeleton, Typography } from '@mui/material';
import { STATIC_HOST, THUMBNAIL_PLACEHOLDER } from 'constants';

Product.propTypes = {
  product: PropTypes.object,
};

function Product({ product }) {
  const thumbnailURL = product.thumbnail ? `${STATIC_HOST}${product.thumbnail?.url}` : `${THUMBNAIL_PLACEHOLDER}`;

  return (
    <Box p={1}>
      <Box p={1} minHeight="215px">
        <img src={thumbnailURL} alt={product.name} width="100%" />
      </Box>

      <Typography variant="body2">{product.name}</Typography>
      <Typography variant="body2">
        <Box component="span" fontSize="16px" fontWeight="bold" mr={1}>
          {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.salePrice)}
        </Box>
        {product.promotionPercent > 0 && ` -${product.promotionPercent}%`}
      </Typography>
      <Skeleton width="60%" />
    </Box>
  );
}

export default Product;
