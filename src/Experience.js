import React from "react";
import {Link} from 'react-router-dom';
import ni from './static/ni.jpg';
import ca from './static/ca.gif';
import fa from './static/fa.jfif';
import lt from './static/lt.jpg';
const Experience = () => {
    return ( 

        <>
         <nav className="navbar">
<li>
<Link to = "/">Home</Link>
<Link to = "/education">Education</Link>
<Link to="/experience">Experience</Link>                 
<Link to = "/skill">Projects</Link>

</li>

<h1>My Experience </h1>
</nav>
      
<div className="exp">
    
            <div className="news">

            <img src = {ni} alt="news channel logo"  />
                <h1>News1 India, Noida</h1>
                <h2>News Input Desk</h2>
                <h3>Internee</h3>
                <h4>June, 2017 - August,2017</h4>
                <br/>
                
                
            </div>

            <div className="social">
            <img src = {ca} alt="social media"  />
                <h1>MoS for Civil Aviation, India</h1>
                <h2>Hazaribagh, Jharkhand</h2>
                <h3>Social Media Manager</h3>
                <h4>May, 2018 - July,2019</h4>
                <br/>
              
            </div>

           <div className="cabinet">
            <img src = {fa} alt="cabinet ministry"  />
                <h1>Cabinet Minister, Haryana </h1>
                <h2>Jind, Haryana</h2>
                <h3>Campaign Manager</h3>
                <h4>August, 2019 - October,2019</h4>
                <br/>
               
            </div>

            <div className="lt">

                <img src = {lt} alt="leadtech logo" />
                <h1>Leadtech Political Consulting Pvt. Ltd.</h1>
                <h2>Gurgaon, Haryana</h2>
                <h3>Marketing & Campaign Manager</h3>
                <h4>November, 2019 - March, 2020</h4>
            </div>

            </div>

            <div className="footer">
        <a href= "https://wa.me/+919693028953">Copyright &copy; myportfoliowebsite.com</a>
        </div>

        </>
     );
}
 
export default Experience;