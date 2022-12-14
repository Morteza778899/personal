import { Button, Paper, Stack, TextField } from "@mui/material";

const FormMe = () => {
  return (
    <Paper elevation={0} sx={{ px: { xs: 2.5, sm: 3, md: 4 }, py: 4 }}>
      <Stack
        gap={{xs:3,sm:5}}
        sx={{
          "& .MuiFormLabel-root": {
            fontFamily: "Montserrat , sans-serif",
            fontSize: ".92rem",
            fontWeight:600
          },
        }}
      >
        <Stack direction={{xs:'column',sm:"row"}} gap={3}>
          <TextField label="YOUR NAME" variant="filled" fullWidth />
          <TextField label="PHONE NUMBER" variant="filled" fullWidth />
        </Stack>
        <TextField label="EMAIL" variant="filled" fullWidth />
        <TextField label="SUBJECT" variant="filled" fullWidth />
        <TextField
          label="YOUR MESSAGE"
          variant="filled"
          multiline
          rows={9}
          fullWidth
        />
        <Button
          sx={{
            p: 2,
            letterSpacing: "2px",
            fontWeight: 400,
            color: "text.primary",
          }}
        >
          SEND MESSAGE
        </Button>
      </Stack>
    </Paper>
  );
};
export default FormMe;
