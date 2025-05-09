import { Box, CircularProgress } from "@mui/material";
import FullScreenBox from "@/components/FullScreenBox";

const FullScreenProgressIndicator = () => (
  <FullScreenBox>
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <CircularProgress />
    </Box>
  </FullScreenBox>
);

export default FullScreenProgressIndicator;
