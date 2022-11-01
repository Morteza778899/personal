import { Box, Grid } from "@mui/material"
import TextMain from "./TextMain";
import PicMain from "./PicMain";

const Main = () => {
    return (
        <Box sx={{ width: 1300, mx: 'auto', mt: 4 }} component='section'>
            <Grid container>
                <Grid item xs={7} sx={{ pt: 8 }}>
                    <TextMain />
                </Grid>
                <Grid item xs={5} sx={{ p: 3, position: 'relative' }}>
                    <PicMain />
                </Grid>
            </Grid>
        </Box>
    )
}
export default Main