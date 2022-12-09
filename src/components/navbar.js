import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import "./navbar.css"
import styled from 'styled-components'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import WalletModal from './ui/modal/wallet-modal';
import 'bootstrap/dist/css/bootstrap.min.css'
const Wallet = styled.button`
    margin-left: 65%;
`

function Navbar() {
    const navigate = useNavigate();
    const [showLogin, setShowLogin] = useState(false);
    const [loginMetamaskSuccess,setLoginMetamaskSuccess] = useState(false);
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
            <nav className="w-full relative z-40 flex items-center">
                <div className="w-full top-0 left-0 bg-white h-[50px] absolute z-10 md:h-[90px]">
                    <div className="flex  items-center  pt-1">
                        <div className="flex items-center">
                            <Link to="home">
                                <img
                                    src={logo}
                                    className="w-24 h-8 ml-2 order-1 cursor-pointer md:w-32 md:h-14"
                                    alt="logo"
                                />
                            </Link>
                            <div className="lg:border-l-[1.5px] lg:border-[#D9D9D9] order-2 lg:mx-2 h-12">
                                <div className="hidden items-center order-3 lg:flex md:w-auto">
                                    <ul className="flex flex-col py-3 mx-4 lg:flex-row lg:space-x-8 lg:mt-0 lg:text-nav">
                                        <li>
                                            <Link to="/market">
                                                <p>Expore
                                                </p>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/create">
                                                <p>Create</p>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/blog">
                                                <p>Blog</p>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/contact">
                                                <p>Contact</p>
                                            </Link>
                                        </li>
                                    </ul>

                                </div>
                            </div>
                        </div>
                        <Wallet className=' bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-full'
                            onClick={() => setShowLogin(true)}>
                            Connect Wallet
                        </Wallet>
                        {showLogin && <WalletModal setOpenLogin={setShowLogin} loginSuccess={handleLogin}/>}                        
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
