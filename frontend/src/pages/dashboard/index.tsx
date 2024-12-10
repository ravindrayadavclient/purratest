import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  IconButton,
  OutlinedInput,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

import { Barchart, PieChart } from "../../core/Charts";
import H1 from "../../core/H1";
import Iconify from "../../core/Iconify";
import { rowHeading } from "./data";
import { SupplierList } from "./Core";
const Dashboard = () => {
  const cardList = [
    {
      id: 1,
      title: "Revenue (Millions)",
      num: "$12,489 M",
      url: "iconoir:coin",
    },
    {
      id: 2,
      title: "Export Turnover ",
      num: "$2,572 M",
      url: "mynaui:cart",
    },
    {
      id: 3,
      title: "Number of Employees",
      num: "5M",
      url: "ci:users",
    },
    {
      id: 4,
      title: "Transactions History",
      num: "$389M",
      url: "icons8:box",
    },
  ];
  return (
    <>
      <Container>
        <Box sx={{ width: "100%", display: "flex", gap: "30px", mt: 5 }}>
          {cardList.map((data, index) => {
            return (
              <Stack
                component={Paper}
                elevation={1}
                height={"180px"}
                width={"100%"}
              >
                <Stack direction={"column"} gap={"20px"} alignItems={"left"}>
                  <IconButton
                    size="large"
                    sx={{
                      border: "1px solid #ccc",
                      height: "50px",
                      width: "50px",
                    }}
                    color="primary"
                  >
                    <Iconify icon={data.url} />
                  </IconButton>
                  <Stack
                    direction={"row"}
                    justifyContent={"space-between"}
                    alignItems={"end"}
                  >
                    <Typography component={"span"} variant="h3">
                      {data.num}
                      <Typography
                        fontWeight={"600"}
                        fontSize={"14px"}
                        color={(theme) => theme.palette.divider}
                      >
                        {data.title}
                      </Typography>
                    </Typography>

                    <Typography
                      sx={{
                        color: "#45CB85",
                        fontSize: "15px",
                        fontWeight: "600",
                      }}
                    >
                      0.52%
                    </Typography>
                  </Stack>
                </Stack>
              </Stack>
            );
          })}
        </Box>
        <Box mt={2} display={"flex"} gap={"30px"} height={"500px"}>
          <Stack width={"70%"} component={Paper} elevation={2}>
            <Typography variant="h4" component={"span"} gutterBottom>
              Website Visits
              <Typography color={(theme) => theme.palette.divider}>
                (+43%) than last year
              </Typography>
            </Typography>
            <Divider flexItem={true} />
            <Box pt={1.5}>
              <Barchart />
            </Box>
          </Stack>
          <Stack width={"30%"} component={Paper} elevation={2}>
            <Typography variant="h4" component={"span"} gutterBottom>
              Current Visits
            </Typography>
            <Box sx={{ height: "100%", width: "100%" }}>
              <Box mr={0} sx={{ height: "100%", width: "100%" }}>
                <PieChart />
              </Box>
            </Box>
          </Stack>
        </Box>
        <SupplierList />
      </Container>
    </>
  );
};

export default Dashboard;
