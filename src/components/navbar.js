import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import "./navbar.css"
import styled from 'styled-components'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import WalletModal from './ui/modal/wallet-modal';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BsFillCartFill } from 'react-icons/bs'
import { useItemsStore } from './ui/nft-card/shopping-cart/cart';
import { IoCloseOutline } from 'react-icons/io5'
import axios from 'axios';


const Wallet = styled.button`
    width: 100%;
    height: 40px;
`
function Navbar() {
    const navigate = useNavigate();
    const [showLogin, setShowLogin] = useState(false);
    const [loginMetamaskSuccess, setLoginMetamaskSuccess] = useState(false);
    const [showCart, setShowCart] = useState(false)
    const [showNonItem, setShowNonItem] = useState(false)
    const [stock, setStock] = useState([])
    const [account, setAccount] = useState(false)
    const [buySuccess, setBuySuccess] = useState(false)

    const handleLogo = () => {
        navigate('/home', { replace: true })
    }
    useEffect(() => {
        const setToken = () => {
            if (localStorage.getItem('token')) {
                setLoginMetamaskSuccess(true)
                setAccount(true)
                console.log("token")
            }
        }
        setToken()
    }, [])

    const handleLogout = () => {
        localStorage.removeItem("Token" || 'token')
        setLoginMetamaskSuccess(false)
        navigate('/', { replace: true })
    }

    const clicked = () => {
        setShowLogin(true);
    }

    const handleClickCart = () => {
        setShowCart(true);
    }

    const handleLogin = () => {
        setLoginMetamaskSuccess(true);
        navigate('/account');
    }

    const handleClear = (id) => {
        setStock((current) =>
            current.filter((item) => item[0].id !== id)
        )
    }

    const handleClose = () => {
        setShowCart(false)
        setBuySuccess(false)
    }

    const handleCloseBuy = () => {
        setShowCart(false)
        setBuySuccess(false)
        setStock([])
    }
    const { items, setItem } = useItemsStore()

    const setscore = () => {
        let total = 0
        const s = stock.map((item) => {
            item.map((price) => {
                total += price.price
            })
        })
        return total.toFixed(2)
    }

    const handleBuy = () => {
        const userId = localStorage.getItem("Token" || "token").toString()
        const token = `Bearer ${JSON.parse(userId)}`
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': token
        }
        stock.map((stock) => {
            axios.put(`https://nft-marketplace-service-production.up.railway.app/api/asset/buy/${stock[0].id}`, { "confirm": true }, {
                headers
            }
            )
        })
        setShowCart(false)
        setBuySuccess(true)
        navigate('/account', { replace: true })
    }

    const SuccessComponent = () => {
        return (<div>
            <div className=" bg-neutral-700 opacity-70  fixed inset-0"></div>
            <div className="flex justify-end items-center object-right mr-16">
                <div className='bg-white  z-50 w-[373px] h-[100%]  rounded-xl '>
                    <div className='flex-box'>
                        <div className='flex pt-[24px] pl-[24px] pr-[24px] justify-between'>
                            <div className='font-bold text-xl'>
                                Your purchase is complete
                            </div>
                            <h2>
                                <IoCloseOutline onClick={handleCloseBuy} />
                            </h2>
                        </div>
                        <header className='flex border-[0.2px] w-full'></header>
                        <div className='flex-box p-[24px] justify-between pl-[24px] pr-[24px]'>
                            {stock?.map((item) => {
                                return <div className=''>
                                    {item.map((card) => {
                                        return <div className='flex gap-6 mb-6 '>
                                            <div className='flex gap-2'>
                                                <div><img src={card.picture} alt="" className="rounded-md w-[70px] h-[70px]"></img></div>
                                                <div className='font-bold text-base'>{card.pictureName}</div>
                                                <div>{card.price} ETH</div>
                                            </div>
                                        </div>
                                    })}
                                </div>
                            })}
                            <div className='font-bold mb-4'>Total Price: {setscore()} ETH</div>
                        </div>

                    </div>
                </div>
            </div>
        </div >)

    }

    useEffect(() => {
        if (items) {
            setStock(items)
        }
        if (stock.length != 0) {
            setShowNonItem(true)
        } else {
            console.log("empty")
            setShowNonItem(false)
        }
    }, [items])

    const CartComponent = () => {
        return <div>
            <div className=" bg-neutral-700 opacity-70  fixed inset-0"></div>
            <div className="flex justify-end items-center object-right mr-16">
                <div className='bg-white  z-50 w-[373px] h-[100%]  rounded-xl '>
                    <div className='flex-box'>
                        <div className='flex pt-[24px] pl-[24px] pr-[24px] justify-between'>
                            <div className='font-bold text-xl'>
                                Your cart
                            </div>
                            <h2>
                                <IoCloseOutline onClick={handleClose} />
                            </h2>
                        </div>
                        <header className='flex border-[0.2px] w-full'></header>
                        <div className='flex p-[24px] justify-between'>
                        </div>
                        <div className='pl-[24px] pr-[24px]'>
                            {
                                showNonItem ? (
                                    <div className='flex-box'>
                                        <div className='font-bold text-base'>
                                            {stock?.length} items
                                        </div>
                                        {stock?.map((item) => {
                                            return <div className=''>
                                                {item.map((card) => {
                                                    return <div className='flex gap-6 mb-6 '>
                                                        <div className='flex gap-2'>
                                                            <div><img src={card.picture} alt="" className="rounded-md w-[70px] h-[70px]"></img></div>
                                                            <div className='font-bold text-base'>{card.pictureName}</div>
                                                            <div>{card.price} ETH</div>
                                                            <div><button className='border  text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-3 py-1.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' onClick={() => handleClear(card.id)}>remove</button></div>
                                                        </div>
                                                    </div>
                                                })}
                                            </div>
                                        })}
                                        <div className='font-bold mb-4'>Total Price: {setscore()} ETH</div>
                                        <div className='rounded-xl text-center align-middle p-[18px] bg-[#2081e2] text-white font-bold text-lg mb-6' onClick={() => handleBuy()}>Complete Purchase</div>
                                    </div>) :
                                    (<div>
                                        <div className='flex justify-center mb-[100px]'> Add items to get started.</div>
                                        <div className='rounded-xl text-center align-middle p-[18px] bg-[#68aef3] text-white font-bold text-lg mb-6'>Complete Purchase</div>
                                    </div>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div >
    }
    console.log(loginMetamaskSuccess)
    return (
        <div >
            <nav className="w-full  z-40 flex">
                <div className="w-full top-0 left-0 bg-white h-[50px] absolute z-10 md:h-[90px]">
                    <div>
                        <div className="flex gap-3 items-center ml-16">
                            <div>
                                <img
                                    src={logo}
                                    className="w-full ml-2 order-1 cursor-pointer md:w-32 md:h-14"
                                    alt="logo"
                                    onClick={handleLogo}
                                />
                            </div>
                            <div>
                                <form>
                                    <input className='border ml-5 w-[800px] rounded-full p-2' type='search' placeholder='Search item,collections and accounts'></input>
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
                            {account ? (<><div>
                                <Link to="/account">
                                    <p className='font-bold'>Contact</p>
                                </Link>
                            </div></>) : null}
                            <div>
                                {loginMetamaskSuccess ? (<div>  <button className=' bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-full p-1 ' onClick={() => handleLogout()}>Logout</button></div>) :
                                    <Wallet className=' bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-full p-[3px]'
                                        onClick={() => setShowLogin(true)}>
                                        Connect Wallet
                                    </Wallet>}
                                {showLogin && <WalletModal setOpenLogin={setShowLogin} loginSuccess={handleLogin} />}
                            </div>
                            <div className='flex'>
                                <div className='static'>
                                    <BsFillCartFill size={30} onClick={handleClickCart} />
                                </div>
                                <div className='relative'>
                                    {stock.length}
                                </div>
                            </div>
                        </div>
                        <div>
                            {
                                showCart ? (
                                    < CartComponent />
                                ) : null
                            }
                            {
                                buySuccess ? (<SuccessComponent />) : null
                            }
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
