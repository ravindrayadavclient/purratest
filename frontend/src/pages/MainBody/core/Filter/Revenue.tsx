import React, { useState } from "react";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import Iconify from "../../../../core/Iconify";
import useFilterStore from "../../../../store/Filter";
import useFormStore from "../../../../store/FormData";

const Revenue = () => {
  const { revenue } = useFilterStore();
  const { setFormData } = useFormStore();
  const [revenueData, setRevenueData] = useState<number>(revenue.minRevenue);
  const [open, setOpen] = useState<boolean>(false);

  const handleToggle = () => setOpen((prev) => !prev);

  const handleChange = (_event: Event, newValue: number | number[]) => {
    const value = newValue as number;
    setRevenueData(value);
    setFormData("turnoverMax", value.toString());
  };

  return (
    <>
      <ListItem
        onClick={handleToggle}
        selected={open}
        sx={{
          background: open ? "rgba(0, 7, 45, 1)" : "#fff",
          color: open ? "#fff" : "inherit",
          cursor: "pointer",
        }}
      >
        <ListItemIcon>
          <Iconify icon="majesticons:money-line" color="primary" />
        </ListItemIcon>
        <ListItemText primary="Turn Over" />
        <ListItemIcon>
          <Iconify icon={open ? "ep:arrow-down-bold" : "ep:arrow-right-bold"} />
        </ListItemIcon>
      </ListItem>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <Box sx={{ margin: "auto", textAlign: "center", px: 1.5, py: 2.5 }}>
          <Slider
            value={revenueData}
            onChange={handleChange}
            min={revenue.minRevenue}
            max={revenue.maxRevenue}
            step={1}
            marks={[
              {
                value: revenue.minRevenue,
                label: `${revenue.minRevenue.toFixed()}M`,
              },
              {
                value: revenue.maxRevenue,
                label: `${revenue.maxRevenue.toFixed()}M`,
              },
            ]}
            valueLabelDisplay="auto"
            sx={{
              color: "#001F5C",
              "& .MuiSlider-thumb": {
                backgroundColor: "#001F5C",
                height: 16,
                width: 16,
              },
              "& .MuiSlider-track": {
                backgroundColor: "#001F5C",
                height: 4,
              },
              "& .MuiSlider-rail": {
                backgroundColor: "#ccc",
                height: 4,
              },
            }}
          />

          {/* Display the selected revenue */}
          {/* <div
            style={{
              marginTop: 10,
              fontSize: "1rem",
              fontWeight: 600,
              color: "rgba(0, 0, 0, 0.7)",
            }}
          >
            Selected Revenue: {revenueData.toFixed()}M
          </div> */}
        </Box>
      </Collapse>
    </>
  );
};

export default Revenue;
