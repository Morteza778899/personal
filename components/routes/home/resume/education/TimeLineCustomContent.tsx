import { FC, useContext, useState } from "react";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import {
  Box,
  Button,
  Divider,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { Context } from "../../../../../pages/_app";

interface Iprops {
    value: {
        title: string;
        caption: string;
        body: string;
        button: string;
    }
  }

const TimeLineCustomContent:FC<Iprops> = ({ value }) => {
    const themeMode = useContext(Context).colorTheme;
    const [hover, setHover] = useState(false);
  return (
    <>
      <TimelineSeparator>
        <TimelineConnector sx={{ width: 4, bgcolor: "divider" }} />
        <TimelineDot
          variant="outlined"
          sx={{
            m: 0,
            borderWidth: "5px",
            borderColor: "divider",
            transition: "all .4s",
            bgcolor: hover ? "primary.main" : "none",
          }}
        />
        <TimelineConnector sx={{ width: 4, bgcolor: "divider" }} />
        <TimelineConnector sx={{ width: 4, bgcolor: "divider" }} />
        <TimelineConnector sx={{ width: 4, bgcolor: "divider" }} />
        <TimelineConnector sx={{ width: 4, bgcolor: "divider" }} />
      </TimelineSeparator>
      <TimelineContent sx={{ p: 0 }}>
        <Stack direction="row">
          <Grid container direction="column" sx={{ width: 30 }}>
            <Grid
              item
              xs={3}
              sx={{
                borderBottom: "5px solid ",
                borderColor: "divider",
                width: 30,
                mt: -1,
                ml: -0.1,
              }}
            ></Grid>
            <Grid item xs={9} sx={{ width: 30 }}></Grid>
          </Grid>
          <Paper
            elevation={2}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            sx={{
              p: 4,
              mb: 5,
              ml: -0.5,
              "& h6,p": {
                opacity: themeMode === "dark" ? 0.5 : 1,
                transition: "all .4s",
              },
              "&:hover": {
                "& h5,h6,p": {
                  color: "white",
                  opacity: 1,
                },
                "& hr": {
                  opacity: 0.5,
                },
                "& button": {
                  boxShadow: "unset",
                },
              },
            }}
          >
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Box>
                <Typography variant="h5" fontWeight={500} sx={{ my: 2 }}>
                  {value.title}
                </Typography>
                <Typography variant="subtitle2" sx={{ mb: 3 }}>
                  {value.caption}
                </Typography>
              </Box>
              <Button sx={{ height: "fit-content", p: 1 }}>
                {value.button}
              </Button>
            </Stack>
            <Divider sx={{ m: 2, transition: "all .4s" }} />
            <Typography variant="body1" fontWeight={500}>
              {value.body}
            </Typography>
          </Paper>
        </Stack>
      </TimelineContent>
    </>
  );
};
export default TimeLineCustomContent;
