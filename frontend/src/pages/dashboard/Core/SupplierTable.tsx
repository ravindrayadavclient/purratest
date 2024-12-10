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
import { useEffect, useState } from "react";
import Iconify from "../../../core/Iconify";
import { rowHeading } from "../data";
import { SupplierServies } from "../../../services/SupplierServies";
import { IList } from "../Model/ILIst";
import Supplier from "./Supplier";

const SupplierTable = () => {
  const [list, setList] = useState<IList[] | undefined>(undefined);

  const getSupplierList = async () => {
    try {
      const response = await SupplierServies.getSupplier();
      if (response.status === 200 && response.data) {
        setList(response.data.data);
      } else {
        console.error("Something went wrong");
      }
    } catch (error) {
      console.error("Error fetching supplier data:", error);
      // Add state updates or other logic here if needed
    }
  };

  useEffect(() => {
    getSupplierList();
  }, []);

  return (
    <Stack component={Paper} my={2} p={2}>
      <Box>
        <Typography variant="h4">Recent Orders</Typography>
        <Typography variant="h5" fontSize="14px">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultrices
          lectus sem.
        </Typography>
      </Box>

      <Stack
        component={Paper}
        elevation={2}
        justifyContent="space-between"
        alignItems="center"
        direction="row"
        my={2}
        p={2}
      >
        <OutlinedInput
          placeholder="Search"
          startAdornment={
            <Iconify icon="proicons:search" sx={{ color: "#1087D3" }} />
          }
          size="small"
          sx={{ width: "50%" }}
        />
        <Stack direction="row" gap="20px" alignItems="center">
          <Typography
            sx={{
              color: "#1087D3",
              alignItems: "center",
              display: "flex",
              fontSize: "14px",
            }}
          >
            <Iconify icon="stash:data-date-light" /> 10 Mar, 2022 - 10 Apr, 2024
          </Typography>

          <Button
            startIcon={<Iconify icon="hugeicons:filter" />}
            variant="contained"
            size="large"
          >
            Filter
          </Button>
        </Stack>
      </Stack>

      <TableContainer sx={{ maxHeight: 400, pt: 1, my: 2 }} component={Paper}>
        <Table stickyHeader aria-label="supplier table">
          <TableHead>
            <TableRow>
              <TableCell align="left">
                <Checkbox />
              </TableCell>
              {rowHeading.map((data, index) => (
                <TableCell
                  key={index}
                  align="left"
                  colSpan={data.colspan ? data.colspan : 1}
                >
                  {data.name}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {list &&
              list.map((data, index) => {
                return <Supplier data={data} />;
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </Stack>
  );
};

export default SupplierTable;
