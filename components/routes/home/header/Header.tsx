import { Box, Button, Grid, Stack, Typography } from "@mui/material"
import { useTheme } from "@emotion/react";
import Image from "next/image"
import { useContext } from "react";
import { Context } from "../../../../pages/_app";
import logo from '../../../../public/image/logo.png'
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const Header = () => {
    const colorMode = useContext(Context);
    const theme: any = useTheme()
    return (
        <Box component='header'
            sx={{ boxShadow: theme.palette.shadow.default }}>
            <Grid container justifyContent={'space-between'} direction={'row'}
                sx={{ p: 1, width: 1300, mx: 'auto' }}>
                <Grid item >
                    <Image src={logo} alt='logo' />
                </Grid>
                <Grid item >
                    <Stack direction='row' gap={3} sx={{ height: 1 }} alignItems='center'>
                        <Typography variant="subtitle2">HOME</Typography>
                        <Typography variant="subtitle2">FEATURES</Typography>
                        <Typography variant="subtitle2">PORTFOLIO</Typography>
                        <Typography variant="subtitle2">RESUME</Typography>
                        <Typography variant="subtitle2">TESTIMONIAL</Typography>
                        <Typography variant="subtitle2">CLIENTS</Typography>
                        <Typography variant="subtitle2">PRICING</Typography>
                        <Typography variant="subtitle2">BLOG</Typography>
                        <Typography variant="subtitle2">CONTACTS</Typography>
                    </Stack>
                </Grid>
                <Button
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'text.primary',
                        borderRadius: 1,
                        height: 'fit-content',
                        py: 2,
                        px: 3,
                        my: 1
                    }}
                    onClick={colorMode.toggleColorMode}
                >
                    {colorMode.colorTheme} mode
                    {colorMode.colorTheme === 'dark' ? <Brightness7Icon sx={{ mx: 1 }} /> : <Brightness4Icon sx={{ mx: 1 }} />}
                </Button>
            </Grid>
        </Box>
    )
}
export default Header
