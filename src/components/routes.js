import {Routes, Route, Navigate } from 'react-router-dom';
import {Home} from '../page/Home'
import {Market} from '../page/Market'
import  {Account} from '../page/account'

export const  Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to='/home'/>}/>
            <Route path="/home" element={<Home />}/>
            <Route path="/market" element={<Market />}/>
            <Route path="/account" element={<Account />}/>
        </Routes>
    );
}
