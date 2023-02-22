import axios from 'axios'
import NFT_CARD from '../nft-card/nft-card'
import { useState, useEffect } from 'react'

const Trend = () => {
    let [asset, setAsset] = useState([])
    const [filterType, setFilterType] = useState(JSON.stringify({ name: 'DESC' }));

    useEffect(() => {
        const fetchData = async () => {
            axios
                .get(`https://nft-marketplace-service-production.up.railway.app/api/asset/?sort=${filterType}`)
                .then(
                    response => setAsset(response.data.data))
        };
        fetchData();
    }, [filterType])


    
    return (
        <div>
            <div className="flex font-bold text-3xl gap-8 mt-3">
                <div className="underline">
                    <button>
                        Trend
                    </button>
                </div>
            </div>
            <div className="mt-2 p-4">
                <div className="mt-6 grid grid-cols-4">
                    {asset.slice(0,8).map((item) => (
                        <NFT_CARD
                            picture={item.image}
                            pictureName={item.name}
                            price={item.price}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Trend;