import React from 'react';
import PropTypes from 'prop-types';
import { Tab, Tabs } from '@mui/material';

ProductSort.propTypes = {
  currentSort: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

function ProductSort({ currentSort, onChange }) {
  const handleSortChange = (event, newValue) => {
    if (onChange) onChange(newValue);
  };

  return (
    <Tabs value={currentSort} onChange={handleSortChange} textColor="primary" indicatorColor="primary">
      <Tab label="Gia thap toi cao" value="salePrice:ASC" />
      <Tab label="Gia cao xuong thap" value="salePrice:DESC" />
    </Tabs>
  );
}

export default ProductSort;
