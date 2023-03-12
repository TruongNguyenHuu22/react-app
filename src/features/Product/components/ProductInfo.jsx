import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { formatPrice } from 'utils';

ProductInfo.propTypes = {
  product: PropTypes.object,
};

const Information = styled(Box)(({ theme }) => ({
  paddingBottom: 16,
  borderBottom: '1px solid #EEEEEE',
}));

const ShortDescription = styled(Typography)(({ theme }) => ({
  margin: '16px 0',
}));

const PriceBox = styled(Box)(({ theme }) => ({
  padding: 16,
  backgroundColor: '#F7F7F7',
}));

const SalePrice = styled(Box)(({ theme }) => ({
  marginRight: 24,
  fontSize: 30,
  fontWeight: 'bold',
}));

const OriginalPrice = styled(Box)(({ theme }) => ({
  marginRight: 16,
  textDecoration: 'line-through',
}));

const PromotionPercent = styled(Box)(({ theme }) => ({
  padding: 16,
}));

function ProductInfo({ product = {} }) {
  const { name, shortDescription, salePrice, originalPrice, promotionPercent } = product;
  const renderedSalePrice = formatPrice(salePrice);
  const renderedOriginalPrice = formatPrice(originalPrice);
  return (
    <Information>
      <Typography component="h1" variant="h4">
        {name}
      </Typography>
      <ShortDescription variant="body2">{shortDescription}</ShortDescription>

      <PriceBox>
        <SalePrice component="span">{renderedSalePrice}</SalePrice>
        {promotionPercent > 0 && (
          <>
            <OriginalPrice component="span">{renderedOriginalPrice}</OriginalPrice>
            <PromotionPercent component="span">{` -${promotionPercent}%`}</PromotionPercent>
          </>
        )}
      </PriceBox>
    </Information>
  );
}

export default ProductInfo;
