import styled from '@emotion/styled';
import { Box, Container, Grid, Pagination, Paper } from '@mui/material';
import productApi from 'api/productApi';
import queryString from 'query-string';
import { useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import FiltersViewer from '../components/Filters/FiltersViewer';
import ProductFilter from '../components/ProductFilter';
import ProductList from '../components/ProductList';
import ProductSkeletonList from '../components/ProductSkeletonList';
import ProductSort from '../components/ProductSort';

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

  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = useMemo(() => {
    const params = queryString.parse(location.search);
    return {
      ...params,
      _page: Number.parseInt(params._page) || 1,
      _limit: Number.parseInt(params._limit) || 9,
      _sort: params._sort || 'salePrice:ASC',
      isPromotion: params.isPromotion === 'true',
      isFreeShip: params.isFreeShip === 'true',
    };
  }, [location.search]);

  const [pagination, setPagination] = useState({
    limit: 9,
    total: 10,
    page: 1,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { data, pagination } = await productApi.getAll(queryParams);
        setProductList(data);
        setPagination(pagination);
      } catch (error) {
        console.log('Failed to fetch product list:', error);
      }
      setLoading(false);
    })();
  }, [queryParams]);

  const handlePageChange = (e, page) => {
    const filters = { ...queryParams, _page: page };
    navigate({
      pathname: location.pathname,
      search: queryString.stringify(filters),
    });
  };

  const handleSortChange = (newSortValue) => {
    const filters = { ...queryParams, _sort: newSortValue };
    navigate({
      pathname: location.pathname,
      search: queryString.stringify(filters),
    });
  };

  const handleFilterChange = (newFilters) => {
    const filters = { ...queryParams, ...newFilters };
    navigate({
      pathname: location.pathname,
      search: queryString.stringify(filters),
    });
  };

  const setNewFilters = (newFilters) => {
    navigate({
      pathname: location.pathname,
      search: queryString.stringify(newFilters),
    });
  };
  return (
    <Box>
      <Container>
        <Grid container spacing={1}>
          <LeftSide item>
            <Paper elevation={0}>
              <ProductFilter filters={queryParams} onChange={handleFilterChange} />
            </Paper>
          </LeftSide>
          <RightSide item>
            <Paper elevation={0}>
              <ProductSort currentSort={queryParams._sort} onChange={handleSortChange} />
              <FiltersViewer filters={queryParams} onChange={setNewFilters} />
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
