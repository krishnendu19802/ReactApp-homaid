import "./App.css";
import { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "/src/components/Home/home.jsx";
import Login from "/src/components/Login/login.jsx";
import ContactUs from "/src/components/ContactUs/contact.jsx";
import CookingProfile from "/src/components/CookingProfile/cp.jsx";
import CleaningServices from "/src/components/CleaningServices/cs.jsx";
import CleaningProfile from "/src/components/CleaningProfile/CleaningProfile.jsx";
import ServicesSection from "/src/components/ServicesSection/ServicesSection.jsx";
import AboutSection from "/src/components/AboutSection/AboutSection.jsx";
import Signup from '/src/components/Signup/signup.jsx';
class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<AboutSection />} />
          <Route exact path="/services" element={<ServicesSection />} />
          <Route exact path="/contactus" element={<ContactUs />} />
          <Route exact path="/cookingprofile" element={<CookingProfile />} />
          <Route exact path="/cleaningservices" element={<CleaningServices />} />
          <Route exact path="/cleaningprofile" element={<CleaningProfile />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
