import React, { useEffect, useState } from "react";
import axios from 'axios'
import styled from "styled-components";
import { useLocation, useNavigate } from 'react-router-dom';
import {
    MdAccessTime,
    MdLocalOffer,
    MdOutlineDescription,
} from 'react-icons/md';
import { IoIosArrowBack } from 'react-icons/io';
import moment from 'moment';
import { FiEye } from 'react-icons/fi';


const ImageLayOut = styled.div`
    display: flex-box;
    border: 1px solid #F6F5F5;
    border-radius: 16px;
`

const CardLayout = styled.div`
    width: 20vw;
    
`
const CardContainer = styled.div`
    background: #F6F5F5;
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.1);
`
const Asset_Card = () => {
    const [asset, setAsset] = useState([])
    const [price, setPrice] = useState([])
    const [usd, setUsd] = useState(0)
    const id = useLocation()
    const navigate = useNavigate()



    useEffect(() => {
        const getAsset = () => {
            axios.get(`https://nft-marketplace-service-production.up.railway.app/api/asset/${id.state.assetId}`)
                .then(
                    response => setAsset(response.data))
        }
        const getUsd = () => {
            axios.get('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd')
                .then(
                    res => setPrice(res.data.ethereum.usd)
                )
        }
        getAsset()
        getUsd()
        setUsd(asset.price * price)
    }, [])
    const handleBack = () => {
        navigate("/market", { replace: true })
    }


    return (
        <div>
            <div className="border-b border-neutral-200 pt-4 pb-10 md:pb-16 mt-6">
                <div className="mx-5 md:my-12">
                    <div
                        className="flex items-center my-2 cursor-pointer mx-auto" onClick={handleBack}>
                        <IoIosArrowBack className="w-4 h-4 text-neutral-600 lg:w-5 lg:h-5" />
                        <span className="text-neutral-500 text-14 lg:text-xl lg:mx-2">
                            Back to market
                        </span>
                    </div>
                    <div className="w-full max-h-max mt-3 bg-white mx-auto py-1.5 text-600">
                        <div className="lg:flex">
                            <div className="flex justify-center w-[500px] h-[500px] p-4  items-center border border-b-0 lg:border border-text-400 rounded-tl-xl rounded-tr-xl lg:rounded-xl">
                                <img
                                    src={asset?.image}
                                    alt=""
                                    className=" mx-2 my-3 w-full h-full rounded-xl"
                                />
                            </div>
                            <div className="lg:w-full lg:mx-4 lg:flex lg:flex-col lg:justify-between">
                                <div className="px-2 flex flex-row lg:flex-col lg:items-start items-center justify-between w-full py-2 border border-t-0 lg:border-0 border-text-400">
                                    <p className="text-600 font-bold text-lg md:text-3xl">
                                        {asset?.name}
                                    </p>
                                    <div className="flex items-center">
                                        <FiEye />
                                        <p className="mx-1 text-sm md:text-xl lg:text-base">
                                            312 views
                                        </p>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <div className="flex flex-col-reverse">
                                        <div className="px-2 flex items-center w-full max-h-fit text-sm md:text-base lg:text-lg py-1.5 md:py-2 border border-t-0 lg:border  lg:rounded-tl-xl lg:rounded-tr-xl border-text-400">
                                            <MdAccessTime className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
                                            <div className="mx-2">
                                                Sale ends
                                                <span className="ml-1">
                                                    {moment(asset?.updatedAt).format('LLL')}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="px-2 flex items-center w-full max-h-fit text-sm md:text-base lg:text-lg py-1.5 md:py-2 border lg:rounded-xl lg:border border-text-400 my-4">
                                            <MdOutlineDescription className="w-[26px] h-[26px] md:w-5 md:h-5 lg:w-6 lg:h-6 block lg:hidden" />
                                            <div className="mx-2 lg:mb-24 lg:mx-0">
                                                <p className="lg:font-bold lg:text-[22px]">
                                                    Description
                                                </p>
                                                <span className="ml-1">{asset.description}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="border border-t-0 border-text-400 rounded-bl-xl rounded-br-xl lg:rounded-tl-0 lg:rounded-tr-0">
                                        <div className="p-3">
                                            <p className="text-700  text-sm md:text-16 lg:text-lg">
                                                Current Price
                                            </p>
                                            <div className="flex gap-2">
                                                <span className="text-700 text-18 md:text-2xl lg:text-3xl font-bold">
                                                    {asset?.price}  ETH
                                                </span>
                                                <span className="text-400 text-15 mt-2">
                                                    $ {usd.toFixed(2)}
                                                </span>
                                            </div>

                                            <div className="lg:flex lg:justify-between lg:w-full lg:gap-x-4 lg:text-lg">
                                                <button className="bg-primary w-full py-2.5 md:py-3 lg:py-4 rounded-[10px] text-white my-4">
                                                    Buy
                                                </button>
                                                <button className="flex items-center justify-center border border-primary w-full py-2.5 md:py-3 lg:py-4 rounded-[10px] text-primary my-4">
                                                    <MdLocalOffer className="mx-2" />
                                                    <span>Make offer</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Asset_Card;
