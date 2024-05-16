import "./App.css";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SocialSlider from "./components/SocialSlider";
import AboutUs from "./components/AboutUs";
import Takenomics from "./components/Takenomics";
import Utility from "./components/Utility";
import EcoSystem from "./components/EcoSystem";
import { Roadmap } from "./components/Roadmap";

function App() {
  return (
    <>
      <div className="overflow-hidden">
        <NavBar />
        <Header />
        <SocialSlider />
        <AboutUs />
        <Takenomics />
        <Utility />
        <EcoSystem />
        <Roadmap/>
        <SocialSlider />
        <Footer />
      </div>
    </>
  );
}

export default App;
