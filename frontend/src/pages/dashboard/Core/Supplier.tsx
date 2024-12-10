import {
  TableRow,
  TableCell,
  Checkbox,
  Stack,
  Button,
  IconButton,
} from "@mui/material";
import { IList } from "../Model/ILIst";
import Iconify from "../../../core/Iconify";

interface IProps {
  data: IList;
}
const Supplier = ({ data }: IProps) => {
  return (
    <>
      <TableRow>
        <TableCell align="left">
          <Checkbox />
        </TableCell>
        <TableCell align="left" sx={{ fontSize: 12 }}>
          {data.name}
        </TableCell>
        <TableCell align="left" sx={{ fontSize: 12 }}>
          {data.location}
        </TableCell>
        <TableCell align="left" sx={{ fontSize: 12 }} colSpan={3}>
          {data.certificates && data.certificates[0]}
        </TableCell>
        <TableCell align="left" sx={{ fontSize: 12 }}>
          {data.creditRating}
        </TableCell>
        <TableCell align="left" sx={{ fontSize: 12 }}>
          {data.numberOfEmployees}
        </TableCell>
        <TableCell align="left" sx={{ fontSize: 12 }}>
          {data.revenue}
        </TableCell>
        <TableCell align="left" sx={{ fontSize: 12 }}>
          {data.exportTransactionTurnover}
        </TableCell>
        <TableCell align="left" sx={{ fontSize: 12 }}>
          {data.exportingToCountries}
        </TableCell>
        <TableCell align="left" sx={{ fontSize: 12 }}>
          {data.transactionsHistory}
        </TableCell>
        <TableCell align="left">
          <Stack direction={"row"} gap={1}>
            <IconButton sx={{ border: "1px solid #ccc", borderRadius: "10px" }}>
              <Iconify icon="tabler:eye" />
            </IconButton>
            <IconButton sx={{ border: "1px solid #ccc", borderRadius: "10px" }}>
              <Iconify icon="fluent:edit-28-regular" />
            </IconButton>
          </Stack>
        </TableCell>
        {/* {rowHeading.map((data, index) => (
          <TableCell key={index} align="left" colSpan={data.colspan}>
            {data.name.slice(0, 9)}
          </TableCell>
        ))} */}
      </TableRow>
    </>
  );
};
export default Supplier;
