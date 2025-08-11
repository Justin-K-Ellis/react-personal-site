import { BrowserRouter, Route, Routes } from "react-router";

import About from "./pages/About";
import Home from "./pages/Home";
import Resume from "./pages/Resume";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </BrowserRouter>
  );
}
