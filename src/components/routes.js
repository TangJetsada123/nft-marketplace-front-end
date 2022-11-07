import {Routes, Route, Navigate } from 'react-router-dom';
import Home from '../page/home'
import Market from '../page/market';

const  Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to='/home'/>}/>
            <Route path="/home" element={<Home />}/>
            <Route path="/market" element={<Market />}/>
        </Routes>
    );
}
export default Routers;
