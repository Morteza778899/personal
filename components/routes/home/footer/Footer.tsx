import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import Logo from "./Logo";
import Link from "./Link";
import Resources from "./Resources";
import Developers from "./Developers";
import CopyrightIcon from "@mui/icons-material/Copyright";

const Footer = () => {
  return (
    <>
      <Box sx={{ maxWidth: 1200, mx: "auto", mt: 8, px: { xs: 2, sm: 3, md: 4 } }}>
        <Grid container spacing={6}>
          <Grid item xs={12} md={6} lg={3}>
            <Logo />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Link />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Resources />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Developers />
          </Grid>
        </Grid>
      </Box>
      <Divider sx={{ mt: 10, maxWidth: 800, mx: "auto" }} />
      <Stack
        direction="row"
        sx={{ py: 6, color: "text.secondary", justifyContent: "center" }}
      >
        <CopyrightIcon sx={{mx:.5}}/>
        <Typography sx={{ color: "text.secondary" }}>
          2022. All rights reserved by &#128150; m7
        </Typography>
      </Stack>
    </>
  );
};
export default Footer;
