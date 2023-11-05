import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function ButtonSave({onClick}) {
  return (
      <Stack direction="row" spacing={2}>
        <Button variant="contained" color="success" onClick={onClick}>
          Lưu
        </Button>
      </Stack>
  );
}
