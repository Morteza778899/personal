import { Grid, Paper, Stack, Typography } from "@mui/material";
import TypingText from "./TypingText";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import { useContext } from "react";
import { Context } from "../../../../pages/_app";
import icon1 from "../../../../public/image/icons-01.png";
import icon2 from "../../../../public/image/icons-02.png";
import icon3 from "../../../../public/image/icons-03.png";
import Image from "next/image";

const TextMain = () => {
  const colorTheme = useContext(Context).colorTheme;
  return (
    <>
      <Typography variant="body1" sx={{ letterSpacing: "3px", my: 4 }}>
        WELCOME TO MY WORLD
      </Typography>
      <Typography variant="h2" sx={{ fontWeight: 700 }}>
        Hi, I’m <span style={{ color: "#ff014f" }}>Jone Lee</span>
      </Typography>
      <TypingText />
      <Typography
        variant="body1"
        sx={{
          maxWidth: 650,
          lineHeight: "30px",
          color: "text.secondary",
          my: 2,
          fontWeight: 500,
        }}
      >
        I use animation as a third dimension by which to simplify experiences
        and kuiding thro each and every interaction. I’m not adding motion just
        to spruce things up, but doing it in ways that.
      </Typography>
      <Grid
        container
        spacing={3}
        sx={{
          mt: { xs: 2, sm: 5, lg: 20 },
          "& .MuiPaper-root": {
            p: 2,
            cursor: "pointer",
            "&:hover": {
              "& svg": {
                fill: (theme) =>
                  colorTheme === "light"
                    ? theme.palette.background.default
                    : theme.palette.text.primary,
              },
            },
            "& svg": {
              fill: (theme) => theme.palette.text.secondary,
            },
          },
        }}
      >
        <Grid item xs={12} sm={6}>
          <Typography variant="body2" sx={{ letterSpacing: "3px", my: 2 }}>
            FIND WITH ME
          </Typography>
          <Stack direction={"row"} gap={4}>
            <Paper elevation={1}>
              <FacebookIcon />
            </Paper>
            <Paper elevation={1}>
              <TwitterIcon />
            </Paper>
            <Paper elevation={1}>
              <LinkedInIcon />
            </Paper>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="body2" sx={{ letterSpacing: "3px", my: 2 }}>
            BEST SKILL ON
          </Typography>
          <Stack
            direction={"row"}
            gap={4}
            sx={{
              "& .MuiPaper-root": {
                width: 56,
                height: 60,
              },
              "& img": {
                width: 1,
                height: "unset",
              },
            }}
          >
            <Paper elevation={1}>
              <Image src={icon1} alt="" />
            </Paper>
            <Paper elevation={1}>
              <Image src={icon2} alt="" />
            </Paper>
            <Paper elevation={1}>
              <Image src={icon3} alt="" />
            </Paper>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};
export default TextMain;
