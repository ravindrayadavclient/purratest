import React from "react";
import { Outlet } from "react-router-dom";
import Body from "../../pages/MainBody";

const ProtectedRoute: React.FC = () => {
  return (
    <Body>
      <Outlet />
    </Body>
  );
};

export default ProtectedRoute;
