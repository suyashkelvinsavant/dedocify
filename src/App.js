import './App.scss';
import Navb from './Components/Navbar/Navb';
import Footer from './Components/Footer/Footer'
import Page from './Components/Pages/Page';
import React, { useState } from 'react';

function App() {
  const [state, setstate] = useState({connected:false,address:""});
  return (
    <>
      <Navb state={state} setstate={setstate}/>
      <Page state={state}/>
      <Footer/>
    </>
  );
}

export default App;
