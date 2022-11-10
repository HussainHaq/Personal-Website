import { useState, useEffect } from "react";
import './pages.css'
import MyImage from '../../assets/images/My_Pic.jpg';
import { motion } from "framer-motion";
import AOS from "aos";

function About() {

    useEffect(() => {
        return () => {
            AOS.init();
        };
    }, []);

    return (
        <section className="About">
            <div className="header">
                <div className="marquee">
                    <h2>I am HUSAIN HAQ and here is everything to know about me in my career as a software developer</h2>
                </div>
            </div>
            <div className="about_main">
                <div className="about_desc">
                    <div className="my_pfp d-flex">
                        <img src={MyImage} />
                        <p>Completed BS in computer science with significant experience in C++, Java, Html/CSS, Flutter, Dart, React, Flask, and Firebase cloud platform. Skilled programmer with leadership qualities with good programming logic and understanding. Have full stack coding knowledge and interested in working in mobile apps and web development field. Looking to be a part of a company to have a large impact in it and help it grow with my knowledge as developer.</p>
                    </div>
                    <div className="contact_sec">
                        <div className="contact_info">
                            <p>Phone#: 224-622-2962</p>
                            <p>Email: haqhusain22@gmail.com</p>
                            <p>Location: Chicago Area, IL</p>
                        </div>
                        <div className="links_abt">
                            <h4>Links</h4>
                            <a href='https://www.linkedin.com/in/husain-haq/' target="blank">Linkedin</a>
                            <a href='https://github.com/HussainHaq' target="blank">GitHub</a>
                        </div>  
                    </div>
                </div>
            </div>
            <div className="edu_sec row container justify-content-center">
                <div className="col card-edu barrington">
                    <h3>Barrington Highschool</h3>
                    <h4>Diploma: GED</h4>
                    <h4>Graduate of 2017</h4>
                </div>
                <div className="col card-edu harper">
                    <h3>Harper College</h3>
                    <h4>Diploma: Associates in Sciences</h4>
                    <h4>Year: 2017 - 2020</h4>
                </div>
                <div className="col card-edu niu">
                    <h3>Northern Illinois University</h3>
                    <h4>Diploma: Bachelor's in CS</h4>
                    <h4>Year: 2020 - 2022</h4>
                </div>
            </div>
            <div className='tech_sec'>
                <motion.h2>Technologies I Use</motion.h2>
                <div className="techs">
                    <div className="techs_1">
                        <h4>Java</h4>
                        <h4>JavaScript</h4>
                        <h4>C++</h4>
                        <h4>Node.js</h4>
                        <h4>React.js</h4>
                        <h4>Flask.py</h4>
                    </div>
                    <div className="techs_2">
                        <h4>Python</h4>
                        <h4>Google Firebase</h4>
                        <h4>AWS</h4>
                        <h4>SQL</h4>
                        <h4>NoSQL</h4>
                        <h4>MongoDB</h4>
                    </div>
                    
                </div>
            </div>
            <div className="experiences container mt-5 ">
                <div className="title py-3">
                    <h2>Experiences</h2>
                </div>
                <div className="Rectify">
                    <h3>Rectify</h3>
                    <p>Rectify is a software development company that currently creates websites and applications. The company is a start up and was created in spring of 2020. Projects vary from front-end to back-end or even just helping clients start launching their company. Rectify clients include NFT start ups, Stock analysis, Merch stores, and stock and forex traders</p>
                    <h4>My Task:</h4>
                    <p>At Rectify my task was to build the client's desired systems or just help the client with completeing or building their projects. This included websites, apps, and api intergration. The clients allowed me to choose the tech if the project was from scratch and I'd give them a break down of the options. Some of the work already had the tech selected and I just had to help them accomplish their task. Tech I used are: React.js, Google Cloud platform, Firebase, Flask.py, Node.js, Html, Css, and Shopify. </p>
                </div>
            </div>
        </section>
    );
}


export default About;