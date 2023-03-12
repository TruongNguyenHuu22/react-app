import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import { STATIC_HOST } from 'constants';
import { THUMBNAIL_PLACEHOLDER } from 'constants';

ProductThumbnail.propTypes = {
  product: PropTypes.object,
};

function ProductThumbnail({ product }) {
  const thumbnailURL = product?.thumbnail ? `${STATIC_HOST}${product.thumbnail?.url}` : `${THUMBNAIL_PLACEHOLDER}`;

  return (
    <Box>
      <img src={thumbnailURL} alt={product?.name} width="100%" />
    </Box>
  );
}

export default ProductThumbnail;
