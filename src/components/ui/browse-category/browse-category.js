import img14 from '../../../assets/images/img-14.jpg'
import img15 from '../../../assets/images/img-15.jpg'
import img21 from '../../../assets/images/img-21.jpg'
import img22 from '../../../assets/images/img-22.jpg'
import img17 from '../../../assets/images/img-17.jpg'
import img19 from '../../../assets/images/img-19.jpg'
import React from 'react'

const BrowseCategory = () => {
    return (
        <div className='mt-10'>
          <div className='font-bold text-4xl'>Browse by category</div>
          <div >
                <div className='mt-12 flex gap-12'>
                    <div className='border-2  rounded-lg shadow-2xl text-center'>
                        <img src={img14} alt='' className='w-auto rounded-t-lg'></img>
                        <div className='ml-6 mt-6 mb-6 font-bold text-2xl'>Art</div>
                    </div>
                    <div className='border-2  rounded-lg shadow-2xl text-center'>
                        <img src={img22} alt='' className='w-auto rounded-t-lg'></img>
                        <div className='ml-6 mt-6 mb-6 font-bold text-2xl'>Music</div>
                    </div>
                    <div className='border-2  rounded-lg shadow-2xl text-center'>
                        <img src={img19} alt='' className='w-auto rounded-t-lg'></img>
                        <div className='ml-6 mt-6 mb-6 font-bold text-2xl'>Trading Cards</div>
                    </div>
                </div>
                <div className='mt-12 flex gap-12'>
                    <div className='border-2  rounded-lg shadow-2xl text-center'>
                        <img src={img15} alt='' className='w-auto rounded-t-lg'></img>
                        <div className='ml-6 mt-6 mb-6 font-bold text-2xl'>Collectibles</div>
                    </div>
                    <div className='border-2  rounded-lg shadow-2xl text-center'>
                        <img src={img21} alt='' className='w-auto rounded-t-lg'></img>
                        <div className='ml-6 mt-6 mb-6 font-bold text-2xl'>Photography</div>
                    </div>
                    <div className='border-2  rounded-lg shadow-2xl text-center'>
                        <img src={img17} alt='' className='w-auto rounded-t-lg'></img>
                        <div className='ml-6 mt-6 mb-6 font-bold text-2xl'>Ulitily</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BrowseCategory;
