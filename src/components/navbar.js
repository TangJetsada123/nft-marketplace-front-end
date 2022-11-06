import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import "./navbar.css"
function Navbar() {
    return (
        <nav className="w-full relative z-40 flex items-center">
            <div className="w-full top-0 left-0 bg-white h-[50px] absolute z-10 md:h-[90px]">
                <div className="flex justify-between items-center px-4 md:my-4">
                    <div className="flex items-center">
                        <Link to="home">
                            <img
                                src={logo}
                                className="w-24 h-8 ml-2 order-1 cursor-pointer md:w-32 md:h-14"
                                alt="logo"
                            />
                        </Link>
                        <div className="lg:border-l-[1.5px] lg:border-[#D9D9D9] order-2 lg:mx-2 h-12">
                            <div className="hidden items-center order-3 lg:flex md:w-auto">
                                <ul className="flex flex-col py-3 mx-4 lg:flex-row lg:space-x-8 lg:mt-0 lg:text-nav">
                                    <li>
                                        <Link to="/market">
                                            Expore
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/create">
                                            Create
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/blog">
                                            Blog
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/contact">
                                            Contact
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
