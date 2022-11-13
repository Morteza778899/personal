import { Fade, Grid, Typography } from "@mui/material";
import { FC } from "react";
import ProgressContainer from "./ProgressContainer";

interface Iprops {
  open: boolean;
}

const Skills: FC<Iprops> = ({ open }) => {
  const data1 = [
    { title: "PHOTOSHOT", num: 70 },
    { title: "FIGMA", num: 50 },
    { title: "ADOBE XD", num: 100 },
    { title: "ADOBE ILLUSTRATOR", num: 80 },
    { title: "DESIGN", num: 30 },
  ];
  const data2 = [
    { title: "HTML", num: 70 },
    { title: "CSS", num: 50 },
    { title: "JAVASCRIPT", num: 100 },
    { title: "SOFTWARE", num: 80 },
    { title: "PLUGIN", num: 30 },
  ];
  return (
    <Fade in={open} unmountOnExit>
      <Grid container sx={{ py: 3 }} spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography
            variant="body2"
            sx={{ letterSpacing: "3px",mx: {xs:1,sm:2,md:3}, color: "primary.main" }}
          >
            Features
          </Typography>
          <Typography
            variant="h4"
            fontWeight={700}
            sx={{ mx: {xs:1,sm:2,md:3}, mt: 1, mb: 3 }}
          >
            Design Skill
          </Typography>
          <ProgressContainer data={data1} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography
            variant="body2"
            sx={{ letterSpacing: "3px", mx: {xs:1,sm:2,md:3}, color: "primary.main" }}
          >
            Features
          </Typography>
          <Typography
            variant="h4"
            fontWeight={700}
            sx={{ mx: {xs:1,sm:2,md:3}, mt: 1, mb: 3 }}
          >
            Development Skill
          </Typography>
          <ProgressContainer data={data2} />
        </Grid>
      </Grid>
    </Fade>
  );
};
export default Skills;
