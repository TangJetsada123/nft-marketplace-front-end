import React from "react";
import styled from "styled-components";
import { FaEthereum } from 'react-icons/fa'
import { useItemsStore } from "../nft-card/shopping-cart/cart";
import { HiCheckBadge } from 'react-icons/hi2'
import { useNavigate } from "react-router-dom";

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
  id,
  picture,
  pictureName,
  price
}) => {
  const navigate = useNavigate()
  const { items, setItem } = useItemsStore()
  const data = {
    id,
    picture,
    pictureName,
    price
  }

  const onClick = async () => {
    const a = [{
      "id": id,
      "price": price,
      "picture": picture,
      "pictureName": pictureName
    }]
    await setItem(a)
  }

  const setAsset = (id) => {
    navigate(`/asset`,{state: {assetId: id}})
  }

  return (
    <div>
      <CardLayout className="flex flex-col justify-center flex-wrap mb-2  transform motion-safe:hover:-translate-y-6" >
        <CardContainer className="mb-3">
          <ImageLayOut className="flex justify-center w-[full] h-[242px]" onClick={() => setAsset(id)}>
            <img src={picture} alt="" className="rounded-md w-full h-full"></img>
          </ImageLayOut>
          <div className="inline-box h-full">
            <div className="flex flex-col justify-center">
              <div className="flex justify-center text-19 md:text-22 text-neutral-800 font-semibold mt-2">{pictureName} <HiCheckBadge size={25} className="fill-blue-500" /></div>
              <div className="flex justify-center text-neutral-800 font-semibold mt-2 gap-1">
                <FaEthereum />{price} ETH
              </div>
            </div>
            <div className="flex justify-center mt-1">
              <button className=" text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-3 py-1.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={onClick}
              >Add to cart</button>
            </div>
          </div>
        </CardContainer>
      </CardLayout>
    </div>
    
  );
};
export default NFT_CARD;
