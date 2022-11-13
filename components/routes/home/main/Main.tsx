import { Box, Grid } from "@mui/material";
import TextMain from "./TextMain";
import PicMain from "./PicMain";

const Main = () => {
  return (
    <Box
      id="Home"
      sx={{ maxWidth: 1300, mx: "auto", mt: 4 }}
      component="section"
    >
      <Grid
        container
        sx={{ px: { xs: 2, sm: 3, md: 4 } }}
        direction="row-reverse"
      >
        <Grid item lg={5} xs={12} sx={{ p: 3, position: "relative" }}>
          <PicMain />
        </Grid>
        <Grid item lg={7} xs={12} sx={{ pt: { xs: 2, sm: 4, md: 6, lg: 8 } }}>
          <TextMain />
        </Grid>
      </Grid>
    </Box>
  );
};
export default Main;
