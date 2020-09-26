import React from 'react';

import { CssBaseline, Typography, Container } from '@material-ui/core'
import Header from './header/Header';
import GridCmp from './grid/GridCmp';
import DayCmp from './description/DayCmp';
import './App.css'

let currentDate = new Date();

const App = () => {
  return (
    <>
      <CssBaseline />
      <Header />
      <Container maxWidth="md" className="container">
        <div style={{ marginTop: 20, padding: 30 }}>
          <Typography variant="h6" component="h6">
            Timings
          </Typography>
          <GridCmp />
          <DayCmp dt={currentDate} />
        </div>
      </Container>
    </>
  )
}


export default App;
