import {Routes, Route, Navigate } from 'react-router-dom';
import {Home} from '../page/Home'
import {Explore} from '../page/explore'
import {Account} from '../page/account'
import {Create} from '../page/Create'
import Asset_Card from './ui/nft-card/asset-card';
import Edit from '../page/EditAccount';

const  Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to='/home'/>}/>
            <Route path="/home" element={<Home />}/>
            <Route path="/market" element={<Explore />}/>
            <Route path="/account" element={<Account />}/>
            <Route path="/create" element={<Create />}/>
            <Route path="/edit-profile" element={<Edit/>} />
            <Route path='/asset' element={<Asset_Card />} />
        </Routes>
    );
}
export default Routers;
