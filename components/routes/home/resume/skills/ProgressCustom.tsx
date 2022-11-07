import { useTheme } from "@emotion/react";
import { LinearProgress } from "@mui/material";
import { FC, useContext, useEffect, useState } from "react";
import { Context } from "../../../../../pages/_app";

interface Iprops {
  value: {
    title: string;
    num: number;
  };
}

const ProgressCustom: FC<Iprops> = ({ value }) => {
  const [prog, setProg] = useState(0);
  const themeMode = useContext(Context).colorTheme;
  const theme: any = useTheme();

  useEffect(() => {
    setProg(value.num);
  }, []);

  return (
    <LinearProgress
      sx={{
        borderRadius: "10px",
        height: 13,
        backgroundColor: "divider",
        border: "3px solid",
        borderColor: "divider",
        "& span": {
          transition: "transform .8s linear",
          borderRadius: "10px",
          background:
            themeMode === "light"
              ? `linear-gradient(145deg, #fff ${100-prog}%, #ff014f 100%)`
              : `linear-gradient(145deg, #6a67ce ${100-prog}%, #fc636b 100%)`,
        },
      }}
      variant="determinate"
      value={prog}
    />
  );
};
export default ProgressCustom;
