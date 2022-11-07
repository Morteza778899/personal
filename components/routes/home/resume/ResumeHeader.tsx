import { useTheme } from "@emotion/react";
import { Grid, Paper, Typography } from "@mui/material";
import { Dispatch, FC, SetStateAction } from "react";

interface Iprops {
  data: string[];
  tab: string;
  setTab: Dispatch<SetStateAction<string>>;
}

const ResumeHeader: FC<Iprops> = ({ data, tab, setTab }) => {
  const theme: any = useTheme();
  return (
    <>
      <Typography
        variant="body2"
        textAlign="center"
        sx={{ letterSpacing: "3px", my: 2, color: "primary.main" }}
      >
        7+ YEARS OF EXPERIENCE
      </Typography>
      <Typography variant="h2" fontWeight={700} textAlign="center">
        My Resume
      </Typography>
      <Paper elevation={0} sx={{ borderRadius: "10px" }}>
        <Grid container direction="row" sx={{ my: 3 }}>
          {data.map((value, index) => (
            <Grid item xs={3} key={index} sx={{ cursor: "pointer" }}>
              <Paper
                elevation={0}
                onClick={() => setTab(value)}
                sx={{
                  borderRadius: "10px",
                  boxShadow:
                    tab === value ? theme.palette.shadow.default : "unset",
                  backgroundImage:
                    tab === value ? theme.palette.background.paper : "unset",
                  "& h6": {
                    transition: "all .3s",
                    color: tab === value ? "primary.main" : "unset",
                  },
                  ":hover": {
                    boxShadow: theme.palette.shadow.default,
                    backgroundImage: theme.palette.background.paper,
                    "& h6": {
                      color: "primary.main",
                    },
                  },
                }}
              >
                <Typography
                  variant="h6"
                  fontWeight={600}
                  textAlign="center"
                  py={4}
                >
                  {value}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </>
  );
};
export default ResumeHeader;
