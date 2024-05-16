import "./App.css";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SocialSlider from "./components/SocialSlider";
import AboutUs from "./components/AboutUs";

function App() {
  return (
    <>
      <NavBar />
      <Header />
      <SocialSlider />
      <AboutUs/>
      <SocialSlider />
      <Footer/>
    </>
  );
}

export default App;
