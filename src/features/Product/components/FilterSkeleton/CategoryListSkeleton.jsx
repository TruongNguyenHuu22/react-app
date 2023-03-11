import React from 'react';
import PropTypes from 'prop-types';
import { List, ListItem, ListItemButton, Skeleton } from '@mui/material';

CategoryListSkeleton.propTypes = {
  length: PropTypes.number,
};

CategoryListSkeleton.defaultProps = {
  length: 6,
};

function CategoryListSkeleton({ length }) {
  return (
    <List sx={{ height: '304px' }}>
      {Array.from(new Array(length)).map((x, index) => (
        <ListItem key={index} disablePadding>
          <ListItemButton>
            <Skeleton animation="wave" width="100%" height="30px" />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
}

export default CategoryListSkeleton;
