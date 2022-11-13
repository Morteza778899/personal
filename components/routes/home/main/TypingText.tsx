import { useTheme } from "@emotion/react"
import { Box, Collapse, Stack, Typography } from "@mui/material"
import { useEffect, useState } from "react"

const TypingText = () => {
    const [open1, setOpen1] = useState(true)
    const [open2, setOpen2] = useState(false)
    const [open3, setOpen3] = useState(false)
    const theme: any = useTheme()
    useEffect(() => {
        if (open1) {
            setTimeout(() => {
                setOpen1(false)
            }, 3000);
            setTimeout(() => {
                setOpen2(true)
            }, 4000);
        }
    }, [open1])
    useEffect(() => {
        if (open2) {
            setTimeout(() => {
                setOpen2(false)
            }, 3000);
            setTimeout(() => {
                setOpen3(true)
            }, 4000);
        }
    }, [open2])
    useEffect(() => {
        if (open3) {
            setTimeout(() => {
                setOpen3(false)
            }, 3000);
            setTimeout(() => {
                setOpen1(true)
            }, 4000);
        }
    }, [open3])
    return (
        <Stack sx={{ maxWidth: '800px', flexDirection: 'row', alignItems: 'center' }}>
            <Typography variant="h3" sx={{ fontWeight: 700, display: 'inline', mr: 1 }}>a </Typography>
            <Collapse in={open1} timeout={1000} orientation="horizontal">
                <Typography variant="h3" sx={{ fontWeight: 700, whiteSpace: 'nowrap',px:1 }}>Developer.</Typography>
            </Collapse>
            <Collapse in={open2} timeout={1000} orientation="horizontal">
                <Typography variant="h3" sx={{ fontWeight: 700, whiteSpace: 'nowrap',px:1 }}>Professional Coder.</Typography>
            </Collapse>
            <Collapse in={open3} timeout={1000} orientation="horizontal">
                <Typography variant="h3" sx={{ fontWeight: 700, whiteSpace: 'nowrap',px:1 }}>UI/UX Designer.</Typography>
            </Collapse>
            <Box sx={{ width: 2, height: 50, bgcolor: theme.palette.primary.main }}></Box>
        </Stack>
    )
}
export default TypingText