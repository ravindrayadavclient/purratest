import { makeStyles } from "tss-react/mui";
const drawerWidth = 280;

const useStyles = makeStyles({ name: "layout" })((theme) => ({
  mainLayout: {
    padding: theme.spacing(2),
    position: "relative",
  },
  drawer: {
    width: drawerWidth,
    position: "relative",
    flexShrink: 0,
    "& .MuiDrawer-paper": {
      width: drawerWidth,
      boxSizing: "border-box",
      background: theme.palette.background.paper,
    },
  },
  mainBody: {
    width: `calc(100% - ${drawerWidth})`,
    marginLeft: drawerWidth,
    height: "100vh",
    background: theme.palette.background.paper,
  },
}));
export default useStyles;
