import { Box } from "@mui/material";

const FullScreenBox = ({ children }) => (
  <Box
    sx={{
      height: "100vh",
      width: "100vw",
    }}
  >
    {children}
  </Box>
);

export default FullScreenBox;
