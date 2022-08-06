import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Profile from "./Pages/Profile/Profile";
import Register from "./Pages/Register/Register";

function App() {
  return <div>
    <Routes>
      <Route element={<Login/>} path="/login" exact/>
      <Route element={<Home/>} path="/" exact/>
      <Route element={<Profile/>} path="/profile" exact/>
      <Route element={<Register/>} path="/register" exact/>
  </Routes>

  </div>;
}

export default App;
