import { Box } from "@mui/material";
import { useState } from "react";
import Education from "./education/Education";
import Experience from "./experience/Experience";
import Interview from "./interview/Interview";
import ResumeHeader from "./ResumeHeader";
import Skills from "./skills/Skills";

const Resume = () => {
  const data = ["Education", "Professional Skills", "Experience", "Interview"];
  const [tab, setTab] = useState("Education");
  return (
    <Box id='Resume' component="section" sx={{ maxWidth: 1300, mx: "auto", my: 14 }}>
      <ResumeHeader data={data} tab={tab} setTab={setTab} />
      <Education open={tab === "Education"} />
      <Skills open={tab === "Professional Skills"} />
      <Experience open={tab === "Experience"} />
      <Interview open={tab === "Interview"} />
    </Box>
  );
};
export default Resume;
