import { Paper, Rating, Stack, Typography } from "@mui/material";

import Iconify from "../../../../core/Iconify";
import { IList } from "../../../dashboard/Model/ILIst";
interface IProps {
  data: IList;
}
const ListView = ({ data }: IProps) => {
  return (
    <>
      <Stack component={Paper} elevation={1} direction={"column"}>
        <img src="/images/logo-company.png" width={"100%"} />

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
                fontSize={12}
              >
                <Iconify icon={"ci:users-group"} /> Number Of Employees
              </Typography>
              <Typography variant="subtitle2" fontSize={12}>
                {data.numberOfEmployees}
              </Typography>
            </Stack>

            <Stack direction={"row"} justifyContent={"space-between"}>
              <Typography
                display={"flex"}
                alignItems={"center"}
                gap={"10px"}
                variant="body2"
                fontSize={12}
              >
                <Iconify icon={"solar:card-outline"} /> Revenue (Millions)
              </Typography>
              <Typography variant="subtitle2" fontSize={12}>
                {data.revenue}M
              </Typography>
            </Stack>

            <Stack direction={"row"} justifyContent={"space-between"}>
              <Typography
                display={"flex"}
                alignItems={"center"}
                gap={"10px"}
                variant="body2"
                fontSize={12}
              >
                <Iconify icon={"icon-park-outline:transaction"} />
                Transactions History
              </Typography>
              <Typography variant="subtitle2" fontSize={12}>
                {data.transactionsHistory && data.transactionsHistory[0]}
              </Typography>
            </Stack>
          </Stack>
        </div>
      </Stack>
    </>
  );
};
export default ListView;
