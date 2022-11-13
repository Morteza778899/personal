import { Box, Button, IconButton, Stack, useMediaQuery } from "@mui/material";
import { useTheme } from "@emotion/react";
import Image from "next/image";
import { FC, useContext, useEffect, useState } from "react";
import { Context } from "../../../../pages/_app";
import logo from "../../../../public/image/logo.png";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import MenuIcon from "@mui/icons-material/Menu";
import MenuLG from "./MenuLG";
import MenuXS from "./MenuXS";

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
  const themeContext = useContext(Context);
  const theme: any = useTheme();
  const [navStatus, setNavStatus] = useState("home");
  const [open, setOpen] = useState(false);
  const lgWidth = useMediaQuery("(min-width:1200px)");
  const smWidth = useMediaQuery("(min-width:600px)");

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
    setOpen(false);
  };

  const openHandler = (x: boolean) => {
    setOpen(x);
  };

  return (
    <>
      <Box
        component="header"
        sx={{
          boxShadow: theme.palette.shadow.default,
          bgcolor:
            themeContext.colorTheme === "dark" ? "#212428d0" : "#ecf0f3d0",
          backdropFilter: "blur(15px)",
          position: "sticky",
          top: 0,
          zIndex: 1000,
        }}
      >
        <Stack
          justifyContent={"space-between"}
          alignItems="center"
          direction="row"
          sx={{ p: 1, mx: { xs: 1, sm: 2, md: 4, lg: "auto" }, maxWidth: 1300 }}
        >
          <Box>
            <Image src={logo} alt="logo" />
          </Box>
          {lgWidth && (
            <MenuLG
              handler={handler}
              location={location}
              navStatus={navStatus}
            />
          )}
          <Stack direction="row" alignItems="center" gap={2} sx={{ my: 1 }}>
            {smWidth && (
              <Button
                sx={{
                  color: "text.primary",
                  borderRadius: 1,
                  height: "fit-content",
                  p: 2,
                  "&:hover": {
                    color: "white",
                  },
                }}
                onClick={themeContext.toggleColorMode}
              >
                {themeContext.colorTheme} mode
                {themeContext.colorTheme === "dark" ? (
                  <DarkModeIcon sx={{ ml: 1 }} />
                ) : (
                  <LightModeIcon sx={{ ml: 1 }} />
                )}
              </Button>
            )}
            {!lgWidth && (
              <IconButton
                sx={{
                  borderRadius: "50%",
                  p: 1,
                  transform: "scale(1.2)",
                }}
                onClick={() => openHandler(true)}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Stack>
        </Stack>
      </Box>
      <MenuXS
        open={open}
        openHandler={openHandler}
        handler={handler}
        location={location}
        navStatus={navStatus}
      />
    </>
  );
};
export default Header;
