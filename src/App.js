import './App.scss';
import Navb from './Components/Navbar/Navb';
import Footer from './Components/Footer/Footer'
import Page from './Components/Pages/Page';
import React, { useState } from 'react';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';

function App() {
  const [state, setstate] = useState({connected:false,address:""});
  const [ekey, setEkey] = useState("")
  const [cid, setCid] = useState("")
  const [files, setFiles] = useState([])
  const [page, setPage] = useState("")
  return (
    <>
      <Navb state={state} setstate={setstate}  setEkey={setEkey}  setCid={setCid} setFiles={setFiles} setPage={setPage} />
      <Page state={state} ekey={ekey} cid={cid} setFiles={setFiles} setEkey={setEkey} files={files} page={page} />
      <ScrollToTop/>
      <Footer setPage={setPage}/>
    </>
  );
}

export default App;
