import {
  Grid,
  Paper,
  Rating,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import H1 from "../../../../core/H1";

import Iconify from "../../../../core/Iconify";
import { IList } from "../../../dashboard/Model/ILIst";

interface IProps {
  data: IList;
}
const GridView = ({ data }: IProps) => {
  return (
    <>
      <Stack component={Paper} elevation={1}>
        <Stack direction={"row"} gap={1}>
          <img src="/images/logo-company.png" width={"150px"} />
          <div style={{ width: "100%" }}>
            <Typography variant="subtitle1">Supplier Name</Typography>
            <Typography variant="h5" textTransform={"uppercase"}>
              {data.name}
            </Typography>
            <Rating value={4} size="small" />
            <Typography variant="subtitle2">
              Certificates and Authorizations
            </Typography>
            <Stack direction={"row"}>
              {[1, 2, 3].map((data, index) => {
                return (
                  <img
                    src={`/images/${index + 1}.png`}
                    style={{ width: "30px" }}
                  />
                );
              })}
            </Stack>

            <Stack direction={"column"} py={2}>
              <Stack direction={"row"} justifyContent={"space-between"}>
                <Typography
                  display={"flex"}
                  alignItems={"center"}
                  gap={"10px"}
                  variant="body2"
                >
                  <Iconify icon={"ci:users-group"} /> Number Of Employees
                </Typography>
                <Typography variant="subtitle2">
                  {data.numberOfEmployees}
                </Typography>
              </Stack>

              <Stack direction={"row"} justifyContent={"space-between"}>
                <Typography
                  display={"flex"}
                  alignItems={"center"}
                  gap={"10px"}
                  variant="body2"
                >
                  <Iconify icon={"solar:card-outline"} /> Revenue (Millions)
                </Typography>
                <Typography variant="subtitle2">{data.revenue}M</Typography>
              </Stack>

              <Stack direction={"row"} justifyContent={"space-between"}>
                <Typography
                  display={"flex"}
                  alignItems={"center"}
                  gap={"10px"}
                  variant="body2"
                >
                  <Iconify icon={"icon-park-outline:transaction"} />
                  Transactions History
                </Typography>
                <Typography variant="subtitle2">
                  {data.transactionsHistory && data.transactionsHistory[0]}
                </Typography>
              </Stack>
            </Stack>
          </div>
        </Stack>
      </Stack>
    </>
  );
};
export default GridView;
