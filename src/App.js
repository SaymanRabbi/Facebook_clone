import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
import Register from "./components/Register/Register";

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
