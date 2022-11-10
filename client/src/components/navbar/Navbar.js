import { useState } from 'react';
import { Link } from 'react-router-dom'
import './Navbar.css'
import Luigi from '../../assets/images/Luigi_fireball.png'
import { useAuthContext } from '../../hooks/useAuthContext';

const Navbar = () => {
    const { user } = useAuthContext
    const [isMobile, setMobile] = useState(false);

    const checkClick = () => {
        setMobile(!isMobile)
    }

    return (
        <header>
            <div className='nav-container'>
                <div className ='navbar-logo'>
                    <Link to='/' ><img className='luigi_8bit' src={Luigi} alt='8-bit Luigi' width='25' height='35'/><h1>Husain Haq</h1></Link>
                </div>
                <div className={isMobile ?  "responsive" : "links_"}>
                    <ul>
                        <li className='nav-link'><Link to='/about'>About</Link></li>
                        <li className='nav-link'><a href='https://github.com/HussainHaq' target= 'blank'>Github</a></li>
                        <li className='nav-link'><Link to='/projects'>Projects</Link></li>                        
                        { !user && (
                            <li className='nav-link'><Link to='/login'><button>login</button></Link></li>
                        )}
                    </ul>
                </div>
                <a className='icon' onClick={checkClick}><i class="fa fa-bars"></i></a>
            </div>
        </header>
    ) 
}

export default Navbar