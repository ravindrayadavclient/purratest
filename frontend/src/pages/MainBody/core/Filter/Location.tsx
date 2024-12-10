import List from "@mui/material/List";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";

import { useState } from "react";
import { Checkbox, ListItem, Typography } from "@mui/material";
import Iconify from "../../../../core/Iconify";
import useFilterStore from "../../../../store/Filter";
import useFormStore from "../../../../store/FormData";
const Location = () => {
  const { locations } = useFilterStore();
  const [open, setOpen] = useState(false);
  const { formData, setFormData } = useFormStore();
  const [selected, setSelected] = useState<string[]>([]);

  const handleClick = () => {
    setOpen(!open);
  };
  const handleCheckboxChange = (data: string) => {
    const isSelected = selected.includes(data);
    // Update selected array
    const updatedSelections = isSelected
      ? selected.filter((item) => item !== data)
      : [...selected, data];
    setSelected(updatedSelections);
    const formattedString = updatedSelections.join(", ");
    const encodedString = encodeURIComponent(formattedString);

    setFormData("location", encodedString);
  };
  return (
    <>
      {" "}
      <ListItem onClick={handleClick} selected={open == true ? true : false}>
        <ListItemIcon>
          <Iconify icon={"fluent:earth-24-regular"} color="primary" />
        </ListItemIcon>
        <ListItemText primary={"Countries"} />
        <ListItemIcon>
          <Iconify
            icon={open == true ? "ep:arrow-down-bold" : "ep:arrow-right-bold"}
          />
        </ListItemIcon>
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List
          component="div"
          disablePadding
          sx={{
            pl: 0,
            ml: 0,
            position: "relative",
          }}
        >
          {locations &&
            locations.map((data, index) => {
              return (
                <ListItem selected={false} sx={{ pb: 0, fontSize: "10px" }}>
                  <Checkbox
                    checked={selected.includes(data)}
                    onChange={() => handleCheckboxChange(data)}
                  />
                  <ListItemText
                    primary={<Typography variant="body1">{data}</Typography>}
                  />
                </ListItem>
              );
            })}
        </List>
      </Collapse>
    </>
  );
};
export default Location;
