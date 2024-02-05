import React, { useState } from "react"
import { Link } from "react-router-dom"
import Head from './Head'
import './Header.css'

export const Header = () => {
    const [click, setClick] = useState(false)
    return (
        <>
            <Head />
            <header>
                <nav className='flexSB' >
                    <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/courses'>All Courses</Link>
                        </li>
                        <li>
                            <Link to='/about'>About</Link>
                        </li>
                        <li>
                            <Link to='/blog'>Blog</Link>
                        </li>
                       
                        <li>
                            <Link to='/journal'>Service</Link>
                        </li>
                        <li>
                            <Link to='/contact'>Contact</Link>
                        </li>
                    </ul>

                    <div className='start'>
                        <div className='button' style={{ fontSize: "18px" }} >GET CERTIFICATE</div>
                    </div>
                    <button style={{ paddingTop: "12px" }} className='toggle' onClick={() => setClick(!click)}>
                        {click ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
                       
                        
                    </button>
                </nav>
            </header>
        </>
    )
}

export default Header;
