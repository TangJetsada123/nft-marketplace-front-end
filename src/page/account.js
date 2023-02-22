import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import jwt_decode from 'jwt-decode'
import Navbar from '../components/navbar'
import { FaEthereum } from 'react-icons/fa'
import { IoCloseOutline } from 'react-icons/io5'

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
const DisplayBox = styled.div`
`

const ImageLayOut = styled.div`
    display: flex-box;
    border: 1px solid #F6F5F5;
    border-radius: 16px;
`

const CardContainer = styled.div`
    width: 200px;
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.1);
`

export const Account = () => {
    const [user, setUser] = useState([])
    const [item, setItem] = useState()
    const [arrItem, setArrItem] = useState([])
    const [sell, setSell] = useState(false)
    const [sellItem, setSellItem] = useState([])
    const [price, setPrice] = useState(0)
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [filterType, setFilterType] = useState(JSON.stringify({ name: 'ASC' }));
    const [status, setStatus] = useState('')
    const [storage, setStorage] = useState(false)

    const valueSort = {
        nameASC: { name: 'ASC' },
        nameDESC: { name: 'DESC' },
        createdAtASC: { createdAt: 'ASC' },
        createdAtDESC: { createdAt: 'DESC' },
        priceASC: { price: 'ASC' },
        priceDESC: { price: 'DESC' },
    };

    const handleMarket = () => {
        navigate('/market', { replace: true })
    }
    const handleSell = (item) => {
        setSellItem(item)
        setSell(true)
    }

    const sellSuccess = () => {
        const x = document.getElementById("sellinput").value
        const token = `Bearer ${JSON.parse(localStorage.getItem('token'|| 'Token'))}`
        const data = {
            "price": Number(x),
            "status": 'On Sale'
        }
        axios.put(`https://nft-marketplace-service-production.up.railway.app/api/asset/sell/${sellItem._id}`, data,
            {
                headers: {
                    Authorization: token
                }
            }
        ).then(() => {
            navigate('/market', { replace: true })
        })
    }

    const handleChange = (e) => {
        const x = document.getElementById("sellinput").value
        // setPrice(x)
    }
    const SellCom = (item) => {
        return (
            <form >
                <div className=" fixed inset-0 bg-slate-300 opacity-100">
                    <div className=" flex justify-center items-center object-center">
                        <div className='bg-white opacity-100 w-[373px] h-[100%]  rounded-xl '>
                            <div>
                                <div className='flex pt-[24px] pl-[24px] pr-[24px] justify-between'>
                                    <div className='font-bold text-xl'>
                                        Sell  Asset
                                    </div>
                                    <h2>
                                        <IoCloseOutline onClick={() => setSell(false)} />
                                    </h2>
                                </div>
                                <header className='flex border-[0.2px] w-full'></header>
                                <div className='flex-box justify-center p-[24px]'>
                                    <div className='flex  justify-center'>
                                        <ImageLayOut className=" pt-2 pb-[7px] mt-6">
                                            <img src={sellItem.image} alt="" className="rounded-md w-[180px] h-[160px] "></img>
                                        </ImageLayOut>
                                    </div>
                                    <div className="flex  justify-center text-19 md:text-22 text-neutral-800 font-semibold mt-2">{sellItem.name}</div>
                                    <div className='flex  justify-center'>
                                        <input type="number" id="sellinput" onChange={handleChange}></input> ETH
                                        <FaEthereum />
                                    </div>
                                </div>
                                <div className='pl-[24px] pr-[24px]'>
                                    <div className=' flex  justify-center  font-bold mb-4'>Total Price: ${price} ETH</div>
                                    <div className='rounded-xl text-center align-middle p-[18px] bg-[#2081e2] text-white font-bold text-lg mb-6' onClick={() => sellSuccess()} >Comfirm To Sell item</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>)
    }

    useEffect(() => {
        const token = localStorage.getItem('token');
        console.log(token)
        if (token) {
            setStorage(true)
            const user_info = jwt_decode(token)
            if (user_info) {
                axios.get(`https://nft-marketplace-service-production.up.railway.app/api/user/info/${user_info.sub}`)
                    .then((res) => {
                        setUser(res.data)
                    })

                const getItem = () => {
                    axios.get(`https://nft-marketplace-service-production.up.railway.app/api/asset?user_id=${user_info.sub}&sort=${filterType}&name=${name}&status=${status}`)
                        .then((res) => {
                            setItem(true)
                            setArrItem(res.data.data)
                        })
                }
                getItem();
            }
        }else{
            setStorage(false)
        }

    }, [name, filterType, status])

    const setCard = (item) => {
        navigate(`/asset`, { state: { assetId: item.id } })
    }
    const ShowItem = () => {
        return (<div className='grid grid-cols-6 gap-4'>
            {arrItem.map((item) => {
                return <div>
                    <CardContainer className="mb-3">
                        <ImageLayOut className="flex justify-center pt-2 pb-[7px] mt-6">
                            <img src={item.image} className="rounded-md w-[180px] h-[160px] scale-100 hover:scale-110 ease-in-out duration-500 " onClick={() => setCard(item)}></img>
                        </ImageLayOut>
                        <div className="flex flex-col justify-center">
                            <div className="flex justify-center text-19 md:text-22 text-neutral-800 font-semibold mt-2">{item.name}</div>
                            <div className="flex justify-center text-neutral-800 font-semibold mt-2 gap-1">
                                <FaEthereum />{item.price} ETH
                            </div>
                        </div>
                        <div className="flex justify-center mt-1">
                            <button className=" text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-3 py-1.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                onClick={() => handleSell(item)}>Add to Sell</button>
                        </div>
                    </CardContainer>
                </div>
            })}
        </div>)
    }

    return (
        <div>
            {storage ? (
                <div>
                    <div><Navbar /></div>
                    <BgContainer className='mb-10' >
                        <div className='mt-26'>
                            <div>
                                <BgImg src={user.banner_url} className='static'></BgImg>
                            </div>
                            <div className='static ml-16 ' >
                                <LogoImg src={user.profile_url} className='border-green-500' ></LogoImg>
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
                            <div className='mt-4'>
                                <div className='flex gap-4'>
                                    <div className='text-xl mb-2 font-bold' ><button onClick={() => setStatus('Owned')}>Collected</button></div>
                                    <div className='text-xl mb-2 font-bold' ><button onClick={() => setStatus('On%20Sale')}>Sell</button></div>
                                </div>
                                <div className="relative mb-3 flex">
                                    <form className=" basis-5/6 ">
                                        <div >
                                            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                                <svg
                                                    aria-hidden="true"
                                                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                                    ></path>
                                                </svg>
                                            </div>
                                            <input
                                                type="search"
                                                id="default-search"
                                                className="block text-xs font-bold px-5 shadow-lg leading-normal p-4 pl-10 w-full  text-gray-900  rounded-lg border border-gray-300 focus:ring-gray-500 focus:border-gray-500  dark:text-gray dark:focus:ring-gray-500 dark:focus:border-gray-500"
                                                placeholder="Search Asset"
                                                required
                                                onChange={(e) => {
                                                    setName(e.target.value.toLowerCase());
                                                }}
                                            />
                                        </div>
                                    </form>
                                    <select
                                        onChange={(e) => {
                                            setFilterType(e.target.value);
                                        }}
                                        className=" ml-8 border rounded-md w-48 h-[65px] shadow-lg py-2 px-4 ">
                                        <option value={JSON.stringify(valueSort.nameASC)}>sort</option>
                                        <option value={JSON.stringify(valueSort.nameASC)}>
                                            By A - Z
                                        </option>
                                        <option value={JSON.stringify(valueSort.nameDESC)}>
                                            By Z - A
                                        </option>
                                        <option value={JSON.stringify(valueSort.priceASC)}>
                                            Price low to high
                                        </option>
                                        <option value={JSON.stringify(valueSort.priceDESC)}>
                                            Price high to low
                                        </option>
                                        <option value={JSON.stringify(valueSort.createdAtASC)}>
                                            Newest
                                        </option>
                                        <option value={JSON.stringify(valueSort.createdAtDESC)}>
                                            Oldest
                                        </option>
                                    </select>
                                </div>
                                <DisplayBox className='flex  rounded-lg w-full h-full'>
                                    {arrItem.length != 0 ? (<ShowItem />) : <div>
                                        <div className='font-bold text-xl mt-20 mb-10'>No items found for this search</div>
                                        <button className='rounded-xl text-center w-[15%] p-[18px] bg-[#2081e2] text-white font-bold text-lg mb-6 ' onClick={() => handleMarket()}>Back to market</button></div>}
                                </DisplayBox>
                            </div>
                        </div>
                    </BgContainer >
                    <div>
                        {
                            sell ? (<div><SellCom /></div>) : null
                        }
                    </div>
                </div >
            ) : <div>
                <div className="flex items-center justify-center w-screen h-screen">
                    <div className="px-4 lg:py-12">
                        <div className="lg:gap-4 lg:flex">
                            <div className="flex flex-col items-center justify-center md:py-25 lg:py-32">
                                <h1 className="font-bold text-blue-600 text-9xl">404</h1>
                                <p className="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
                                    <span className="text-red-500">Oops!</span> Page not found
                                </p>
                                <p className="mb-6 text-center text-gray-500 md:text-lg">
                                    The page you’re looking for doesn’t exist.
                                </p>
                                <a
                                    href="/"
                                    className="px-6 py-2 text-sm font-semibold text-blue-800 bg-blue-100"
                                >
                                    Go home
                                </a>
                            </div>
                            <div className="mt-4">
                                <img
                                    src="https://aioseo.com/wp-content/uploads/2021/04/how-to-find-and-fix-404-errors-in-wordpress.png.webp"
                                    alt="img"
                                    className="object-cover w-full h-full"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>}
        </div>
    )
}