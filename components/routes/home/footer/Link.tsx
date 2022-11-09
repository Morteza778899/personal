import {
  List,
  ListItem,
  Typography,
} from "@mui/material";
import { useTheme } from "@emotion/react";
import { useContext } from "react";
import { Context } from "../../../../pages/_app";

const Link = () => {
  const theme: any = useTheme();
  const themeMode = useContext(Context).colorTheme;
  return (
    <>
      <Typography variant="h6" color="primary.main">
        QUICK LINK
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
          <Typography>About</Typography>
        </ListItem>
        <ListItem>
          <Typography>Portfolio</Typography>
        </ListItem>
        <ListItem>
          <Typography>Services</Typography>
        </ListItem>
        <ListItem>
          <Typography>Blog</Typography>
        </ListItem>
        <ListItem>
          <Typography>Contact</Typography>
        </ListItem>
      </List>
    </>
  );
};
export default Link;
