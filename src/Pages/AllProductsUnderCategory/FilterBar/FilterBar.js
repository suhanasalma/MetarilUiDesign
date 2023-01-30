import { Checkbox, FormControlLabel, Paper } from '@mui/material';
import React from 'react';


const FilterBar = ({ item, handleChange }) => {
  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={item.name}
          onChange={handleChange}
          name={item.name}
        />
      }
      label={item.name}
    />
  );
};


export default FilterBar;