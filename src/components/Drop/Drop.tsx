import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Typography } from '@mui/material';


export default function Drop() {
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <FormControl sx={{ m: 0, minWidth: 220 }} size="small">
      <InputLabel id="demo-select-small"> Please Select </InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={age}
        label="Please Select"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Andhra Pradesh</MenuItem>
        <MenuItem value={10}>Assam</MenuItem>
        <MenuItem value={10}>Bihar </MenuItem>
        <MenuItem value={10}>Madhya Pradesh </MenuItem>
        <MenuItem value={10}>Uttar Pradesh</MenuItem>
        <MenuItem value={10}>West Bengal </MenuItem>
        <MenuItem value={10}>Jammu and Kashmir </MenuItem>
        <MenuItem value={10}>Rajasthan</MenuItem>
        <MenuItem value={10}>Bhopal</MenuItem>
        <MenuItem value={10}>Manipur</MenuItem>
        <MenuItem value={10}>Goa</MenuItem>
        <MenuItem value={10}>Gujarat</MenuItem>
        <MenuItem value={10}>Haryana</MenuItem>
        <MenuItem value={10}>Himachal Pradesh</MenuItem>
        <MenuItem value={10}>Jharkhand</MenuItem>
        <MenuItem value={10}>Karnataka</MenuItem>
        <MenuItem value={10}>Maharashtra</MenuItem>
        <MenuItem value={10}>Rajasthan</MenuItem>

      </Select>
    </FormControl>
  );
}
