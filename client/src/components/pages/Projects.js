import {useState} from 'react'
import './pages.css'
import { motion } from 'framer-motion'

const Projects = () =>{
    const [style, setStyle] = useState({display: 'none'})

    return(
        <section className='pt-5'>
            <div className="container proj_cont">
                <div className='websites'>
                    <h1> Websites</h1>    
                    <div className='web_project'>
                        <motion.div className='small_streets'>
                            <div className='small_card' onMouseEnter={e => {
                                setStyle({display: 'block'});
                            }}
                            onMouseLeave={e => {
                                setStyle({display: 'none'})
                            }}>
                                <img src="https://smallstreetbets-8b147.web.app/assets/imgs/profile.png" height="100" width="100" alt='ssb' />
                                <a href="https://smallstreetbets-8b147.web.app/" target="blank_">smallstreetbets</a>
                            </div>
                            <div className='small_hover' style={style}>
                                <p>Small streets bets is a stock analysis company that runs a discord server and YouTube channel for sharing free stock calls. </p>
                                <h4>Tech:</h4>
                                <p>Html, CSS, JS, Firebase</p>
                            </div>
                        </motion.div>        
                    </div>
                    <h1> Apps </h1>

                </div>
            </div>
        </section>
    )
}

export default Projects