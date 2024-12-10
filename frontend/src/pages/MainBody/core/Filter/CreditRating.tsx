import React, { useState } from "react";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";
import useFilterStore from "../../../../store/Filter";
import List from "@mui/material/List";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import Iconify from "../../../../core/Iconify";
import useFormStore from "../../../../store/FormData";

const CreditRating = () => {
  const { creditRating } = useFilterStore();
  const { formData, setFormData } = useFormStore();
  const [value, setValue] = useState<number>(1); // Default to "A+"

  const handleChange = (_event: Event, newValue: number | number[]) => {
    const index = newValue as number;
    setValue(index);
    setFormData("creditRatio", creditRating[index]);
  };
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <ListItem
        onClick={handleClick}
        selected={open == true ? true : false}
        sx={{ background: open ? "rgba(0, 7, 45, 1)" : "#fff" }}
      >
        <ListItemIcon>
          <Iconify icon={"hugeicons:credit-card"} color="primary" />
        </ListItemIcon>
        <ListItemText primary={"Credit Rating"} />
        <ListItemIcon>
          <Iconify
            icon={open == true ? "ep:arrow-down-bold" : "ep:arrow-right-bold"}
          />
        </ListItemIcon>
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <Box sx={{ margin: "auto", textAlign: "center" }}>
          <div
            style={{
              marginBottom: 8,
              fontSize: "0.9rem",
              fontWeight: 700,
              color: "rgba(0, 0, 0, 0.56)",
            }}
          >
            {creditRating[value]}
          </div>

          <Slider
            value={value}
            onChange={handleChange}
            step={1}
            // marks={marks}
            min={0}
            max={creditRating.length - 1}
            valueLabelDisplay="off"
            sx={{
              color: "#001F5C", // Navy blue color for the slider
              "& .MuiSlider-thumb": {
                backgroundColor: "#001F5C",
              },
              "& .MuiSlider-track": {
                backgroundColor: "#001F5C",
              },
              "& .MuiSlider-rail": {
                backgroundColor: "#ccc",
              },
            }}
          />
        </Box>
      </Collapse>
    </>
  );
};
export default CreditRating;
