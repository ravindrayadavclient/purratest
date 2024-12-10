import Box from "@mui/material/Box";
import List from "@mui/material/List";

import Drawer from "@mui/material/Drawer";
import { Button, Divider } from "@mui/material";

import Logo from "../../core/Logo";
import useStyles from "./styles";
import CenterBox from "../../core/CenterBox";
import {
  Authorisations,
  CreditRating,
  Employee,
  Location,
  Revenue,
} from "./core/Filter";
import useNavigateParams from "../../hooks/useNavigateParams";
import useFormStore from "../../store/FormData";

const SideNav = () => {
  const { classes } = useStyles();
  const navigate = useNavigateParams();
  const { formData, setFormData } = useFormStore();
  const filterHandler = () => {
    navigate("search", formData);
  };

  return (
    <Drawer className={classes.drawer} variant="permanent" anchor="left">
      <CenterBox height="74px">
        <Logo />
      </CenterBox>
      <Divider />

      <Box sx={{ position: "relative", height: "100%" }}>
        <Box p={1.3}>
          <List>
            {/* {NList.map((data, index) => {
              return <NavCard data={data} key={index} />;
            })} */}
            <Authorisations />
            <CreditRating />

            <Employee />
            <Revenue />
            <Location />
          </List>
          <Divider />
          <Button
            variant="contained"
            fullWidth
            size="large"
            sx={{ my: 2 }}
            onClick={filterHandler}
          >
            Filter
          </Button>
        </Box>
      </Box>
    </Drawer>
  );
};

export default SideNav;
