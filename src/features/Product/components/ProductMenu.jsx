import { Box, Tab, Tabs } from '@mui/material';
import { useState } from 'react';
import ProductAdditional from './ProductAdditional';
import ProductDescription from './ProductDescription';
import ProductReview from './ProductReview';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div hidden={value !== index} {...other}>
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

function ProductMenu({ product = {} }) {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Box sx={{ width: '100%' }}>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="Description" />
          <Tab label="Additional" />
          <Tab label="Review" />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <ProductDescription product={product} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ProductAdditional product={product} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ProductReview product={product} />
      </TabPanel>
    </>
  );
}

export default ProductMenu;
