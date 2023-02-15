import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home";
import Information from "../pages/Information";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/useful-information" element={<Information />} />
    </Routes >
  );
}

export default AppRoutes;