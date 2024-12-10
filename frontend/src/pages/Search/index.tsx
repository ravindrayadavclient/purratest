import { Grid, Stack, ToggleButton, ToggleButtonGroup } from "@mui/material";
import H1 from "../../core/H1";
import { useEffect, useState, useCallback, useMemo } from "react";
import Iconify from "../../core/Iconify";
import GridView from "./Core/Card/GridView";
import ListView from "./Core/Card/ListView";
import useQuery from "../../hooks/useQuery";
import { IList } from "../dashboard/Model/ILIst";
import { SupplierServies } from "../../services/SupplierServies";

const Search = () => {
  const [view, setView] = useState<string>("grid");
  const query = useQuery();
  const [list, setList] = useState<IList[] | undefined>(undefined);

  // Extract query parameters once
  const queryParameters = useMemo(() => {
    return {
      name: query.get("name") || "",
      certificates: query.get("certificates") || "",
      turnoverMax: query.get("turnoverMax") || "",
      employeesMin: query.get("employeesMin") || "",
      employeesMax: query.get("employeesMax") || "",
    };
  }, [query]);

  // Fetch supplier list with memoized callback
  const getSupplierList = useCallback(async () => {
    try {
      const { name, certificates, turnoverMax, employeesMin, employeesMax } =
        queryParameters;
      const response = await SupplierServies.getSupplier(
        name,
        certificates,
        turnoverMax,
        employeesMin,
        employeesMax
      );

      if (response.status === 200 && response.data) {
        setList(response.data.data);
      } else {
        console.error("Error: Response was not successful");
      }
    } catch (error) {
      console.error("Error fetching supplier data:", error);
    }
  }, [queryParameters]);

  // Trigger the API call when query parameters change
  useEffect(() => {
    getSupplierList();
  }, []);

  const handleView = useCallback(
    (event: React.MouseEvent<HTMLElement>, newAlignment: string) => {
      setView(newAlignment);
    },
    []
  );

  return (
    <>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        py={2}
        alignItems={"center"}
      >
        <H1 title="Search" />
        <ToggleButtonGroup
          value={view}
          exclusive
          onChange={handleView}
          aria-label="view toggle"
          size="small"
        >
          <ToggleButton value="grid" aria-label="grid view">
            <Iconify icon={"mingcute:grid-line"} />
          </ToggleButton>
          <ToggleButton value="list" aria-label="list view">
            <Iconify icon={"ph:list"} />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
      <Grid container spacing={3}>
        {view === "grid" &&
          list &&
          list.map((data, index) => (
            <Grid item md={4} key={index}>
              <ListView data={data} />
            </Grid>
          ))}
        {view === "list" &&
          list &&
          list.map((data, index) => (
            <Grid item md={6} key={index}>
              <GridView data={data} />
            </Grid>
          ))}
      </Grid>
    </>
  );
};

export default Search;
