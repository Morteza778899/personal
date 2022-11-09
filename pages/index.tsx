import { Box, Divider, Typography } from "@mui/material";
import Head from "next/head";
import { useContext } from "react";
import Contact from "../components/routes/home/contact/Contact";
import Features from "../components/routes/home/features/Features";
import Header from "../components/routes/home/header/Header";
import Main from "../components/routes/home/main/Main";
import Portfolio from "../components/routes/home/portfolio/Portfolio";
import Pricing from "../components/routes/home/pricing/Pricing";
import Resume from "../components/routes/home/resume/Resume";
import Testimonial from "../components/routes/home/testimonial/Testimonial";
import { Context } from "./_app";

export default function Home() {
  const colorMode = useContext(Context);
  return (
    <Box
      sx={{ bgcolor: colorMode.colorTheme === "dark" ? "#212428" : "#ecf0f3" }}
    >
      <Head>
        <title>personal site</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <Main />
        <Divider sx={{ my: 7, maxWidth: 1200, mx: "auto" }} />
        <Features />
        <Divider sx={{ my: 5, maxWidth: 1200, mx: "auto" }} />
        <Portfolio />
        <Divider sx={{ my: 5, maxWidth: 1200, mx: "auto" }} />
        <Resume />
        <Divider sx={{ my: 5, maxWidth: 1200, mx: "auto" }} />
        <Testimonial />
        <Divider sx={{ my: 5, maxWidth: 1200, mx: "auto" }} />
        <Pricing />
        <Divider sx={{ my: 5, maxWidth: 1200, mx: "auto" }} />
        <Contact/>
        <Divider sx={{ my: 5, maxWidth: 1200, mx: "auto" }} />
      </main>
    </Box>
  );
}
