import { Box, Container, Grid, Paper } from '@mui/material';
import { styled } from '@mui/system';
import ProductInfo from '../components/ProductInfo';
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

function DetailPage(props) {
  const { product, loading } = useProductDetail();

  if (loading) {
    //skeleton loading
    return <Box>Loading</Box>;
  }

  return (
    <Box pt={4}>
      <Box>
        <Container>
          <Paper elevation={0}>
            <Grid container>
              <LeftSide item>
                <ProductThumbnail product={product} />
              </LeftSide>
              <RightSide item>
                <ProductInfo product={product} />
              </RightSide>
            </Grid>
          </Paper>
        </Container>
      </Box>
    </Box>
  );
}

export default DetailPage;
