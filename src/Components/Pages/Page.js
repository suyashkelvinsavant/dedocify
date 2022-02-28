import React, { useState } from "react";
import Navb from "../Navbar/Navb";
import Footer from "../Footer/Footer";
import HomePage from "../HomePage/HomePage.jsx";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import User from "./User/User.jsx";
const Page = () => {
  // { state, ekey, cid, files, setFiles, setEkey, page }
  const [state, setState] = useState({ connected: false, address: "", key:"" });
  const [ekey, setEkey] = useState("");
  const [cid, setCid] = useState("");
  const [files, setFiles] = useState([]);
  // const [page, setPage] = useState("");

  return (
    <div className="page">
      <Navb
        state={state}
        setState={setState}
        setEkey={setEkey}
        setCid={setCid}
        setFiles={setFiles}
      />
      {state.connected ? (
        <User
          state={state}
          setState={setState}
          ekey={ekey}
          cid={cid}
          setFiles={setFiles}
          files={files}
          setEkey={setEkey}
        />
      ) : (
        <div className="page__container">
          <HomePage state={state}
        setState={setState}
        setEkey={setEkey}
        setCid={setCid}
        setFiles={setFiles} />
        </div>
      )}
      <Footer />
      <ScrollToTop />
      
    </div>
  );

  // if (page === "about") {
  //   return <About />;
  // }
  // if (page === "privacy") {
  //   return <Privacy />;
  // }
  // if (page === "terms") {
  //   return <Terms />;
  // }

  // if (page === "pricing") {
  //   return <Pricing />;
  // }

  // if (state.connected) {
  //   return (
  //     <User
  //       state={state}
  //       ekey={ekey}
  //       cid={cid}
  //       setFiles={setFiles}
  //       files={files}
  //       setEkey={setEkey}
  //     />
  //   );
  // } else {
  //   return (
  // <div className="page__container">
  //   <HomePage />
  // </div>
  //   );
  // }
}

export default Page;
