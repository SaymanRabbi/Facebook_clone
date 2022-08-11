import { Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Profile from "./pages/profile";
import Home from "./pages/home";
import LoginRoutes from "./Routes/LoginRoutes";
import NotLoginRoutes from "./Routes/NotLoginRoutes";
function App() {
  return (
    <div>
      <Routes>
        
        <Route element={<LoginRoutes/>}>
        <Route path="/profile" element={<Profile />} exact />
        <Route path="/" element={<Home />} exact />
        </Route>
        <Route element={<NotLoginRoutes/>}>
        <Route path="/login" element={<Login />} exact />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
