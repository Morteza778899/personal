import {
  Box,
  Fade,
  Grid,
  Paper,
  Stack,
  Typography,
  Button,
} from "@mui/material";
import { FC } from "react";
import CheckIcon from "@mui/icons-material/Check";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";

interface Props {
  open: boolean;
}

const Standard: FC<Props> = ({ open }) => {
  const data = [
    "5 Page with Elementor",
    "Multipage Elementor",
    "Design Customization",
    "Design Figma",
    "Responsive Design",
    "MAintaine Design",
    "Content Upload",
    "Content Upload",
    "Design Customization",
    "Design With XD",
    "5 Plugins/Extensions",
    "50 Plugins/Extensions",
  ];
  return (
    <Fade in={open} unmountOnExit>
      <Box sx={{ p: { xs: 3, sm: 4 } }}>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
        >
          <Box>
            <Typography variant="h5" fontWeight={700}>
              Design Make this Page
            </Typography>
            <Typography my={1}>Elementor / WPBakery</Typography>
          </Box>
          <Paper
            elevation={0}
            sx={{ height: "fit-content", width: "fit-content", p: 2, my: 1 }}
          >
            <Typography variant="h4" fontWeight={700} color="primary.main">
              $50.00
            </Typography>
          </Paper>
        </Stack>
        <Typography
          sx={{
            my: { xs: 2, sm: 3, md: 4, lg: 12 },
            fontWeight: 500,
            maxWidth: 600,
            opacity: 0.7,
          }}
        >
          All the Lorem Ipsum generators on the Internet tend to repeat
          predefined chunks as necessary
        </Typography>
        <Grid container>
          {data.map((value, index) => (
            <Grid
              item
              key={index}
              xs={12}
              sm={6}
              sx={{ py: 1.3, px: { xs: 1, sm: 1.65, md: 3, lg: 4 } }}
            >
              <Stack direction={"row"}>
                <CheckIcon sx={{ color: "primary.main", mx: 0.5 }} />
                <Typography fontWeight={500}>{value}</Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
        <Button
          fullWidth
          sx={{
            p: 3,
            my: 5,
            "& p,svg": {
              transition: ".4s all",
            },
            "&:hover": {
              "& p": {
                color: "white",
              },
              "& svg": {
                fill: "white",
              },
            },
          }}
        >
          <Typography variant="body2" fontWeight={500} color="primary.main">
            ORDER NOW
          </Typography>
          <ArrowForwardIcon fontSize="small" sx={{ mx: 0.5 }} />
        </Button>
        <Stack direction="row" justifyContent="center" sx={{ opacity: 0.8 }}>
          <AccessTimeIcon fontSize="small" sx={{ mx: 0.5 }} />
          <Typography variant="subtitle2" fontWeight={500} mr={2}>
            2 Days Delivery
          </Typography>
          <AllInclusiveIcon fontSize="small" sx={{ mx: 0.5 }} />
          <Typography variant="subtitle2" fontWeight={500}>
            Unlimited Revission
          </Typography>
        </Stack>
      </Box>
    </Fade>
  );
};
export default Standard;
