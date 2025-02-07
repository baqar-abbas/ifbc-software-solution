import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Header from "./components/Header/Header";
import WhoWeAre from "./pages/WhoWeAre";
import OurWork from "./pages/OurWork";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <>
      <div>
        <ScrollToTop /> {/* Ensure smooth scroll on route change */}
        <Header />
        <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/who-we-are" element={<WhoWeAre />} />
            <Route path="/our-work" element={<OurWork />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
