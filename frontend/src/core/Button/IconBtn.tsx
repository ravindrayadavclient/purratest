import { Button } from "@mui/material";

interface IProps {
  children: React.ReactNode;
}
const IconBtn = ({ children }: IProps) => {
  return (
    <Button sx={{ borderRadius: "20px" }} variant="outlined">
      {children}
    </Button>
  );
};
export default IconBtn;
