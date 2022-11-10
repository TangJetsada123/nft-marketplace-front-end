<<<<<<< HEAD
import {Routes, Route, Navigate } from 'react-router-dom';
import Home from '../page/home'
import Market from '../page/market';
import Account from '../page/account'
const  Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to='/home'/>}/>
            <Route path="/home" element={<Home />}/>
            <Route path="/market" element={<Market />}/>
            <Route path="/account" element={<Account />}/>
        </Routes>
    );
}
=======
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../page/home";
import Market from "../page/market";
import Account from "../page/account";
const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/market" element={<Market />} />
      <Route path="/account" element={<Account />} />
    </Routes>
  );
};
>>>>>>> f75c97f (feat: login metamask)
export default Routers;
