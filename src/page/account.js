import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'
import bg from '../assets/bg-2.png'
import styled from 'styled-components'

const BannerImage = styled.div`
    width: 1000px;
`
const Account = () => {
    const [user, setUser] = useState([])
    useEffect(() => {
        const token = localStorage.getItem('Token');
        axios.get('http://localhost:3000/api/auth/me', {
            headers: {
                Authorization: `Bearer ${JSON.parse(token)}`
            }
        }).then((res) => {
            setUser(res.data)
        })
    }, [])






    return (
        <div >
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
                                        <li>
                                            <Link >
                                                <p>Cart</p>
                                            </Link>
                                        </li>
                                    </ul>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <div className='flex-box mt-32'>
                <div>
                    <BannerImage>
                    <img src={bg}></img>
                    </BannerImage>
                </div>
                <div>logo Image</div>
                <div>{user.username}</div>
                <div>
                    <div>{user.address}</div>
                    <div>Joined {new Date(user.createdAt).toLocaleString("en-US",
                        {
                            month: "short",
                            day: "2-digit",
                            year: "numeric",
                        })}</div>
                </div>
                <div className='flex'>
                    <div>Collected</div>
                    <div>Create</div>
                </div>
            </div>
        </div>
    )
}
export default Account;