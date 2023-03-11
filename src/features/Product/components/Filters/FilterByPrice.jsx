import styled from '@emotion/styled';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { useState } from 'react';

const PriceContent = styled(Box)({
  padding: 16,
});

const ApplyButton = styled(Button)({
  marginTop: 8,
});

function FilterByPrice({ onChange }) {
  const [values, setValues] = useState({
    salePrice_gte: 0,
    salePrice_lte: 0,
  });

  const handleChange = (e) => {
    setValues((prevValues) => ({
      ...prevValues,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = () => {
    if (!onChange || (values.salePrice_gte === 0 && values.salePrice_lte === 0)) return;
    onChange(values);

    setValues({
      salePrice_gte: 0,
      salePrice_lte: 0,
    });
  };

  return (
    <PriceContent>
      <Typography
        variant="subtitle2"
        sx={{
          fontWeight: 'bold',
        }}
      >
        GIÁ
      </Typography>
      <Stack direction="row">
        <TextField name="salePrice_gte" variant="standard" value={values.salePrice_gte} onChange={handleChange} />
        <Box component="span" sx={{ ml: 1, mr: 1, pt: 1 }}>
          -
        </Box>
        <TextField name="salePrice_lte" variant="standard" value={values.salePrice_lte} onChange={handleChange} />
      </Stack>
      <ApplyButton variant="outlined" color="primary" size="small" onClick={handleSubmit}>
        Ap dung
      </ApplyButton>
    </PriceContent>
  );
}

export default FilterByPrice;
