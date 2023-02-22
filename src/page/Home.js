import '../components/title'
import React from 'react'
import Title from '../components/title'
import Tranfer from '../components/ui/tranfer'
import BrowseCategory from '../components/ui/browse-category/browse-category'
import Trend from '../components/ui/trend/trend'
import Navbar from '../components/navbar'

export const Home = () => {
    return (
        <div>
            <div className='mr-16 ml-16 mb-10'>
                <Navbar />
                <Title />
                <Trend/>
                <Tranfer />
                <BrowseCategory />
            </div>
        </div>
    );
}


