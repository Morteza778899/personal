import {
  Box,
  Stack,
  Typography,
} from "@mui/material";
import { FC } from "react";

interface Props {
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

const MenuLG: FC<Props> = ({ handler, location, navStatus }) => {
  return (
    <Box>
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
            color: navStatus === "features" ? "primary.main" : "text.primary",
          }}
        >
          FEATURES
        </Typography>
        <Typography
          variant="subtitle2"
          onClick={() => handler(location.portfolioY)}
          sx={{
            color: navStatus === "portfolio" ? "primary.main" : "text.primary",
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
            color: navStatus === "pricing" ? "primary.main" : "text.primary",
          }}
        >
          PRICING
        </Typography>
        <Typography
          variant="subtitle2"
          onClick={() => handler(location.contactY)}
          sx={{
            color: navStatus === "contact" ? "primary.main" : "text.primary",
          }}
        >
          CONTACTS
        </Typography>
      </Stack>
    </Box>
  );
};
export default MenuLG;
