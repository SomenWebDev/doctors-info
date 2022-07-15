import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Pages/Shared/Navbar";
import Home from "./Pages/Home/Home";
import About from "./Pages/Home/About";
import Appointment from "./Pages/Appointment/Appointment";
import Login from "./Pages/Login/Login";
import Review from "./Pages/Home/Review";

function App() {
  return (
    <div>
      <Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route
            path="/appointment"
            element={<Appointment></Appointment>}
          ></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/review" element={<Review></Review>}></Route>
        </Routes>
      </Navbar>
    </div>
  );
}

export default App;
