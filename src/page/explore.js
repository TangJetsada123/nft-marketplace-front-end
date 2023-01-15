import styled from "styled-components";
import React, { useEffect, useState } from "react";
import axios from 'axios'
// import Collection_CARD from "../components/ui/nft-card/collection-card";
import NFT_CARD from "../components/ui/nft-card/nft-card";
const GenreDiv = styled.div`
    color: #444444;
`


export const Explore = () => {
    let [asset, setAsset] = useState([])
    const [name, setName] = useState('');
    const [filterType, setFilterType] = useState(JSON.stringify({ name: 'ASC' }));

    useEffect(() => {
        const fetchData = async () => {
            axios
                .get(`http://localhost:8000/api/asset/?name=${name}&sort=${filterType}`)
                .then(
                    response => setAsset(response.data.data))
        };
        fetchData();
    }, [name, filterType])

    const valueSort = {
        nameASC: { name: 'ASC' },
        nameDESC: { name: 'DESC' },
        createdAtASC: { createdAt: 'ASC' },
        createdAtDESC: { createdAt: 'DESC' },
        priceASC: { price: 'ASC' },
        priceDESC: { price: 'DESC' },
    };

    return (
        <div className="mt-32 ml-16 mr-16">
            <div className="flex-box">
                <div className="font-bold text-5xl mb-3">Explore Collections</div>
                <div className="relative mb-3">
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
                        className="border rounded-md w-48 h-full shadow-lg py-2 px-4 ">
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
                <GenreDiv className="flex gap-5 font-bold">
                    <div ><button className="underline underline-offset-8">Trending</button></div>
                    <div><button >Top</button></div>
                    <div><button >Art</button></div>
                    <div><button >Collectibles</button></div>
                    <div><button >Domain Names</button></div>
                    <div><button >Music</button></div>
                    <div><button >Photography</button></div>
                    <div><button >Sports</button></div>
                    <div><button >Trading Cards</button></div>
                    <div><button >Utility</button></div>
                    <div><button >Virtual Worlds</button></div>
                </GenreDiv>
                <div className="mt-6 grid grid-cols-4">
                    {asset.map((item) => (
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
}
