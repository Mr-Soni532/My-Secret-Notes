import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from "@material-ui/core";
import theme from './config/Theme';
import NoteState from './context/notes/NoteState';
import AlertState from './context/alert/AlertState';


ReactDOM.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <NoteState>
        <AlertState>
          <App />
        </AlertState>
      </NoteState>
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById('root')
);


reportWebVitals();
