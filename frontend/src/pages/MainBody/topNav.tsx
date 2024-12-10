import {
  AppBar,
  Avatar,
  Box,
  Divider,
  Toolbar,
  Stack,
  IconButton,
  OutlinedInput,
  Menu,
  MenuItem,
  Button,
  Popper,
} from "@mui/material";

import Iconify from "../../core/Iconify";
import { useEffect, useRef, useState } from "react";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";

import MenuList from "@mui/material/MenuList";
import useNavigateParams from "../../hooks/useNavigateParams";
import { BasicInput } from "../../core/BasicInput";

const TopNav = () => {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLButtonElement>(null);
  const navigate = useNavigateParams();
  const [formData, setFormData] = useState({
    name: "",
    certificates: "",
    turnoverMax: "",
    employeesMin: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event | React.SyntheticEvent) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  const searchHandler = () => {
    console.log(formData);
    navigate("search", formData);
  };

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          marginLeft: 280,
          backgroundColor: (theme) => theme.palette.background.paper,
          padding: 0,
        }}
      >
        <Toolbar sx={{ height: "74px" }}>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            width={"100%"}
            height={"100%"}
            marginLeft={"280px"}
          >
            <Stack
              direction={"row"}
              gap={"20px"}
              width={"50%"}
              alignItems={"center"}
            >
              <Box width={"100%"} position={"relative"}>
                <OutlinedInput
                  placeholder=" Search by supplier name , product or category...."
                  fullWidth
                  size="small"
                  startAdornment={<Iconify icon={"iconoir:search"} />}
                  sx={{ borderRadius: "10px" }}
                  // disabled={true}
                  onClick={handleToggle}
                  ref={anchorRef}
                  id="composition-button"
                  aria-controls={open ? "composition-menu" : undefined}
                  aria-expanded={open ? "true" : undefined}
                  aria-haspopup="true"
                />

                <Popper
                  open={open}
                  anchorEl={anchorRef.current}
                  role={undefined}
                  placement="bottom-start"
                  transition
                  disablePortal
                  sx={{ width: "100%", position: "absolute" }}
                >
                  {({ TransitionProps, placement }) => (
                    <Grow
                      {...TransitionProps}
                      style={{
                        transformOrigin:
                          placement === "bottom-start"
                            ? "left top"
                            : "left bottom",
                      }}
                    >
                      <Paper>
                        <ClickAwayListener onClickAway={handleClose}>
                          <MenuList
                            autoFocusItem={true}
                            id="composition-menu"
                            aria-labelledby="composition-button"
                            onKeyDown={handleListKeyDown}
                          >
                            <Stack direction="row" gap="10px" py={1}>
                              <OutlinedInput
                                size="small"
                                placeholder="Name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                              />
                              <OutlinedInput
                                size="small"
                                placeholder="Certificates"
                                name="certificates"
                                value={formData.certificates}
                                onChange={handleInputChange}
                              />
                            </Stack>
                            <Stack direction="row" gap="10px" py={1}>
                              <OutlinedInput
                                size="small"
                                placeholder="TurnOver"
                                name="turnoverMax"
                                value={formData.turnoverMax}
                                onChange={handleInputChange}
                              />
                              <OutlinedInput
                                size="small"
                                placeholder="Number Of Employee"
                                name="employeesMin"
                                value={formData.employeesMin}
                                onChange={handleInputChange}
                              />
                            </Stack>
                          </MenuList>
                        </ClickAwayListener>
                      </Paper>
                    </Grow>
                  )}
                </Popper>
              </Box>
              <IconButton
                sx={{
                  border: "1px solid #E7E7E7",
                  borderRadius: "10px",
                }}
                onClick={searchHandler}
              >
                <Iconify icon={"hugeicons:filter"} />
              </IconButton>
            </Stack>
            <Stack direction={"row"} gap={"20px"} alignItems={"center"}>
              <IconButton
                sx={{
                  border: "1px solid #E7E7E7",
                  borderRadius: "10px",
                }}
                size="small"
              >
                <Iconify icon={"ci:bell"} />
              </IconButton>

              <IconButton
                sx={{
                  border: "1px solid #E7E7E7",
                  borderRadius: "10px",
                }}
                size="small"
              >
                <Iconify icon={"wpf:message-outline"} />
              </IconButton>

              <Avatar src={"/images/avatars/Ellipse 2824.png"} alt="profile" />
            </Stack>
          </Stack>
        </Toolbar>
        <Divider />
      </AppBar>
    </>
  );
};
export default TopNav;
