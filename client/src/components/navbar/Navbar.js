import { useState } from 'react';
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {

    const [isMobile, setMobile] = useState(false);

    const checkClick = () => {
        setMobile(!isMobile)
    }

    return (
        <header>
            <div className='nav-container'>
                <div className ='navbar-logo'>
                    <Link to='/' ><h1>Husain Haq</h1></Link>
                </div>
                <div className={isMobile ?  "links_" : "links_ responsive"}>
                    <ul>
                        <li className='nav-link'><Link to='/about'>About</Link></li>
                        <li className='nav-link'><a href='https://github.com/HussainHaq' target= 'blank'>Github</a></li>
                        <li className='nav-link'><Link to='/'>Projects</Link></li>                        
                        <li className='nav-link'><button>login</button></li>
                    </ul>
                </div>
                <a className='icon' onClick={checkClick}><i class="fa fa-bars"></i></a>
            </div>
        </header>
    )
}

export default Navbar
