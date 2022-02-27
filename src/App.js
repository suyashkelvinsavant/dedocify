import "./App.scss";
import Page from "./Components/Pages/Page";
import About from "./Components/Pages/About/About.jsx";
import Privacy from "./Components/Pages/PrivacyPolicy/Privacy.jsx";
import Terms from "./Components/Pages/TermsAndConditions/Terms.jsx";
import Pricing from "./Components/Pricing/Pricing.jsx";
import User from "./Components/Pages/User/User.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import your route components too

function App() {
  return (
    <>
    <BrowserRouter>
    {/* <Navb state={state} setstate={setstate}  setEkey={setEkey}  setCid={setCid} setFiles={setFiles} setPage={setPage} />
    <Page state={state} ekey={ekey} cid={cid} setFiles={setFiles} setEkey={setEkey} files={files} page={page}/> */}
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/about-team" element={<About />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
