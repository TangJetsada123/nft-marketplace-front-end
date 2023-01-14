import img10 from '../../../assets/images/img-10.jpg'
import img11 from '../../../assets/images/img-11.jpg'
import img12 from '../../../assets/images/img-12.jpg'
import img13 from '../../../assets/images/img-13.jpg'
import React from 'react'

const BlogSection = () => {
    return (
        <div>
            <div className='mt-10'>
                <div className='font-bold text-4xl mb-1'>NFT 101</div>
                <div>Get comfortable with the basic blog</div>
            </div>
            <div >
                <div className='mt-12 flex gap-12'>
                    <div className='border-2  rounded-lg shadow-2xl transform motion-safe:hover:scale-110 '>
                        <img src={img10} alt='' className='w-auto rounded-t-lg'></img>
                        <div className='ml-6 mt-6 mb-6 font-bold text-2xl'>What is an NFT?</div>
                        <linK><a href='https://opensea.io/learn/what-are-nfts'></a></linK>
                    </div>
                    <div className='border-2  rounded-lg shadow-2xl transform motion-safe:hover:scale-110'>
                        <img src={img11} alt='' className='w-auto rounded-t-lg'></img>
                        <div className='ml-6 mt-6 mb-6 font-bold text-2xl'>What is a crypto wallet?</div>
                        <linK></linK>
                    </div>
                    <div className='border-2  rounded-lg shadow-2xl transform motion-safe:hover:scale-110'>
                        <img src={img12} alt='' className='w-auto rounded-t-lg'></img>
                        <div className='ml-6 mt-6 mb-6 font-bold text-2xl'>What are blockchain gas fees?</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogSection;
