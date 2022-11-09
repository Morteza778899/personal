import { Box, Grid, Paper, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Bio from "./Bio";
import FormMe from "./FormMe";
const Contact = () => {
  return (
    <Box sx={{ maxWidth: 1300, mx: "auto", my: 10 }}>
      <Box sx={{ my: 10 }}>
        <Typography
          variant="body2"
          textAlign="center"
          sx={{ letterSpacing: "3px", my: 2, color: "primary.main" }}
        >
          CONTACT
        </Typography>
        <Typography variant="h2" fontWeight={700} textAlign="center">
          Contact With Me
        </Typography>
      </Box>
      <Grid container spacing={5}>
        <Grid item xs={4.5}>
          <Bio />
        </Grid>
        <Grid item xs={7.5}>
          <FormMe />
        </Grid>
      </Grid>
    </Box>
  );
};
export default Contact;
