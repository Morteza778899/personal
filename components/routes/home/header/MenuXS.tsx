import {
  Box,
  Button,
  ClickAwayListener,
  Divider,
  Drawer,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { FC, useContext } from "react";
import logo from "../../../../public/image/logos-circle.png";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import CloseIcon from "@mui/icons-material/Close";
import { Context } from "../../../../pages/_app";

interface Props {
  open: boolean;
  openHandler: (X: boolean) => void;
  handler: (y: number) => void;
  location: {
    homeY: number;
    featuresY: number;
    portfolioY: number;
    resumeY: number;
    testimonialY: number;
    pricingY: number;
    contactY: number;
  };
  navStatus: string;
}

const MenuXS: FC<Props> = ({
  open,
  openHandler,
  handler,
  location,
  navStatus,
}) => {
  const themeContext = useContext(Context);

  return (
    <Drawer
      anchor="left"
      open={open}
      sx={{
        "& .MuiPaper-root": {
          width: 1,
          maxWidth: 400,
          boxShadow: "none",
        },
      }}
    >
      <ClickAwayListener onClickAway={() => openHandler(false)}>
        <Box
          sx={{
            width: 1,
            height: 1,
            p: 3,
            px: { xs: 2, sm: 4, md: 6, lg: 8 },
            "& p": {
              fontSize: "1.1rem",
            },
          }}
        >
          <Stack
            className="animate__animated animate__fadeIn animate__slow"
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Image src={logo} alt="" />
            <IconButton
              sx={{
                borderRadius: "50%",
                p: 1,
                transform: "scale(1.2)",
                height: "fit-content",
              }}
              onClick={() => openHandler(false)}
            >
              <CloseIcon color="primary" />
            </IconButton>
          </Stack>
          <Typography
            className="animate__animated animate__fadeIn animate__slow"
            sx={{ color: "text.secondary", my: 3 }}
          >
            Inbio is a all in one personal portfolio React theme. You can
            customize everything.
          </Typography>
          <Divider sx={{ my: 3, mx: "auto" }} />
          <Stack
            gap={3}
            sx={{
              "& h6": {
                cursor: "pointer",
                transition: ".4s all",
                fontWeight: 500,
              },
            }}
          >
            <Typography
              variant="subtitle2"
              onClick={() => handler(0)}
              className="animate__animated animate__fadeInDown"
              sx={{
                color: navStatus === "home" ? "primary.main" : "text.primary",
              }}
            >
              HOME
            </Typography>
            <Typography
              variant="subtitle2"
              onClick={() => handler(location.featuresY)}
              className="animate__animated animate__fadeInDown"
              sx={{
                animationDelay: ".2s",
                color:
                  navStatus === "features" ? "primary.main" : "text.primary",
              }}
            >
              FEATURES
            </Typography>
            <Typography
              variant="subtitle2"
              onClick={() => handler(location.portfolioY)}
              className="animate__animated animate__fadeInDown"
              sx={{
                animationDelay: ".4s",
                color:
                  navStatus === "portfolio" ? "primary.main" : "text.primary",
              }}
            >
              PORTFOLIO
            </Typography>
            <Typography
              variant="subtitle2"
              onClick={() => handler(location.resumeY)}
              className="animate__animated animate__fadeInDown"
              sx={{
                animationDelay: ".6s",
                color: navStatus === "resume" ? "primary.main" : "text.primary",
              }}
            >
              RESUME
            </Typography>
            <Typography
              variant="subtitle2"
              onClick={() => handler(location.testimonialY)}
              className="animate__animated animate__fadeInDown"
              sx={{
                animationDelay: ".8s",
                color:
                  navStatus === "testimonial" ? "primary.main" : "text.primary",
              }}
            >
              TESTIMONIAL
            </Typography>
            <Typography
              variant="subtitle2"
              onClick={() => handler(location.pricingY)}
              className="animate__animated animate__fadeInDown"
              sx={{
                animationDelay: "1s",
                color:
                  navStatus === "pricing" ? "primary.main" : "text.primary",
              }}
            >
              PRICING
            </Typography>
            <Typography
              variant="subtitle2"
              onClick={() => handler(location.contactY)}
              className="animate__animated animate__fadeInDown"
              sx={{
                animationDelay: "1.2s",
                color:
                  navStatus === "contact" ? "primary.main" : "text.primary",
              }}
            >
              CONTACTS
            </Typography>
            <Button
              className="animate__animated animate__fadeIn"
              sx={{
                animationDelay: "1.4s",
                color: "text.primary",
                borderRadius: 1,
                height: "fit-content",
                p: 2,
                m: 3,
                my:0,
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
          </Stack>
        </Box>
      </ClickAwayListener>
    </Drawer>
  );
};
export default MenuXS;
