import Box from "@mui/material/Box";

import { useEffect } from "react";
import Menu from "@mui/material/Menu";

interface IAccount {
  open: boolean;
  anchorEl: null | HTMLElement;
  handleClose: () => void;
}
const SearchModel = ({ open, anchorEl, handleClose }: IAccount) => {
  // const classes = useStyles();
  //   const { setOpen } = useBackDropStore((state) => ({
  //     setOpen: state.setOpen,
  //   }));
  //   useEffect(() => {
  //     setOpen(open);
  //   }, [open]);

  return (
    <Menu
      anchorEl={anchorEl}
      id="account-menu"
      open={open}
      onClose={() => handleClose()}
      onClick={() => handleClose()}
      onMouseLeave={() => handleClose()}
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 2 }}
      disableScrollLock={true}
      PaperProps={{
        elevation: 0,
        sx: {
          overflow: "visible",
          filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
          mt: 1,
          ml: 1.5,
          "&:before": {
            content: '""',
            display: "block",
            position: "absolute",
            top: 0,
            right: 15,
            width: 10,
            height: 10,
            bgcolor: "background.paper",
            transform: "translateY(-50%) rotate(45deg)",
            // zIndex: 0,
          },
        },
      }}
      transformOrigin={{ horizontal: "right", vertical: "top" }}
      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
    >
      <Box
        sx={{ width: "400px", border: "1px solid #ccc" }}
        onMouseLeave={() => handleClose()}
      >
        {/* <AccountDetails /> */}
      </Box>
    </Menu>
  );
};
export default SearchModel;
