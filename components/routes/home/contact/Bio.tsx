import { useTheme } from "@emotion/react";
import { Box, Paper, Stack, Typography } from "@mui/material";
import Image from "next/image";
import image from "../../../../public/image/contact1.png";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import { useContext } from "react";
import { Context } from "../../../../pages/_app";

const Bio = () => {
  const theme: any = useTheme();
  const themeMode = useContext(Context).colorTheme;
  return (
    <Paper
      elevation={0}
      sx={{
        borderRadius: "10px",
        p: 4,
      }}
    >
      <Box
        sx={{
          borderRadius: "10px",
          overflow: "hidden",
          "& img": {
            width: 1,
            height: "unset",
            transform: "scale(1.1)",
            transition: "all .4s",
            ":hover": {
              transform: "scale(1.2)",
            },
          },
        }}
      >
        <Image src={image} alt="" />
      </Box>
      <Typography
        variant="h5"
        fontWeight={700}
        sx={{
          transform: "scale(1.2)",
          transformOrigin: "center left",
          my: 3,
          mt: 4,
        }}
      >
        Nevine Acotanza
      </Typography>
      <Typography my={2}>Chief Operating Officer</Typography>
      <Typography fontWeight={500} my={2}>
        I am available for freelance work. Connect with me via and call in to my
        account.
      </Typography>
      <Box
        sx={{
          my: 3,
          "& .hover": {
            mx: 1,
            cursor: "pointer",
            transition: ".6s all",
            position: "relative",
            "&:before": {
              transition: ".6s all",
              content: "''",
              position: "absolute",
              height: "1px",
              bgcolor: theme.palette.primary.main,
              width: 0,
              bottom: 2,
            },
            "&:hover": {
              color: theme.palette.primary.main,
              "&:before": {
                width: 1,
              },
            },
          },
        }}
      >
        <Stack direction="row" my={1}>
          <Typography>Phone:</Typography>
          <Typography className="hover">+012 345 678 90</Typography>
        </Stack>
        <Stack direction="row">
          <Typography>Email:</Typography>
          <Typography className="hover">admin@example.com</Typography>
        </Stack>
      </Box>
      <Box
        sx={{
          "& .MuiPaper-root": {
            p: 2,
            cursor: "pointer",
            "&:hover": {
              "& svg": {
                fill:
                  themeMode === "light"
                    ? theme.palette.background.default
                    : theme.palette.text.primary,
              },
            },
            "& svg": {
              fill: theme.palette.text.secondary,
            },
          },
        }}
      >
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
      </Box>
    </Paper>
  );
};
export default Bio;
