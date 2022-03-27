/** @format */

import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "../components/Header";
import Box from "@mui/material/Box";
import { DrawerHeader } from "../components/DrawerHeader";
import { Fab, Grid } from "@mui/material";
import NotesCard from "../components/NotesCard";
import { blue } from "@mui/material/colors";
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import {NoteAddModal} from "../components/NoteAddModal";
import { NoteUpdateModal } from "../components/NoteUpdateModal";
import { NoteDeleteModal } from "../components/NoteDeleteModal";

const theme = createTheme();

export default function Notes() {
  const text = `Nowadays, mastering English is a key asset. Whether you're writing an email, a presentation or an essay, your resume or a cover letter in English, don't let mistakes get in the way of your success.
  With Reverso, detect and correct all types of grammar and spelling mistakes from wrong verb tenses, lack of agreement between subject and verb, incorrect prepositions to confusion between words with similar spelling, typos and minor punctuation glitches.`;
  const notes = [
    { text: text, date: "22/02/2022", title: "1 this is titile" },
    { text: text, date: "22/02/2022", title: "2 this is titile" },
    { text: text, date: "22/02/2022", title: "3 this is titile" },
    { text: text, date: "22/02/2022", title: "4 this is titile" },
    { text: text, date: "22/02/2022", title: "5 this is titile" },
    { text: text, date: "22/02/2022", title: "6 this is titile" },
    { text: text, date: "22/02/2022", title: "7 this is titile" },
    { text: text, date: "22/02/2022", title: "8 this is titile" },
  ];

  const NoteAddModalFunc = React.useRef(null);
  const NoteUpdateModalFunc = React.useRef(null);
  const NoteDeleteModalFunc = React.useRef(null);

  return (
    <ThemeProvider theme={theme}>
      <NoteAddModal  ref={NoteAddModalFunc} />
      <NoteUpdateModal ref={NoteUpdateModalFunc} />
      <NoteDeleteModal ref={NoteDeleteModalFunc} />
      <Box sx={{ display: "flex" }}>
        <Header />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            backgroundColor: "#f3f5f7",
            minHeight: "100vh",
          }}
        >
          <DrawerHeader />
          <h1>Notes</h1>
          <Grid container spacing={3}>
            {notes.map(function (note, index) {
              return (
                <Grid key={index} item xs={12} md={6} lg={4}>
                  <NotesCard note={note} NoteUpdateOpenModal={() => NoteUpdateModalFunc.current.OpenModal(note)} NoteDeleteOpenModal={() => NoteDeleteModalFunc.current.OpenModal(note)} />
                </Grid>
              );
            })}
          </Grid>
          <Fab
            variant="extended"
            sx={{
              position: "fixed",
              bottom: 20,
              right: 20,
              color: "common.white",
              bgcolor: blue[600],
              "&:hover": {
                bgcolor: blue[500],
              },
            }}
            onClick={() => NoteAddModalFunc.current.OpenModal()}
          >
            <AddCircleOutlineOutlinedIcon sx={{ mr: 1 }} />
            Note
          </Fab>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
