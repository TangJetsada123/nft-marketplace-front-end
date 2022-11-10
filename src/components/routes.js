import { Routes, Route, Navigate } from "react-router-dom";
import Create from "../page/Create";
import Home from "../page/Home";
import Market from "../page/Market";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/market" element={<Market />} />
      <Route path="/create" element={<Create />} />
    </Routes>
  );
};
export default Routers;
