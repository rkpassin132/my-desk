import * as React from 'react';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "../components/Header";
import Box from '@mui/material/Box';
import { DrawerHeader } from '../components/DrawerHeader';

const theme = createTheme();

export default function Notes() {

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <Header />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          <h1>Notes</h1>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
