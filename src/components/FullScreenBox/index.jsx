import { Box } from "@mui/material";

const FullScreenBox = ({ children }) => (
  <Box
    sx={{
      height: "100vh",
      width: "100vw",
      position: "fixed",
      top: 0,
      left: 0,
      zIndex: 9999,
    }}
  >
    {children}
  </Box>
);

export default FullScreenBox;
