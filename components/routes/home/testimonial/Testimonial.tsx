import { Box } from "@mui/material";
import Header from "./Header";
import image1 from "../../../../public/image/final-home-1st.png";
import image2 from "../../../../public/image/final-home-2nd-1.png";
import image3 from "../../../../public/image/final-home-3rd.png";
import Silder from "./Silder";

const Testimonial = () => {
  const data = [
    {
      image: {
        src: image1,
        caption: "Rainbow-Themes",
        title: "Nevine Acotanza",
        body: "Chief Operating Office",
      },
      title: "Android App Development",
      caption: "via Upwork - Mar 4, 2015 - Aug 30, 2021 test",
      rate: 4,
      body: "Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante. Ut tincidunt est ac dolor aliquam sodales phasellus smauris",
    },
    {
      image: {
        src: image2,
        caption: "Rainbow-Themes",
        title: "Cara Delevingne",
        body: "Chief Operating Office",
      },
      title: "Travel Mobile App Design.",
      caption: "Rainbow-Themes",
      rate: 5,
      body: "Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante. Ut tincidunt est ac dolor aliquam sodales phasellus smauris",
    },
    {
      image: {
        src: image3,
        caption: "Bound - Trolola",
        title: "Jone Duone Joe",
        body: "Operating Officer",
      },
      title: "Web App Development",
      caption: "Rainbow-Themes",
      rate: 3,
      body: "Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante. Ut tincidunt est ac dolor aliquam sodales phasellus smauris",
    },
  ];

  return (
    <Box id="Testimonial" component="section" sx={{ maxWidth: 1300, mx: "auto", my: 14 }}>
      <Header />
      <Silder data={data} />
    </Box>
  );
};
export default Testimonial;
