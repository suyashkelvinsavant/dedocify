import "./App.scss";
import Page from "./Components/Pages/Page";
import About from "./Components/Pages/About/About.js";
import Privacy from "./Components/Pages/PrivacyPolicy/Privacy.jsx";
import Terms from "./Components/Pages/TermsAndConditions/Terms.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import your route components too

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
