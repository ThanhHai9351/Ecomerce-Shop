import { Box, Grid } from "@mui/material";
import type { FC } from "react";

interface ImageShowCaseProps {
  shots: string;
}

const ImageShowCase: FC<ImageShowCaseProps> = ({ shots }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={2} display="flex" justifyContent="center">
        <Grid container spacing={2}>
          <Grid item xs={6} md={12}>
            <Box
              component="img"
              src={shots}
              alt="shoe image"
              p={1}
              sx={{ width: "100%", borderRadius: 2, objectFit: "contain", border: '1px #000 solid' }}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={10}>
        <Box
          component="img"
          src={shots}
          alt="shoe image"
          sx={{ width: "100%", borderRadius: 2, objectFit: "contain", height: { lg: 520, xl: "auto" } }}
        />
      </Grid>
    </Grid>
  );
};

export default ImageShowCase;
