import { useMediaQuery } from "@mui/material";

export const useMobile = () => {
  const matches = useMediaQuery("(max-width:600px)");
  return matches;
};
