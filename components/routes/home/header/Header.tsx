import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import Image from "next/image";
import { FC, useContext, useEffect, useState } from "react";
import { Context } from "../../../../pages/_app";
import logo from "../../../../public/image/logo.png";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

interface Props {
  location: {
    homeY: number;
    featuresY: number;
    portfolioY: number;
    resumeY: number;
    testimonialY: number;
    pricingY: number;
    contactY: number;
  };
}

const Header: FC<Props> = ({ location }) => {
  const colorMode = useContext(Context);
  const theme: any = useTheme();
  const [navStatus, setNavStatus] = useState("home");

  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
    return () => {
      window.removeEventListener("scroll", updateScroll);
    };
  }, [location]);

  const updateScroll = () => {
    const floor = (num: number) => {
      return Math.floor(num / 100);
    };
    let scr = floor(window.scrollY);
    if (scr < floor(location.featuresY)) {
      setNavStatus("home");
    } else if (scr < floor(location.portfolioY)) {
      setNavStatus("features");
    } else if (scr < floor(location.resumeY)) {
      setNavStatus("portfolio");
    } else if (scr < floor(location.testimonialY)) {
      setNavStatus("resume");
    } else if (scr < floor(location.pricingY)) {
      setNavStatus("testimonial");
    } else if (scr < floor(location.contactY)) {
      setNavStatus("pricing");
    } else if (scr > floor(location.contactY)) {
      setNavStatus("contact");
    }
  };

  const handler = (y: number) => {
    window.scroll({
      top: y,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <Box
      component="header"
      sx={{
        boxShadow: theme.palette.shadow.default,
        bgcolor: colorMode.colorTheme === "dark" ? "#212428d0" : "#ecf0f3d0",
        backdropFilter: "blur(10px)",
        position: "sticky",
        top: 0,
        zIndex: 1000000,
      }}
    >
      <Grid
        container
        justifyContent={"space-between"}
        direction={"row"}
        sx={{ p: 1, width: 1300, mx: "auto" }}
      >
        <Grid item>
          <Image src={logo} alt="logo" />
        </Grid>
        <Grid item>
          <Stack
            direction="row"
            gap={3}
            sx={{
              height: 1,
              "& h6": {
                cursor: "pointer",
                transition: ".4s all",
                fontWeight: 500,
              },
              "& h6:hover": { color: "primary.main" },
            }}
            alignItems="center"
          >
            <Typography
              variant="subtitle2"
              onClick={() => handler(0)}
              sx={{
                color: navStatus === "home" ? "primary.main" : "text.primary",
              }}
            >
              HOME
            </Typography>
            <Typography
              variant="subtitle2"
              onClick={() => handler(location.featuresY)}
              sx={{
                color:
                  navStatus === "features" ? "primary.main" : "text.primary",
              }}
            >
              FEATURES
            </Typography>
            <Typography
              variant="subtitle2"
              onClick={() => handler(location.portfolioY)}
              sx={{
                color:
                  navStatus === "portfolio" ? "primary.main" : "text.primary",
              }}
            >
              PORTFOLIO
            </Typography>
            <Typography
              variant="subtitle2"
              onClick={() => handler(location.resumeY)}
              sx={{
                color: navStatus === "resume" ? "primary.main" : "text.primary",
              }}
            >
              RESUME
            </Typography>
            <Typography
              variant="subtitle2"
              onClick={() => handler(location.testimonialY)}
              sx={{
                color:
                  navStatus === "testimonial" ? "primary.main" : "text.primary",
              }}
            >
              TESTIMONIAL
            </Typography>
            <Typography
              variant="subtitle2"
              onClick={() => handler(location.pricingY)}
              sx={{
                color:
                  navStatus === "pricing" ? "primary.main" : "text.primary",
              }}
            >
              PRICING
            </Typography>
            <Typography
              variant="subtitle2"
              onClick={() => handler(location.contactY)}
              sx={{
                color:
                  navStatus === "contact" ? "primary.main" : "text.primary",
              }}
            >
              CONTACTS
            </Typography>
          </Stack>
        </Grid>
        <Button
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "text.primary",
            borderRadius: 1,
            height: "fit-content",
            py: 2,
            px: 3,
            my: 1,
          }}
          onClick={colorMode.toggleColorMode}
        >
          {colorMode.colorTheme} mode
          {colorMode.colorTheme === "dark" ? (
            <Brightness7Icon sx={{ mx: 1 }} />
          ) : (
            <Brightness4Icon sx={{ mx: 1 }} />
          )}
        </Button>
      </Grid>
    </Box>
  );
};
export default Header;
