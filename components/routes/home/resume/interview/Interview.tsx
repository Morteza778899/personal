import { Fade, Grid, Typography } from "@mui/material";
import { FC } from "react";
import TimelineCustom from "../education/TimelineCustom";

interface Iprops {
  open: boolean;
}

const Interview: FC<Iprops> = ({ open }) => {
  const data1 = [
    {
      title: "Personal Portfolio April Fools",
      caption: "University of DVI (1997 - 2001)",
      body: "The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.",
      button: "4.30/5",
    },
    {
      title: "Examples Of Personal Portfolio",
      caption: "University of DVI (1997 - 2001)",
      body: "Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education.",
      button: "4.30/5",
    },
    {
      title: "Tips For Personal Portfolio",
      caption: "University of DVI (1997 - 2001)",
      body: "Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale.",
      button: "4.30/5",
    },
  ];
  const data2 = [
    {
      title: "Sr. Software Engineer",
      caption: "Google Out Tech - (2017 - Present)",
      body: "Google’s hiring process is an important part of our culture. Googlers care deeply about their teams and the people who make them up.",
      button: "USA",
    },
    {
      title: "Web Developer & Trainer",
      caption: "Apple Developer Team - (2012 - 2016)",
      body: "A popular destination with a growing number of highly qualified homegrown graduates, it's true that securing a role in Malaysia isn't easy.",
      button: "MALAYSIA",
    },
    {
      title: "Front-end Developer",
      caption: "Nike - (2020 - 2011)",
      body: "The India economy has grown strongly over recent years, having transformed itself from a producer and innovation-based economy.",
      button: "INDIA",
    },
  ];
  return (
    <Fade in={open} unmountOnExit>
      <Grid container sx={{ py: 3 }} spacing={2}>
        <Grid item xs={6}>
          <Typography
            variant="body2"
            sx={{ letterSpacing: "3px", mx: 3, color: "primary.main" }}
          >
            2007 - 2010
          </Typography>
          <Typography
            variant="h4"
            fontWeight={700}
            sx={{ mx: 3, mt: 1, mb: 3 }}
          >
            Company Experience
          </Typography>
          <TimelineCustom data={data1} />
        </Grid>
        <Grid item xs={6}>
          <Typography
            variant="body2"
            sx={{ letterSpacing: "3px", mx: 3, color: "primary.main" }}
          >
            2010 - 2022
          </Typography>
          <Typography
            variant="h4"
            fontWeight={700}
            sx={{ mx: 3, mt: 1, mb: 3 }}
          >
            Job Experience
          </Typography>
          <TimelineCustom data={data2} />
        </Grid>
      </Grid>
    </Fade>
  );
};
export default Interview;
