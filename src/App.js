import './App.scss';
import Navb from './Components/Navbar/Navb';
import Footer from './Components/Footer/Footer'
import Page from './Components/Pages/Page';
import React, { useState } from 'react';

function App() {
  const [state, setstate] = useState({connected:false,address:""});
  const [ekey, setEkey] = useState("")
  const [cid, setCid] = useState("")
  const [files, setFiles] = useState([])
  return (
    <>
      <Navb state={state} setstate={setstate}  setEkey={setEkey}  setCid={setCid} setFiles={setFiles} />
      <Page state={state} ekey={ekey} cid={cid} setFiles={setFiles} setEkey={setEkey} files={files}  />
      <Footer/>
    </>
  );
}

export default App;
