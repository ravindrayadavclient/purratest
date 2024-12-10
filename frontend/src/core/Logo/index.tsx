import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const StyledLogo = styled("img")({
  height: "82px",
  width: "130px",
});

function Logo() {
  return (
    <Link to="/">
      <StyledLogo src="/logo.png" alt="Logo" loading="lazy" />
    </Link>
  );
}

export default Logo;
