import '../components/title'
import React from 'react'
import Title from '../components/title'
import Tranfer from '../components/ui/tranfer'
import BlogSection from '../components/ui/blog-section/blog-section'
import BrowseCategory from '../components/ui/browse-category/browse-category'
import Trend from '../components/ui/trend/trend'

export const Home = () => {
    return (
        <div>
            <div className='mr-16 ml-16 mb-10'>
                <Title />
                <Trend/>
                <Tranfer />
                <BlogSection />
                <BrowseCategory />
            </div>
        </div>
    );
}


