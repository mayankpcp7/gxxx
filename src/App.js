import "./App.css";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SocialSlider from "./components/SocialSlider";
import AboutUs from "./components/AboutUs";
import Takenomics from "./components/Takenomics";

function App() {
  return (
    <>
      <div className="overflow-hidden">
        <NavBar />
        <Header />
        <SocialSlider />
        <AboutUs />
        <Takenomics/>
        <SocialSlider />
        <Footer />
      </div>
    </>
  );
}

export default App;
