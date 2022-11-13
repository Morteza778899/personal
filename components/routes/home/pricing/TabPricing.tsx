import { useTheme } from "@emotion/react";
import { Grid, Paper, Tooltip, Typography } from "@mui/material";
import { Dispatch, FC, SetStateAction } from "react";

interface Iprops {
  data: string[];
  tab: string;
  setTab: Dispatch<SetStateAction<string>>;
}

const TabPricing: FC<Iprops> = ({ data, tab, setTab }) => {
  const theme: any = useTheme();
  return (
    <Paper elevation={0} sx={{ borderRadius: "10px" }}>
      <Grid container direction="row" sx={{ my: 3 }}>
        {data.map((value, index) => (
          <Grid item xs={12} md={4} key={index} sx={{ cursor: "pointer" }}>
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
                py={{ xs: 3, md: 4 }}
              >
                {value}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};
export default TabPricing;
