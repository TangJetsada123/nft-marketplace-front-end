import img22 from '../assets/images/img-23.png'
import img23 from '../assets/images/img-24.png'
import img13 from '../assets/images/img-25.png'
import React from 'react'
import BlogSection from '../components/ui/blog-section/blog-section';

const Blog = () => {
    return (
        <div className='mt-24 ml-16 mr-16'>
           <BlogSection/>
           <div className='mt-12'>
                <div className='font-bold text-4xl mb-1'>Intro to Web3</div>
                <div>Learn more aboute web3 concepts</div>
                <div className='mt-12 flex gap-12'>
                    <div className='border-2  rounded-lg shadow-2xl transform motion-safe:hover:scale-110'>
                        <img src={img13} alt='' className='w-auto rounded-t-lg'></img>
                        <div className='ml-6 mt-6 mb-6 font-bold text-2xl'>What is web3?</div>
                        <linK><a href='https://opensea.io/learn/what-are-nfts'></a></linK>
                    </div>
                    <div className='border-2  rounded-lg shadow-2xl transform motion-safe:hover:scale-110'>
                        <img src={img22} alt='' className='w-auto rounded-t-lg'></img>
                        <div className='ml-6 mt-6 mb-6 font-bold text-2xl'>What is cryptocurrency?</div>
                        <linK></linK>
                    </div>
                    <div className='border-2  rounded-lg shadow-2xl transform motion-safe:hover:scale-110'>
                        <img src={img23} alt='' className='w-auto rounded-t-lg'></img>
                        <div className='ml-6 mt-6 mb-6 font-bold text-2xl'>What is a crypto wallet?</div>
                        <linK></linK>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Blog;
