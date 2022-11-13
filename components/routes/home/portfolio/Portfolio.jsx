import { Box, Grid, Paper, Stack, Typography, Checkbox, FormGroup, FormControlLabel } from "@mui/material"
import { useContext } from "react";
import { Context } from "../../../../pages/_app";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import Image from "next/image";
import imag1 from '../../../../public/image/portfolio-large-01-340x250.jpg'
import imag2 from '../../../../public/image/portfolio-large-02-340x250.jpg'
import imag3 from '../../../../public/image/portfolio-large-03-340x250.jpg'
import imag4 from '../../../../public/image/portfolio-large-04-340x250.jpg'
import imag5 from '../../../../public/image/portfolio-large-05-340x250.jpg'
import imag6 from '../../../../public/image/portfolio-large-06-340x250.jpg'

const Portfolio = () => {
    const themeMode = useContext(Context).colorTheme
    const data = [
        {
            title: 'GALLERY',
            like: '204',
            body: 'NFT Dashboard Application Development.',
            img: imag1
        },
        {
            title: 'VIDEO',
            like: '394',
            body: 'Online Food Delivery Mobile App Design.',
            img: imag2
        },
        {
            title: 'EXTERNAL LINK',
            like: '78',
            body: 'Travel App Design Creativity & Application.',
            img: imag3
        },
        {
            title: 'IMAGE',
            like: '793',
            body: 'Workout Website Design And Development.',
            img: imag4
        },
        {
            title: 'GALLERY',
            like: '26',
            body: 'Mobile Application Landing Page Design.',
            img: imag5
        },
        {
            title: 'STANDARD',
            like: '1038',
            body: 'Restaurant Mobile Application Figma Design.',
            img: imag6
        },
    ]
    return (
        <Box id='Portfolio' component='section' sx={{ maxWidth: 1300, mx: 'auto', my: 14, px: { xs: 2, sm: 3, md: 4 } }}>
            <Typography variant="body2" textAlign='center'
                sx={{ letterSpacing: '3px', my: 2, color: 'primary.main' }}>
                VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK
            </Typography>
            <Typography variant="h2" fontWeight={700} textAlign='center'>My Portfolio</Typography>
            <Grid container direction='row' spacing={4} sx={{ my: 3 }}>
                {data.map((value, index) => (
                    <Grid item key={index} xs={12} sm={6} lg={4}>
                        <Paper elevation={0} sx={{
                            borderRadius: '10px',
                            p: { xs: 2, sm: 3, md: 4 },
                            "&:hover": {
                                "&:before": {
                                    opacity: themeMode == 'dark' ? 1 : 0
                                }
                            }
                        }}>
                            <Box sx={{
                                borderRadius: '10px',
                                overflow: 'hidden',
                                cursor: 'pointer',
                                "& img": {
                                    width: 1,
                                    height: 'unset',
                                    transform: 'scale(1.1)',
                                    transition: 'all .4s',
                                    ":hover": {
                                        transform: 'scale(1.2)'
                                    }
                                },
                            }}>
                                <Image src={value.img} alt="" />
                            </Box>
                            <Stack className='hover-up'>
                                <Stack direction='row' sx={{ mt: 2, mb: 1, alignItems: 'center', justifyContent: 'space-between' }}>
                                    <Typography variant="body2"
                                        sx={{
                                            letterSpacing: '3px',
                                            color: 'primary.main',
                                            transform: 'scale(.8)',
                                            fontWeight: 700
                                        }}>
                                        {value.title}
                                    </Typography>
                                    <FormGroup>
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    icon={<FavoriteBorder />}
                                                    size="small"
                                                    checkedIcon={<Favorite />}
                                                />
                                            }
                                            label={value.like} />
                                    </FormGroup>
                                </Stack>
                                <Typography variant="h6" fontWeight={600} sx={{
                                    cursor: 'pointer',
                                    transition: 'all .4s',
                                    px: 1,
                                    display: "-webkit-box",
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    'line-clamp': "2",
                                    "-webkit-line-clamp": "2" /* number of lines to show */,
                                    "-webkit-box-orient": "vertical",
                                    height: "60px",
                                    "line-height": "30px",
                                    "&:hover": {
                                        color: 'primary.main',
                                        "& .hover-icon": {
                                            transform: 'rotate(-45deg) scale(1)'
                                        }
                                    }
                                }}>
                                    {value.body}
                                    <ArrowForwardIcon
                                        sx={{
                                            width: 25,
                                            height: 25,
                                            fill: '#ff014f',
                                            transform: 'rotate(-45deg) scale(0)',
                                            mb: -.7,
                                        }}
                                        className='hover-icon'
                                    />
                                </Typography>
                            </Stack>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}
export default Portfolio