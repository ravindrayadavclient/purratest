import List from "@mui/material/List";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";

import { useState } from "react";
import { Checkbox, ListItem, Typography } from "@mui/material";
import Iconify from "../../../../core/Iconify";
import useFilterStore from "../../../../store/Filter";
import useFormStore from "../../../../store/FormData";

const Authorisations = () => {
  const { authorisations } = useFilterStore();
  const [open, setOpen] = useState(false);
  const { setFormData } = useFormStore();

  const [selectedAuthorisations, setSelectedAuthorisations] = useState<
    string[]
  >([]);

  const handleClick = () => {
    setOpen(!open);
  };

  // const handleCheckboxChange = (data: string) => {
  //   const isSelected = selectedAuthorisations.includes(data);

  //   // Update selectedAuthorisations array
  //   const updatedSelections = isSelected
  //     ? selectedAuthorisations.filter((item) => item !== data)
  //     : [...selectedAuthorisations, data];

  //   setSelectedAuthorisations(updatedSelections);

  //   // Convert array to comma-separated string and log
  //   const formattedString = updatedSelections.join("&");
  //   console.log("Selected data:", formattedString);

  //   // Update the Zustand store with the formatted string
  //   setFormData("certificates", formattedString);
  // };

  const handleCheckboxChange = (data: string) => {
    const isSelected = selectedAuthorisations.includes(data);

    // Update selectedAuthorisations array
    const updatedSelections = isSelected
      ? selectedAuthorisations.filter((item) => item !== data)
      : [...selectedAuthorisations, data];

    setSelectedAuthorisations(updatedSelections);
    const formattedString = updatedSelections.join(", ");
    const encodedString = encodeURIComponent(formattedString);

    setFormData("certificates", encodedString);
  };

  return (
    <>
      <ListItem onClick={handleClick} selected={open === true}>
        <ListItemIcon>
          <Iconify icon={"cib:f-secure"} color="primary" />
        </ListItemIcon>
        <ListItemText primary={"Authorisations"} />
        <ListItemIcon>
          <Iconify icon={open ? "ep:arrow-down-bold" : "ep:arrow-right-bold"} />
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
          {authorisations &&
            authorisations.map((data) => (
              <ListItem key={data} sx={{ pb: 0, fontSize: "10px" }}>
                <Checkbox
                  checked={selectedAuthorisations.includes(data)}
                  onChange={() => handleCheckboxChange(data)}
                />
                <ListItemText
                  primary={<Typography variant="body1">{data}</Typography>}
                />
              </ListItem>
            ))}
        </List>
      </Collapse>
    </>
  );
};

export default Authorisations;
