import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Adopt from "./pages/Adopt";
import Donate from './pages/Donate';
import FooterContext from "./components/FooterContext";
import { useRef } from "react";
import Blog from "./pages/Blog";
import VolunteerForm from './pages/VolunteerForm';
import Button from "./pages/Button";
import ChatBot from "./pages/ChatBot";
import BlogCareGuide from "./pages/BlogCareGuide";
import BlogFirstAid from "./pages/BlogFirstAid";
import BlogNutrition from "./pages/BlogNutrition";
import BlogTraining from "./pages/BlogTraining";
import LoginForm from "./pages/LoginForm";
import VolunteerDashboard from "./pages/VolunteerDashboard";
import Todo from "./pages/Todo";
import VetVisit from "./pages/VetVisit";
import Food from "./pages/Food";
import Vet from "./pages/Vet";
import StrayRegisterForm from "./pages/StrayRegisterForm";
import AdminLoginForm from "./pages/AdminLoginForm";
import AdminDashboard from "./pages/AdminDashboard";
import VolunteerDuties from "./pages/VolunteerDuties";

const App = () => {
  const footerRef = useRef(null);
  return (
    <Router>
       {/* NavBar outside Routes */}
      <FooterContext.Provider value={footerRef}>
      <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Adopt" element={<Adopt />} />
          <Route path="/Donate" element={<Donate />} />
          <Route path="/Footer" element={<Footer />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/BlogCareGuide" element={<BlogCareGuide />} />
          <Route path="/BlogNutrition" element={<BlogNutrition />} />
          <Route path="/BlogFirstAid" element={<BlogFirstAid />} />
          <Route path="/BlogTraining" element={<BlogTraining />} />
          <Route path="/Button" element={<Button />} />
          <Route path="/ChatBot" element={<ChatBot />} />
          <Route path="/LoginForm" element={<LoginForm />} />
          <Route path="/VolunteerDashboard" element={<VolunteerDashboard />} />
          <Route path="/Todo" element={<Todo />} />
          <Route path="/VetVisit" element={<VetVisit />} />
          <Route path="/Food" element={<Food />} />
          <Route path="/Vet" element={<Vet />} />
          <Route path="/StrayRegisterForm" element={<StrayRegisterForm />} />
          <Route path="/AdminLoginForm" element={<AdminLoginForm />} />
          <Route path="/AdminDashboard" element={<AdminDashboard />} />
          <Route path="/VolunteerDuties" element={<VolunteerDuties />} />
          <Route path="/VolunteerForm" element={<VolunteerForm />} />

        </Routes>
        <Footer />
        <Link to="/LoginForm">
          <Button>Apply</Button>
        </Link>
        <Link to="/VolunteerDashboard">
          <Button>Login</Button>
        </Link>
      </FooterContext.Provider>
      <Button/>
      <ChatBot/>
    </Router>
  );
};

export default App;