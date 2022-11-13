import { useTheme } from "@emotion/react";
import { Box, Grid, Paper, Stack, Typography } from "@mui/material";
import { useState } from "react";
import Premium from "./plans/Premium";
import Standard from "./plans/Standard";
import Static from "./plans/Static";
import TabPricing from "./TabPricing";

const Pricing = () => {
  const data = ["Static", "Standard", "Premium"];
  const [tab, setTab] = useState("Standard");

  return (
    <Box
      id="Pricing"
      sx={{ maxWidth: 1300, mx: "auto", my: 10, px: { xs: 2, sm: 3, md: 4 } }}
    >
      <Grid container>
        <Grid item xs={12} lg={5.5} sx={{ position: "relative" }}>
          <Box sx={{ position: "sticky", top: 0, py: 6 }}>
            <Typography
              variant="body2"
              sx={{ letterSpacing: "3px", my: 2, color: "primary.main" }}
            >
              PRICING
            </Typography>
            <Typography variant="h2" fontWeight={700}>
              My Pricing
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} lg={6.5}>
          <Paper elevation={0} sx={{ borderRadius: "10px" }}>
            <TabPricing data={data} tab={tab} setTab={setTab} />
            <Static open={tab === "Static"} />
            <Standard open={tab === "Standard"} />
            <Premium open={tab === "Premium"} />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};
export default Pricing;
