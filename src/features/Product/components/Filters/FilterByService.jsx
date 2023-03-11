import { Box, Checkbox, FormControlLabel, FormGroup, Typography } from '@mui/material';

const checkBoxList = [
  { value: 'isPromotion', label: 'Promotion' },
  { value: 'isFreeShip', label: 'Free ship' },
];

function FilterByService({ filters = {}, onChange }) {
  const handleChange = (e) => {
    if (!onChange) return;
    onChange({ [e.target.name]: e.target.checked });
  };

  return (
    <Box sx={{ p: 2 }}>
      <Typography
        variant="subtitle2"
        sx={{
          fontWeight: 'bold',
        }}
      >
        DICH VU
      </Typography>
      <FormGroup>
        {checkBoxList.map((service) => (
          <FormControlLabel
            key={service.value}
            control={
              <Checkbox
                checked={!!filters[service.value]}
                onChange={handleChange}
                name={service.value}
                color="primary"
              />
            }
            label={service.label}
          />
        ))}
      </FormGroup>
    </Box>
  );
}

export default FilterByService;
