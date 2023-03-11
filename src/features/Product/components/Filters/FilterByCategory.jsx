import styled from '@emotion/styled';
import { Box, List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material';
import categoryApi from 'api/categoryApi';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import CategoryListSkeleton from '../FilterSkeleton/CategoryListSkeleton';

FilterByCategory.propTypes = {
  onChange: PropTypes.func,
};

const CategoryContent = styled(Box)({
  padding: 16,
  height: 310,
});

function FilterByCategory({ onChange }) {
  const [categoryList, setCategoryList] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        const list = await categoryApi.getAll();
        const customList = list.map((x) => ({
          id: x.id,
          name: x.name,
        }));
        setCategoryList(customList);
        localStorage.setItem('categories', JSON.stringify(customList));
      } catch (error) {
        console.log('Failed to fetch category list', error);
      }
    })();
    setLoading(false);
  }, [dispatch]);

  const handleCategoryClick = (category) => {
    if (onChange) {
      onChange(category.id);
    }
  };
  return (
    <CategoryContent>
      <Typography
        variant="subtitle2"
        sx={{
          fontWeight: 'bold',
        }}
      >
        DANH MỤC SẢN PHẨM
      </Typography>
      {loading || categoryList.length === 0 ? (
        <CategoryListSkeleton />
      ) : (
        <List>
          {categoryList.map((category) => (
            <ListItem disablePadding key={category.id}>
              <ListItemButton onClick={() => handleCategoryClick(category)}>
                <ListItemText primary={category.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      )}
    </CategoryContent>
  );
}

export default FilterByCategory;
