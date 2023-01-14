import {Routes, Route, Navigate } from 'react-router-dom';
import Home from '../page/home'
import Explore from '../page/explore';
import Account from '../page/account';
import Create from '../page/create';
import Blog from '../page/blog';
const  Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to='/home'/>}/>
            <Route path="/home" element={<Home />}/>
            <Route path="/market" element={<Explore />}/>
            <Route path="/account" element={<Account />}/>
            <Route path="/create" element={<Create />}/>
            <Route path="/blog" element={<Blog />} />
        </Routes>
    );
}
export default Routers;
