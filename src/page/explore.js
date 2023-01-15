import styled from "styled-components";
import Collection_CARD from "../components/ui/nft-card/collection-card";

const GenreDiv = styled.div`
    color: #444444;
`


export const Explore = () => {
    return (
        <div className="mt-32 ml-16">
            <div className="flex-box">
                <div className="font-bold text-5xl mb-20">Explore Collections</div>
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
                <div>
                    {Collection_CARD()}
                </div>
            </div>
        </div>
    );
}
