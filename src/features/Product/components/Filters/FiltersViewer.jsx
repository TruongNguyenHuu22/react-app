import styled from '@emotion/styled';
import { Box, Chip } from '@mui/material';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import { useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';

FiltersViewer.propTypes = {
  fields: PropTypes.object,
  onChange: PropTypes.func,
};

const FilterListContent = styled(Box)({
  display: 'flex',
  flexFlow: 'row wrap',
  alignItems: 'center',
  margin: (2, 0),
  listStyleType: 'none',
});

const FILTER_LIST = [
  {
    id: 1,
    getLabel: () => 'Giao hang mien phi',
    isActive: (filters) => filters.isFreeShip,
    isVisible: () => true,
    isRemovable: false,
    onRemove: (filters) => {},
    onToggle: (filters) => {
      const newFilters = { ...filters };
      if (newFilters.isFreeShip) {
        delete newFilters.isFreeShip;
      } else {
        newFilters.isFreeShip = true;
      }
      return newFilters;
    },
  },
  {
    id: 2,
    getLabel: () => 'Co khuyen mai',
    isActive: (filters) => true,
    isVisible: (filters) => filters.isPromotion,
    isRemovable: true,
    onRemove: (filters) => {
      const newFilters = { ...filters };
      delete newFilters.isPromotion;
      return newFilters;
    },
    onToggle: null,
  },
  {
    id: 3,
    getLabel: (filters, filteredCategory) => `tu ${filters.salePrice_gte} den ${filters.salePrice_lte}`,
    isActive: (filters) => true,
    isVisible: (filters) => {
      if (filters.salePrice_lte === 0 && filters.salePrice_lte === 0) {
        return;
      }
      return Object.keys(filters).includes('salePrice_lte') && Object.keys(filters).includes('salePrice_gte');
    },
    isRemovable: true,
    onRemove: (filters) => {
      const newFilters = { ...filters };
      delete newFilters.salePrice_lte;
      delete newFilters.salePrice_gte;
      return newFilters;
    },
    onToggle: null,
  },
  {
    id: 4,
    getLabel: (filters, categoryLabel) => categoryLabel,
    isActive: (filters) => true,
    isVisible: (filters) => Object.keys(filters).includes('category.id'),
    isRemovable: true,
    onRemove: (filters) => {
      const newFilters = { ...filters };
      delete newFilters['category.id'];
      return newFilters;
    },
    onToggle: null,
  },
];

function FiltersViewer({ filters = {}, onChange }) {
  const categoryList = localStorage.getItem('categories');
  const location = useLocation();
  const params = queryString.parse(location.search);
  const [categoryLabel, setCategoryLabel] = useState(null);
  useEffect(() => {
    if (categoryList && params['category.id']) {
      const filterCategory = JSON.parse(categoryList).find((x) => x.id === Number.parseInt(params['category.id']));
      setCategoryLabel(filterCategory.name);
    }
  }, [categoryList, params]);

  const visibleFilters = useMemo(() => {
    return FILTER_LIST.filter((x) => x.isVisible(filters));
  }, [filters]);

  return (
    <FilterListContent>
      {visibleFilters.map((x) => (
        <Chip
          key={x.id}
          sx={{ m: 1 }}
          size="small"
          label={x.getLabel(filters, categoryLabel)}
          color={x.isActive(filters) ? 'primary' : 'default'}
          clickable={!x.isRemovable}
          onClick={
            x.isRemovable
              ? null
              : () => {
                  if (!onChange) return;
                  const newFilters = x.onToggle(filters);
                  onChange(newFilters);
                }
          }
          onDelete={
            x.isRemovable
              ? () => {
                  if (!onChange) return;
                  const newFilters = x.onRemove(filters);
                  onChange(newFilters);
                }
              : null
          }
        />
      ))}
    </FilterListContent>
  );
}

export default FiltersViewer;
