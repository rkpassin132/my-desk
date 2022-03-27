/** @format */

import * as React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
} from "@mui/material";
import DeleteForeverTwoToneIcon from "@mui/icons-material/DeleteForeverTwoTone";
import BorderColorTwoToneIcon from "@mui/icons-material/BorderColorTwoTone";

export default function NotesCard({ note, NoteUpdateOpenModal, NoteDeleteOpenModal }) {
  return (
    <Card>
      <CardContent>
        <CardHeader
          style={{ padding: 0 }}
          title={
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {note.date}
            </Typography>
          }
          action={
            <>
              <IconButton sx={{ color: "#f06262" }} aria-label="delete" onClick={() => NoteDeleteOpenModal()}>
                <DeleteForeverTwoToneIcon />
              </IconButton>
              <IconButton aria-label="update" onClick={() => NoteUpdateOpenModal()}>
                <BorderColorTwoToneIcon />
              </IconButton>
            </>
          }
        />
        <Typography variant="h5" component="div">
          {note.title}
        </Typography>
        <Typography
          variant="body2"
          paragraph={true}
          mt={1}
          style={{ color: "#393939" }}
        >
          {note.text}
        </Typography>
      </CardContent>
    </Card>
  );
}
