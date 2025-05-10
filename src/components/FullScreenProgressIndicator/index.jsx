import { Box, CircularProgress } from "@mui/material";
import FullScreenBox from "@/components/FullScreenBox";
import { createPortal } from "react-dom";

const FullScreenProgressIndicator = () => (
  <>
    {createPortal(
      <FullScreenBox>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            width: "100%",
            backgroundColor: "rgba(255, 255, 255, 0.8)",
          }}
        >
          <CircularProgress />
        </Box>
      </FullScreenBox>,
      document.getElementById("root"),
    )}
  </>
);

export default FullScreenProgressIndicator;
