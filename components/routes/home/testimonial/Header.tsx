import { Typography } from "@mui/material";

const Header = () => {
  return (
    <>
      <Typography
        variant="body2"
        textAlign="center"
        sx={{ letterSpacing: "3px", my: 2, color: "primary.main" }}
      >
        WHAT CLIENTS SAY
      </Typography>
      <Typography variant="h2" fontWeight={700} textAlign="center">
        Testimonial
      </Typography>
    </>
  );
};
export default Header;
