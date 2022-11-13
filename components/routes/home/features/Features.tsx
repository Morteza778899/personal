import { Box, Grid, Paper, Stack, Typography } from "@mui/material";
import {
  BookIcon,
  BoxIcon,
  LineIcon,
  MobileIcon,
  RoundIcon,
  TvIcon,
} from "../../../icon/myIcons";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useContext } from "react";
import { Context } from "../../../../pages/_app";

const Features = () => {
  const themeMode = useContext(Context).colorTheme;
  const data = [
    {
      icon: (
        <LineIcon fontSize="large" color="primary" sx={{ mb: 1.5, mt: 3 }} />
      ),
      title: "Business Stratagy",
      body: "I throw myself down among the tall grass by the stream as Ilie close to the earth.",
    },
    {
      icon: (
        <BookIcon fontSize="large" color="primary" sx={{ mb: 1.5, mt: 3 }} />
      ),
      title: "App Development",
      body: "We’ll handle everything from to app development process until it is time to make your project live.",
    },
    {
      icon: <TvIcon fontSize="large" color="primary" sx={{ mb: 1.5, mt: 3 }} />,
      title: "Business Stratagy",
      body: "We’ll help you optimize your business processes to maximize profitability and eliminate unnecessary costs.",
    },
    {
      icon: (
        <MobileIcon fontSize="large" color="primary" sx={{ mb: 1.5, mt: 3 }} />
      ),
      title: "Mobile App",
      body: "Using our expertise in mobile application development to create beautiful pixel-perfect designs.",
    },
    {
      icon: (
        <RoundIcon fontSize="large" color="primary" sx={{ mb: 1.5, mt: 3 }} />
      ),
      title: "SEO Optimisation",
      body: "Your website ranking matters. Our SEO services will help you get to the top of the ranks and stay there!",
    },
    {
      icon: (
        <BoxIcon fontSize="large" color="primary" sx={{ mb: 1.5, mt: 3 }} />
      ),
      title: "UX Consulting",
      body: "A UX consultant is responsible for many of the same tasks as a UX designer, but they typically.",
    },
  ];
  return (
    <Box
      id="Features"
      component="section"
      sx={{ maxWidth: 1300, mx: "auto", my: 14, px: { xs: 2, sm: 3, md: 4 } }}
    >
      <Typography
        variant="body2"
        sx={{ letterSpacing: "3px", my: 2, color: "primary.main" }}
      >
        FEATURES
      </Typography>
      <Typography variant="h2" fontWeight={700}>
        What I Do
      </Typography>
      <Grid container direction="row" spacing={4} sx={{ my: 3 }}>
        {data.map((value, index) => (
          <Grid item key={index} xs={12} md={6} lg={4}>
            <Paper
              elevation={themeMode === "dark" ? 2 : 3}
              sx={{ borderRadius: "10px", cursor: "pointer" }}
            >
              <Stack
                sx={{
                  px: { xs: 3, sm: 4, md: 5, lg: 6 },
                  py: { xs: 1, sm: 2, md: 3 },
                }}
                className="hover-up"
              >
                {value.icon}
                <Typography variant="h5" fontWeight={600} sx={{ my: 1 }}>
                  {value.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "text.secondary",
                    my: 2,
                    fontWeight: 500,
                    display: "-webkit-box",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    "line-clamp": "3",
                    "-webkit-line-clamp": "3" /* number of lines to show */,
                    "-webkit-box-orient": "vertical",
                    height: "84px",
                    "line-height": "28px",
                  }}
                >
                  {value.body}
                </Typography>
                <ArrowForwardIcon
                  sx={{ width: 35, height: 35, opacity: 0, fill: "white" }}
                  className="hover-icon"
                />
              </Stack>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
export default Features;
