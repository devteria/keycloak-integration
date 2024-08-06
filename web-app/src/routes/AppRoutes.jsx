import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Registration from "../pages/Registration";
import Home from "../pages/Home";
import ProtectedRoute from "./ProtectedRoute";
import Login from "../pages/Login";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<ProtectedRoute />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
