import axios from "axios";
import Cookies from "universal-cookie";
const cookies = new Cookies();

export const InstanceAxios = () => {
  const instanceAxios = axios.create({
    baseURL: "http://localhost:8001/api",
    headers: {
      Authorization: `Bearer ${cookies.get("pos-token")}`,
    },
  });

  return instanceAxios;
};
