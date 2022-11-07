import '../components/title'
import React from 'react'
import Title from '../components/title'
import Tranfer from '../components/ui/tranfer'
import BlogSection from '../components/ui/blog-section/blog-section'
import BrowseCategory from '../components/ui/browse-category/browse-category'

const Home = () => {
    return (
        <div>
            <div className='mr-16 ml-16  mb-10'>
                <Title />
                <Tranfer />
                <BlogSection />
                <BrowseCategory />
            </div>
        </div>
    );
}

export default Home;
