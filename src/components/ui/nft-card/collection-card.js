import React, { useEffect, useState } from "react";
import axios from 'axios'
import styled from "styled-components";
const ImageLayOut = styled.div`
    border: 1px solid #F6F5F5;
`
const Collection_CARD = () => {
    let [collection, setCollection] = useState([])

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/collection")
            .then(
                response => setCollection(response.data))
    }, [])
    return (
        <div>
            {collection.data && collection.data?.slice(0, 6).map((item) => (
                <div className="flex mt-5 rounded-lg hover:scale-110 ease-in duration-100 shadow-2xl">
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
