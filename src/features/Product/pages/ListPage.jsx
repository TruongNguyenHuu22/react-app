import styled from '@emotion/styled';
import { Box, Container, Grid, Paper } from '@mui/material';
import productApi from 'api/productApi';
import { useEffect } from 'react';

ListPage.propTypes = {};

const LeftSide = styled(Grid)(({ theme }) => ({
  width: '250px',
}));

const RightSide = styled(Grid)(({ theme }) => ({
  flex: '1 1 auto',
}));

function ListPage(props) {
  useEffect(() => {
    (async () => {
      const response = await productApi.getAll({ _page: 1, _limit: 10 });
      console.log({ response });
    })();
  }, []);
  return (
    <Box>
      <Container>
        <Grid container spacing={1}>
          <LeftSide item>
            <Paper elevation={0}>left column</Paper>
          </LeftSide>
          <RightSide item>
            <Paper elevation={0}> right column</Paper>
          </RightSide>
        </Grid>
      </Container>
    </Box>
  );
}

export default ListPage;
