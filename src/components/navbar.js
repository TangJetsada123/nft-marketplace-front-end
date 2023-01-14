import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import "./navbar.css"
import styled from 'styled-components'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import WalletModal from './ui/modal/wallet-modal';
import 'bootstrap/dist/css/bootstrap.min.css'
const Wallet = styled.button`
`

function Navbar() {
    const navigate = useNavigate();
    const [showLogin, setShowLogin] = useState(false);
    const [loginMetamaskSuccess, setLoginMetamaskSuccess] = useState(false);
    const clicked = () => {
        setShowLogin(true);

    }
    const handleLogin = () => {
        setLoginMetamaskSuccess(true);
        navigate('/account');
    }

    console.log(showLogin)
    return (
        <div className='ml-16 mr-16'>
            <nav className="w-full relative z-40 flex">
                <div className="w-full top-0 left-0 bg-white h-[50px] absolute z-10 md:h-[90px]">
                    <div>
                        <div className="flex gap-4 items-center">
                            <div>
                                <Link to="home">
                                    <img
                                        src={logo}
                                        className="w-full ml-2 order-1 cursor-pointer md:w-32 md:h-14"
                                        alt="logo"
                                    />
                                </Link>
                            </div>
                            <div>
                                <form>
                                    <input  className='border ml-5 w-[800px] rounded-full p-2' type='search' placeholder='Search item,collections and accounts'></input>
                                </form>
                            </div>
                                    <div>
                                        <Link to="/market">
                                            <p className='font-bold'>Explore
                                            </p>
                                        </Link>
                                    </div>
                                    <div>
                                        <Link to="/create">
                                            <p className='font-bold'>Create</p>
                                        </Link>
                                    </div>
                                    <div>
                                        <Link to="/blog">
                                            <p className='font-bold'>Blog</p>
                                        </Link>
                                    </div>
                                    <div>
                                        <Link to="/contact">
                                            <p className='font-bold'>Contact</p>
                                        </Link>
                                    </div>
                                <div>
                                    <Wallet className=' bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-full'
                                        onClick={() => setShowLogin(true)}>
                                        Connect Wallet
                                    </Wallet>
                                    {showLogin && <WalletModal setOpenLogin={setShowLogin} loginSuccess={handleLogin} />}
                                </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
