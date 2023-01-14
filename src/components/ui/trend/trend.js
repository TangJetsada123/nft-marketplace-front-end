import Image1 from '../../../assets/images/bg.jpg'
import styled from 'styled-components'

const ImageFit = styled.img`
    width: 10vw;
    height:15vh;
`

const Trend = () => {
    return (
        <div>
            <div className="flex font-bold text-3xl gap-8 mt-3">
                <div className="underline">
                    Trend
                </div>
                <div className="underline">
                    Top
                </div>
            </div>
            <div className="mt-2 p-4">
                <div className="flex  text-xs font-normal text-slate-500 gap-96">
                    <div>COLLECTION</div>
                    <div>VOLUME</div>
                </div>
                <div className='flex-box'>
                    <div className="flex mt-4 gap-14">
                        <div>
                            <div>1</div>
                            <div className='mr-3'><ImageFit src={Image1}></ImageFit></div>
                            <div className='mr-3'>The Pendings</div>
                            <div>316 ETH</div>
                        </div>
                    </div>
                    <div className="flex mt-4 gap-14">
                        <div>
                            <div>1</div>
                            <div className='mr-3'><ImageFit src={Image1}></ImageFit></div>
                            <div className='mr-3'>The Pendings</div>
                            <div>316 ETH</div>
                        </div>
                    </div>
                    <div className="flex mt-4 gap-14">
                        <div>
                            <div>1</div>
                            <div className='mr-3'><ImageFit src={Image1}></ImageFit></div>
                            <div className='mr-3'>The Pendings</div>
                            <div>316 ETH</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Trend;