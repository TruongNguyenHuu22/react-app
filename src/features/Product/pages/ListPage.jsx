import styled from '@emotion/styled';
import { Box, Container, Grid, Pagination, Paper } from '@mui/material';
import productApi from 'api/productApi';
import { useEffect, useState } from 'react';
import ProductList from '../components/ProductList';
import ProductSkeletonList from '../components/ProductSkeletonList';

ListPage.propTypes = {};

const LeftSide = styled(Grid)(({ theme }) => ({
  width: '250px',
}));

const RightSide = styled(Grid)(({ theme }) => ({
  flex: '1 1 0',
}));

const StyledPagination = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexFlow: 'row nowrap',
  justifyContent: 'center',
  marginTop: '20px',
  paddingBottom: '20px',
}));

function ListPage(props) {
  const [productList, setProductList] = useState([]);
  const [pagination, setPagination] = useState({
    limit: 9,
    total: 10,
    page: 1,
  });
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({ _page: 1, _limit: 9 });

  useEffect(() => {
    (async () => {
      try {
        const { data, pagination } = await productApi.getAll(filters);
        setProductList(data);
        setPagination(pagination);
      } catch (error) {
        console.log('Failed to fetch product list:', error);
      }
      setLoading(false);
    })();
  }, [filters]);

  const handlePageChange = (e, page) => {
    setFilters((prevFilters) => ({ ...prevFilters, _page: page }));
  };
  return (
    <Box>
      <Container>
        <Grid container spacing={1}>
          <LeftSide item>
            <Paper elevation={0}>left column</Paper>
          </LeftSide>
          <RightSide item>
            <Paper elevation={0}>
              {loading ? <ProductSkeletonList /> : <ProductList data={productList} />}
              <StyledPagination>
                <Pagination
                  color="primary"
                  count={Math.ceil(pagination.total / pagination.limit)}
                  page={pagination.page}
                  onChange={handlePageChange}
                />
              </StyledPagination>
            </Paper>
          </RightSide>
        </Grid>
      </Container>
    </Box>
  );
}

export default ListPage;
