import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'
import bg from '../assets/bg-2.png'
import styled from 'styled-components'
import accountLogo from '../assets/images/ava-01.png'

const NavContainer = styled.div`
`
const BgContainer = styled.div`
`
const BgImg = styled.img`
    width: 200%;
    height: 450px;
`
const LogoImg = styled.img`
    width: 10%;
    margin-top: -150px;
`
const LogButton = styled.button`
    
`
const DisplayBox = styled.div`
    width: auto;
    height: auto;
`

export const Account = () => {
    const [user, setUser] = useState([])
    const [login, setLogin] = useState(false)
    useEffect(() => {
        const token = localStorage.getItem('Token');
        axios.get('http://localhost:3000/api/auth/me', {
            headers: {
                Authorization: `Bearer ${JSON.parse(token)}`
            }
        }).then((res) => {
            setUser(res.data)
            setLogin(true)
        })
    }, [])

    const logInButton = () => {
        if (login == true) {
            return (
                <div>
                    <button className=' bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-full p-1 '>Logout</button>
                </div>
            )
        }
    }

    return (
        <div className="flex-box">
            <NavContainer>
                <nav className="w-full relative z-40 flex items-center">
                    <div className="w-full top-0 left-0 bg-white h-[50px] absolute z-10 md:h-[90px]">
                        <div className="flex  items-center  pt-1">
                            <div className="flex items-center">
                                <Link to="home">
                                    <img
                                        src={logo}
                                        className="w-24 h-8 ml-2 order-1 cursor-pointer md:w-32 md:h-14"
                                        alt="logo" />
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
                                            <li>
                                                <Link >
                                                    <p>Cart</p>
                                                </Link>
                                            </li>
                                            {logInButton()}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </NavContainer>
            <BgContainer >
                <div className='mt-26'>
                    <div >
                        <BgImg src={bg} className='static'></BgImg>
                    </div>
                    <div className='static ml-16 ' >
                        <LogoImg src={accountLogo} className='border-green-500' ></LogoImg>
                    </div>
                </div>
                <div className='mr-16 ml-16 mt-12'>
                    <div className='text-5xl'>{user.username}</div>
                    <div className="flex mt-10">
                        <div className='truncat'>Address: {user.address}</div>
                        <div className='ml-6 text-slate-500'>Joined {new Date(user.createdAt).toLocaleString("en-US",
                            {
                                month: "short",
                                day: "2-digit",
                                year: "numeric",
                            })}</div>
                    </div>
                    <div className='mt-10 flex gap-5 font-bold text-slate-600 text-xl underline'>
                        <div>
                            <div>Collected</div>
                        </div>
                        <div>Create</div>
                    </div>
                    <DisplayBox className=' mt-6 p-fit border-2 rounded'>
                        No items to display
                    </DisplayBox>
                </div>
            </BgContainer>
        </div>
    )
}