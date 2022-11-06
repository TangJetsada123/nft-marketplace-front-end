import NFT_CARD from "./nft-card/nft-card";
import { Link } from 'react-router-dom'
import "./tranfer.css";
import React from "react";

const Tranfer = () => {
  return (
    <div>
      <div className="flex-box mt-20">
        <div className="flex justify-between">
          <div className="font-bold">Expore NFT</div>
          <div className="font-bold ">
            <Link to='/market'><button className="underline">
              Explore More
            </button></Link>
          </div>
        </div>
        <div> 
             <NFT_CARD/>
        </div>
      </div>
    </div>
  );
};

export default Tranfer;
