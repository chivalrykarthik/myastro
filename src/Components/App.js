import React, { useState } from 'react';

import { CssBaseline, Container } from '@material-ui/core'
import Header from './header/Header';
import GridCmp from './grid/GridCmp';
import Description from './description/Description';
import Title from './title/Title';
import './App.css'

let currentDate = new Date();

const App = () => {
  let [find, setFind] = useState('');
  return (
    <>
      <CssBaseline />
      <Header />
      <Container maxWidth="md" className="container">
        <div style={{ marginTop: 20, padding: 30 }}>
          <Title setFind={setFind} />

          <GridCmp find={find} />
          <Description dt={currentDate} />
        </div>
      </Container>
    </>
  )
}


export default App;
