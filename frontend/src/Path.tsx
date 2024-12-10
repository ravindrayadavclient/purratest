import { CircularProgress } from "@mui/material";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./pages/dashboard";
import Search from "./pages/Search";
// const Dashbord = lazy(() => import("./pages/dashboard"));

const Path = () => {
  return (
    <>
      <Suspense fallback={<CircularProgress disableShrink />}>
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/search" element={<Search />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};
export default Path;
