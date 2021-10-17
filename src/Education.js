import React from "react";
import {Link} from 'react-router-dom';
import gb from './static/gb.jpg';
import BSEB from './static/BSEB.jpg';
import bit from './static/bit.jpg';
import su from './static/Su.png';
import aaft from './static/aaft.jpg';

const Education = () => {
    return ( 
        <>
<nav className="navmenu">

<li>
<Link to = "/">Home</Link>
<Link to = "/education">Education</Link>
<Link to="/experience">Experience</Link>                 
<Link to = "/skill">Projects</Link>
</li>

<h1>My Education </h1>

</nav>

            
            <div className="matric">
                <img src = {gb} alt="primary school logo"  />
                <h1>Matriculation</h1>
                <h2>Gyan Bharti School, Nawada</h2>
                <h3>87.40%</h3>
                <h4>2010</h4>
                <br/>
            
            </div>

            <div className="intermediate">

            <img src = {BSEB} alt="primary school logo"  />
                <h1>Intermediate</h1>
                <h2>RLSY College, Nawada</h2>
                <h3>73.20%</h3>
                <h4>2013</h4>
                <br/>
            

            </div>

            <div className="graduation">

            <img src = {bit} alt="primary school logo"  />
                <h1>Graduation</h1>
                <h2>Birla Institute of Technology Mesra, Ranchi</h2>
                <h3>7.35 CGPA</h3>
                <h4>2016</h4>
                <br/>
              
            </div>

        

            <div className="master">

            <img src = {su} alt="primary school logo"  />
                <h1>Post Graduation</h1>
                <h2>Shobhit University, Gangoh</h2>
                <h3>8.04 CGPA</h3>
                <h4>2018</h4>
                <br/>
            


            </div>

            <div className="diploma">

            <img src = {aaft} alt="primary school logo"  />
                <h1>Post Graduation in Diploma</h1>
                <h2>Asian Academy of Media Studies, Noida</h2>
                <h3>Journalism</h3>
                <h4>2018</h4>
                <br/>
          


            </div>

            <div className="footer-pages">
        <a href= "https://wa.me/+919693028953">Copyright &copy; myportfoliowebsite.com</a>
        </div>
       
        </>
     );
}
 
export default Education;