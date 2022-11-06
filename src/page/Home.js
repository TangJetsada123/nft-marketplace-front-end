import './Title.css'
import React from 'react'
import Title from '../page/Title'
import Tranfer from '../components/ui/tranfer'
import Footer from '../components/footer'
const Home = () => {
    return (
        <div>
            <div className='mr-80 ml-96 mb-10'>
                <Title />
                <Tranfer />
            </div>
        </div>
    );
}

export default Home;
