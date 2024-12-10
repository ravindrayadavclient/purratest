import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import SideNav from "./sideNav";
import TopNav from "./topNav";

import useMobile from "../../hooks/useMobile";
import { Container, Toolbar } from "@mui/material";
import useStyles from "./styles";
import { SupplierServies } from "../../services/SupplierServies";
import useFilterStore from "../../store/Filter";

interface IProps {
  children?: React.ReactNode;
}
const Body = ({ children }: IProps) => {
  const { classes } = useStyles();

  const {
    setAuthorisations,
    setLocations,
    setCreditRating,
    setRevenue,
    setEmployee,
  } = useFilterStore();

  const getFilterCertificates = async () => {
    try {
      const response = await SupplierServies.getFilterCertificates();
      if (response.status === 200 && response.data) {
        setAuthorisations(response.data.data);
      } else {
        console.error("Something went wrong");
      }
    } catch (error) {
      console.error("Error fetching supplier data:", error);
      // Add state updates or other logic here if needed
    }
  };

  const getFilterLocation = async () => {
    try {
      const response = await SupplierServies.getFilterLocation();
      if (response.status === 200 && response.data) {
        setLocations(response.data.data);
      } else {
        console.error("Something went wrong");
      }
    } catch (error) {
      console.error("Error fetching supplier data:", error);
      // Add state updates or other logic here if needed
    }
  };

  const getFilterCreditRatings = async () => {
    try {
      const response = await SupplierServies.getFilterCreditRatings();
      if (response.status === 200 && response.data) {
        setCreditRating(response.data.data);
      } else {
        console.error("Something went wrong");
      }
    } catch (error) {
      console.error("Error fetching supplier data:", error);
      // Add state updates or other logic here if needed
    }
  };

  const getFilterEmployees = async () => {
    try {
      const response = await SupplierServies.getFilterEmployees();
      if (response.status === 200 && response.data) {
        setEmployee(response.data.data);
      } else {
        console.error("Something went wrong");
      }
    } catch (error) {
      console.error("Error fetching supplier data:", error);
      // Add state updates or other logic here if needed
    }
  };

  const getFilterRevenue = async () => {
    try {
      const response = await SupplierServies.getFilterRevenue();
      if (response.status === 200 && response.data) {
        setRevenue(response.data.data);
      } else {
        console.error("Something went wrong");
      }
    } catch (error) {
      console.error("Error fetching supplier data:", error);
      // Add state updates or other logic here if needed
    }
  };

  useEffect(() => {
    getFilterCertificates();
    getFilterLocation();
    getFilterRevenue();
    getFilterCreditRatings();
    getFilterEmployees();
  }, []);

  return (
    <Box sx={{ position: "relative" }}>
      <SideNav />
      <Box component="main" className={classes.mainBody}>
        <TopNav />
        <Toolbar />

        <Container maxWidth="lg">
          <Box mt={2}>{children}</Box>
        </Container>
      </Box>
    </Box>
  );
};
export default Body;
