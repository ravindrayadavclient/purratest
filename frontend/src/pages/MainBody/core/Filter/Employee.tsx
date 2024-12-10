import List from "@mui/material/List";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import { useState } from "react";
import { Checkbox, ListItem, Typography } from "@mui/material";
import Iconify from "../../../../core/Iconify";
import useFilterStore from "../../../../store/Filter";

const Employee = () => {
  const { employee } = useFilterStore();
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <ListItem onClick={handleClick} selected={open == true ? true : false}>
        <ListItemIcon>
          <Iconify icon={"fontisto:persons"} color="primary" />
        </ListItemIcon>
        <ListItemText primary={"Employee"} />
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
          <ListItem sx={{ pb: 0, fontSize: "10px" }}>
            <ListItemIcon>
              <Checkbox />
            </ListItemIcon>

            <ListItemText
              primary={
                <Typography variant="body1">{employee.minEmployees}</Typography>
              }
            />
          </ListItem>
          <ListItem sx={{ pb: 0, fontSize: "10px" }}>
            <Checkbox />

            <ListItemText
              primary={
                <Typography variant="body1">{employee.maxEmployees}</Typography>
              }
            />
          </ListItem>
        </List>
      </Collapse>
    </>
  );
};
export default Employee;
