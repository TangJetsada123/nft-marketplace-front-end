import heroImg from '../../src/assets/hero.jpg'
import './Title.css'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const TitleButton = styled.div`
    display: flex;
    gap: 20px;
    margin-top: 50px;
`
const TextDestc = styled.div`
    margin-top: 10px;
`
function Title() {
    return (
        <div className='flex mt-40 gap-24'>
            <div className="hero__content">
                <h2 >
                    Discover rare digital art and collect<br />
                    <span>sell extraordinary</span> NFTs
                </h2>
                <TextDestc>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Deleniti excepturi omnis neque <br />
                        adipisci sequi ullam unde in
                        minus quis quos.
                    </p>
                </TextDestc>
                <TitleButton>
                    <Link to="/market"><button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Expore</button>
                    </Link>
                    <Link to='/create'><button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create</button>
                    </Link>
                </TitleButton>
            </div>
            <div className="hero__img">
                <img src={heroImg} alt="" className="w-300 ml-12" />
            </div>
        </div>
    );
}

export default Title;
