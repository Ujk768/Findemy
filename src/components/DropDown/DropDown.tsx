import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import LanguageIcon from "@mui/icons-material/Language";
import { Typography } from "@mui/material";

export default function Dropdown() {
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <FormControl sx={{ m: 0, minWidth: 220 }} size="small">
      <InputLabel id="demo-select-small">
        <LanguageIcon />{" "}
      </InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={age}
        label="India"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>India</MenuItem>
      </Select>
    </FormControl>
  );
}
