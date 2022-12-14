import { Box, Stack, Typography } from "@mui/material";
import { FC } from "react";
import ProgressCustom from "./ProgressCustom";
interface Iprops {
  data: {
    title: string;
    num: number;
  }[];
}
const ProgressContainer: FC<Iprops> = ({ data }) => {
  return (
    <Box>
      {data.map((value, index) => (
        <Box
          key={index}
          sx={{ my: { xs: 2, sm: 3, md: 4 }, mx: { xs: 1, sm: 2, md: 3 } }}
        >
          <Stack direction="row" justifyContent="space-between" sx={{ my: 1 }}>
            <Typography variant="subtitle2" fontWeight={500} letterSpacing={2}>
              {value.title}
            </Typography>
            <Typography variant="subtitle2" fontWeight={500} letterSpacing={2}>
              {value.num}%
            </Typography>
          </Stack>
          <ProgressCustom value={value} />
        </Box>
      ))}
    </Box>
  );
};
export default ProgressContainer;
