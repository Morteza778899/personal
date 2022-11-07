import quote from "../../../../public/image/quote.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Context } from "../../../../pages/_app";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { FC, useContext, useState } from "react";
import Image, { StaticImageData } from "next/image";
import {
  Box,
  Divider,
  Grid,
  Paper,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import { useTheme } from "@emotion/react";

interface Iprops {
  data: {
    image: {
      src: StaticImageData;
      caption: string;
      title: string;
      body: string;
    };
    title: string;
    caption: string;
    rate: number;
    body: string;
  }[];
}

const Silder: FC<Iprops> = ({ data }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const themeMode = useContext(Context).colorTheme;
  const theme: any = useTheme();
  return (
    <Box
      sx={{
        mt:5,
        "& .swiper-pagination": {
          "& span": {
            width: 12,
            height: 12,
            m: "10px !important",
            "&.swiper-pagination-bullet-active": {
              backgroundColor:  theme.palette.primary.main,
            },
          },
        },
      }}
    >
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        style={{ width: "100%", paddingTop: "20px", paddingBottom: "80px" }}
        modules={[Pagination, Navigation]}
        navigation={{ nextEl: "#swiper-forward", prevEl: "#swiper-back" }}
        pagination={{ clickable: true }}
        loop
        speed={1000}
        onSlideChange={(Swiper) => setCurrentSlide(Swiper.realIndex)}
      >
        {data.map((value, index) => (
          <SwiperSlide key={index}>
            <Grid container sx={{ maxWidth: 1150, mx: "auto" }} spacing={5}>
              <Grid item xs={4.5}>
                <Paper elevation={0} sx={{ p: 4 }}>
                  <Box
                    sx={{
                      borderRadius: "10px",
                      overflow: "hidden",
                      "& img": {
                        width: 1,
                        height: "unset",
                        transform: "scale(1.1)",
                        transition: "all .4s",
                        ":hover": {
                          transform: "scale(1.2)",
                        },
                      },
                    }}
                  >
                    <Image src={value.image.src} alt="" />
                  </Box>
                  <Typography
                    variant="subtitle2"
                    fontWeight={500}
                    sx={{ letterSpacing: "1px", my: 3, color: "primary.main" }}
                  >
                    {value.image.caption}
                  </Typography>
                  <Typography fontWeight={600} mb={1} variant="h5">
                    {value.image.title}
                  </Typography>
                  <Typography variant="subtitle2">
                    {value.image.body}
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={7.5}>
                <Stack sx={{ height: 1, justifyContent: "space-between" }}>
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Box
                      sx={{
                        opacity: themeMode === "light" ? 0.2 : 1,
                        "& img": {
                          width: 130,
                          height: 130,
                        },
                      }}
                    >
                      <Image src={quote} alt="" />
                    </Box>
                    <Stack
                      direction="row"
                      sx={{
                        "& .MuiPaper-root": {
                          height: "fit-content",
                          cursor: "pointer",
                          p: 2,
                          m: 1,
                          "&:hover": {
                            "& svg": {
                              fill: (theme) =>
                                themeMode === "light"
                                  ? theme.palette.background.default
                                  : theme.palette.primary.main,
                            },
                          },
                          "& svg": {
                            fill: (theme) => theme.palette.text.secondary,
                          },
                        },
                      }}
                    >
                      <Paper elevation={1} id="swiper-back">
                        <ArrowBackIcon />
                      </Paper>
                      <Paper elevation={1} id="swiper-forward">
                        <ArrowForwardIcon />
                      </Paper>
                    </Stack>
                  </Stack>
                  <Paper elevation={0} sx={{ p: 5 }}>
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Box>
                        <Typography variant="h5" fontWeight={500}>
                          {value.title}
                        </Typography>
                        <Typography fontWeight={500} my={1}>
                          {value.caption}
                        </Typography>
                      </Box>
                      <Paper
                        elevation={0}
                        sx={{ p: 1.5, height: "fit-content" }}
                      >
                        <Rating value={value.rate} size="small" readOnly />
                      </Paper>
                    </Stack>
                    <Divider sx={{ my: 2.5 }} />
                    <Typography>{value.body}</Typography>
                  </Paper>
                </Stack>
              </Grid>
            </Grid>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};
export default Silder;
