import { Box, Paper } from "@mui/material"
import Image from "next/image"
import image from '../../../../public/image/banner-01.png'

const PicMain = () => {
    return (
        <>
            <Paper elevation={0}
                sx={{ width: .93, height: .75, m: 4, p: 5, position: 'absolute', left: -10, bottom: -4, zIndex: 1 }}>
            </Paper>
            <Box sx={{
                "& img": {
                    width: 1,
                    height: 'unset'
                },
                position: 'relative',
                zIndex: 2
            }}>
                <Image src={image} alt='' />
            </Box>
        </>
    )
}
export default PicMain