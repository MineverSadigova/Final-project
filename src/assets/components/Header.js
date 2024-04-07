import React from 'react'
import logo from '../icon/header/Frame.png'
import liine from '../icon/header/Line64.png'
const Header = () => {
    return (
        <div>
            <nav className="header-common">
           
                <div className="header-logo-pr">
                <a href="/"><img src={logo} alt="Logo" /></a>
                </div>
                <ul className="header-links-pr">
                    <li><a href="/about">HAQQIMIZDA</a></li>
                    <li><a href="/products">MƏHSULLAR</a></li>
                    <li><a href="/lahiye">LAYİHƏLƏR</a></li>
                    <li><a href="/stability">DAYANIQLILIQ</a></li>
                    <li><a href="/contact">ƏLAQƏ</a></li>
                </ul>

                <div className="header-languages-pr">
                    <ul>
                        <li>
                            <a href="#">Az</a>
                            <img src={liine} />
                        </li>
                        <li >
                            <a className='link-a' href="#">Ru</a>
                            <img src={liine} />
                        </li>
                        <li>
                            <a  className='link-a' href="#">En</a>
                            <img src={liine} />
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Header