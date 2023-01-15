import React, { useEffect, useState } from "react";
import axios from 'axios'
import styled from "styled-components";
import { FaEthereum } from 'react-icons/fa'


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

const NFT_CARD = ({
    picture,
    pictureName,
    price
}) => {
    return (
        <div>
            {/* {asset.data?.map((item) => ( */}
                <CardLayout className="flex flex-col justify-center flex-wrap">
                    <CardContainer className="mb-3">
                        <ImageLayOut className="flex justify-center pt-2 pb-[7px] ">
                            <img src={picture} alt="" className="rounded-md w-full h-[162px] md:w-[205.93px] md:h-[206.94px] lg:w-[207px] lg:h-[207px] 2xl:w-[248px] 2xl:h-[248px]"></img>
                        </ImageLayOut>
                        <div className="flex flex-col justify-center">
                            <div className="flex justify-center text-19 md:text-22 text-neutral-800 font-semibold mt-2">{pictureName}</div>
                            <div className="flex justify-center text-neutral-800 font-semibold mt-2 gap-1">
                                <FaEthereum />{price} ETH
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <button className=" text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</button>
                        </div>
                    </CardContainer>
                </CardLayout>
            {/* ))} */}
        </div>
    );
};
export default NFT_CARD;
