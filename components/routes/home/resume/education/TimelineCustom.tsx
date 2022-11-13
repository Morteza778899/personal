import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import { FC } from "react";
import TimeLineCustomContent from "./TimeLineCustomContent";

interface Iprops {
  data: {
    title: string;
    caption: string;
    body: string;
    button: string;
  }[];
}

const TimelineCustom: FC<Iprops> = ({ data }) => {
  return (
    <Timeline sx={{ px: { xs: 0, sm: 2, md: 3 } }}>
      {data.map((value, index) => (
        <TimelineItem
          key={index}
          sx={{
            "&:before": {
              content: "unset",
            },
          }}
        >
          <TimeLineCustomContent value={value} />
        </TimelineItem>
      ))}
    </Timeline>
  );
};
export default TimelineCustom;
