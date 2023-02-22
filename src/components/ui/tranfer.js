import NFT_CARD from "./nft-card/nft-card";
import { Link } from 'react-router-dom'
import "./tranfer.css";
import React, { useState, useEffect } from "react";
import axios from 'axios'

const Tranfer = () => {
  let [asset, setAsset] = useState([])
  const filter = JSON.stringify({ price: 'DESC' })
  useEffect(() => {
    const fetchData = async () => {
      axios
        .get(`https://nft-marketplace-service-production.up.railway.app/api/asset/?sort=${filter}`)
        .then(
          response => setAsset(response.data.data))
    };
    fetchData();
  }, [])

  return (
    <div>
      <div className="flex-box mt-20">
        <div className="flex justify-between">
          <div className="font-bold text-4xl ">Top NFT</div>
          <div className="font-bold ">
            <Link to='/market'><button className="underline text-lg mr-10">
              Explore More
            </button></Link>
          </div>
        </div>
        <div className="mt-6 grid grid-cols-4 ">
          {asset.slice(0, 4).map((item) => (
            <NFT_CARD
              picture={item.image}
              pictureName={item.name}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tranfer;
