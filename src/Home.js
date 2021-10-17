import React from "react";
import image from './static/dp.png';
import {Link} from 'react-router-dom';
import { GoMarkGithub } from "react-icons/go";
import { SiGmail } from "react-icons/si";
import { AiFillLinkedin } from "react-icons/ai";

const Home = () => {
    return ( 
    
        <>
        
            <nav className="navbar">

                <li>

                    <Link to = "/">Home</Link>
                    <Link to = "/education">Education</Link>
                    <Link to="/experience">Experience</Link>                 
                    <Link to = "/skill">Projects</Link>
                  

                </li>
        
            </nav>

            <div className="profile">

            <li>
                    <a href = "http://reeshav.anand@gmail.com"> <SiGmail size="2em"/> </a>
                    <a href = "http://linkedin.com/in/reeshav-anand-520205144"> <AiFillLinkedin size="2em"/> </a>
                    <a href = "https://github.com/reeshavanand"> <GoMarkGithub size="2em"/> </a>
            </li>

            </div>

            <div className="intro">
          
            <h1>Hello, I'm Reeshav</h1>
            <br/>
            <h2>Frontend Developer</h2>
            <br/>
            <p>
                Proficient Software Developer adept at utilizing Frontend
                developement skills to contribute to team projects and meet
                corporate objectives. Driven and proactive with proven history
                of going above and beyond to contribute to team objectives.
                Consistently acknowledged for contributing to process
                optimization by automating tasks for increased efficiency.
            </p>

            </div>



            <div className="display">

            <img src = {image} alt = "profile image" />

            </div>


        

        <div className="contact">
            
            <Link to = "contact">
                <button>Contact Me</button> 
            </Link>
            
        </div>

        <div className="footer">
        <a href= "https://wa.me/+919693028953">Copyright &copy; myportfoliowebsite.com</a>
        </div>

        </>
    );
}
 
export default Home;