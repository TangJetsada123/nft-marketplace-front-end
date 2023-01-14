import React, { useEffect, useState } from "react";
import axios from 'axios'
import styled from "styled-components";
const ImageLayOut = styled.div`
    width: 20px;
    height: 234px;
    border: 1px solid #F6F5F5;
    /* background: #F6F5F5;
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.1);
    border-radius: 16px; */
`
const Collection_CARD = () => {
    let [asset, setAsset] = useState([])

    useEffect(() => {
        axios
            .get("http://localhost:3000/api/collection")
            .then(
                response => setAsset(response.data))
    }, [])
    return (
        <div>
            {asset.data && asset.data?.slice(0, 8).map((item) => (
                <div className="flex mt-5 rounded-lg scale-100 hover:scale-110 ease-in duration-100 shadow-2xl">
                    <ImageLayOut>
                        <img src={item.banner_path} alt="" className="rounded-lg "></img>
                    </ImageLayOut>
                    <div className="flex-box  p-2.5  rounded-lg border-2 text-lg font-semibold">
                        <div >{item.name}</div>
                        <div className="flex">
                            <div>{item.price} ETH</div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
export default Collection_CARD;
