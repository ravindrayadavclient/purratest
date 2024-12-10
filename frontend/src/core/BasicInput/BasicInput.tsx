import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
// import SearchIcon from "@mui/icons-material/Search";
import Iconify from "../Iconify";

interface IProps {
  width: string | number;
  Input: string;
  InputHandler: (value: string) => void;
  placeHolder: string;
}

export default function BasicInput({
  width,
  InputHandler,
  Input,
  placeHolder,
}: IProps) {
  return (
    <Paper
      component="form"
      sx={{
        width: width,
        my: 1,
        borderRadius: "12px",
        border: "1px solid #ccc",
        display: "flex",
        height: "40px",
        alignItems: "center",
        justifyContent: "center",
      }}
      elevation={0}
      className="center"
    >
      <InputBase
        sx={{ ml: 1, flex: 1, p: 0.5 }}
        placeholder={placeHolder}
        size="medium"
        inputProps={{ "aria-label": "Search Category" }}
        onChange={(e) => {
          InputHandler(e.target.value);
        }}
        value={Input === "0" ? "" : Input}
      />
    </Paper>
  );
}
