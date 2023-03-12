import { Box, Container, Grid, LinearProgress, Paper } from '@mui/material';
import { styled } from '@mui/system';
import AddToCardForm from '../components/AddToCardForm';
import ProductInfo from '../components/ProductInfo';
import ProductMenu from '../components/ProductMenu';
import ProductThumbnail from '../components/ProductThumbnail';
import useProductDetail from '../hooks/useProductDetail';

DetailPage.propTypes = {};
const LeftSide = styled(Grid)(({ theme }) => ({
  width: '400px',
  padding: 12,
  borderRight: `1px solid #EEEEEE`,
}));

const RightSide = styled(Grid)(({ theme }) => ({
  flex: '1 1 0',
  padding: 12,
}));

const DetailContainer = styled(Container)(({ theme }) => ({
  paddingBottom: 24,
}));

function DetailPage(props) {
  const { product, loading } = useProductDetail();

  const handleAddToCartSubmit = (formValues) => {
    console.log('🚀 ~ file: DetailPage.jsx:24 ~ handleAddToCartSubmit ~ formValues:', formValues);
  };

  if (loading) {
    return (
      <Box>
        <LinearProgress />
      </Box>
    );
  }

  return (
    <Box pt={4}>
      <Box>
        <DetailContainer>
          <Paper elevation={0}>
            <Grid container>
              <LeftSide item>
                <ProductThumbnail product={product} />
              </LeftSide>
              <RightSide item>
                <ProductInfo product={product} />
                <AddToCardForm onSubmit={handleAddToCartSubmit} />
              </RightSide>
            </Grid>
          </Paper>
          <ProductMenu product={product} />
        </DetailContainer>
      </Box>
    </Box>
  );
}

export default DetailPage;
