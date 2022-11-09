import { List, ListItem, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import { useContext } from "react";
import { Context } from "../../../../pages/_app";

const Developers = () => {
  const theme: any = useTheme();
  const themeMode = useContext(Context).colorTheme;
  return (
    <>
      <Typography variant="h6" color="primary.main">
        DEVELOPERS
      </Typography>
      <List
        sx={{
          "& li": {
            px: 0,
          },
          "& p": {
            cursor: "pointer",
            transition: ".6s all",
            position: "relative",
            fontWeight: 500,
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
        <ListItem>
          <Typography>Documentation</Typography>
        </ListItem>
        <ListItem>
          <Typography>Authentication</Typography>
        </ListItem>
        <ListItem>
          <Typography>API Reference</Typography>
        </ListItem>
        <ListItem>
          <Typography>Support</Typography>
        </ListItem>
        <ListItem>
          <Typography>Open Source</Typography>
        </ListItem>
      </List>
    </>
  );
};
export default Developers;
