import { Box, Paper, Stack } from "@mui/material";
import Image from "next/image";
import logo from "../../../../public/image/logo.png";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import { useTheme } from "@emotion/react";
import { useContext } from "react";
import { Context } from "../../../../pages/_app";

const Logo = () => {
  const theme: any = useTheme();
  const themeMode = useContext(Context).colorTheme;
  return (
    <>
      <Image src={logo} alt="" />
      <Box
        sx={{
          my: 4,
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
    </>
  );
};
export default Logo;
