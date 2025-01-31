import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Header from "./components/Header/Header";
import WhoWeAre from "./pages/WhoWeAre";
import OurWork from "./pages/OurWork";

function App() {
  return (
    <>
      <div>
        <Header />
        <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/who-we-are" element={<WhoWeAre />} />
            <Route path="/our-work" element={<OurWork />} />
            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;
