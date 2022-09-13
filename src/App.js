import { Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Profile from "./pages/profile";
import Home from "./pages/home";
import LoginRoutes from "./Routes/LoginRoutes";
import NotLoginRoutes from "./Routes/NotLoginRoutes";
import Activate from "./pages/home/activate";
import Reset from "./pages/Reset/Reset";
import CreatePostPopup from "./components/CreatePostPopup/CreatePostPopup";
import { useSelector } from "react-redux";
function App() {
  const { user } = useSelector((state) => ({ ...state }));
  return (
    <div>
      <CreatePostPopup user={user} />
      <Routes>
        <Route element={<LoginRoutes />}>
          <Route path="/profile" element={<Profile />} exact />
          <Route path="/" element={<Home />} exact />
          <Route path="/activate/:token" element={<Activate />} />
        </Route>
        <Route element={<NotLoginRoutes />}>
          <Route path="/login" element={<Login />} exact />
        </Route>
        <Route path="/reset" element={<Reset />}></Route>
      </Routes>
    </div>
  );
}

export default App;
