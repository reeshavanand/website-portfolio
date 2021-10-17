import React from "react";
import {Link} from 'react-router-dom';
import hcj from './static/hcj.png';
import js from './static/js.png';
import pd from './static/pd.png';
import rj from './static/rj.jpg';


const Skill = () => {
    return ( 

        <>
         <nav className="navmenu">

    <li>

<Link to = "/">Home</Link>
<Link to = "/education">Education</Link>
<Link to="/experience">Experience</Link>                 
<Link to = "/skill">Projects</Link>
</li>


<h1>My skills & Projects</h1>
</nav>


        <div className="pro1">
            <img src={hcj} alt="html-logo" />
            <h1>Analogue Clock Project</h1>
            <p>HTML, CSS, JS</p>
            
            <a href="https://github.com/reeshavanand/Analogue-Clock-Project">Github Link</a>
            
        </div>

        <div className="pro2">

        <img src={js} alt="js-logo" />
            <h1>Animated Car Project</h1>
            <p>Vanilla JS</p>
            
            <a href="https://github.com/reeshavanand/Car_Animation_Project">Github Link</a>

        </div>

        <div className="pro3">

        <img src={rj} alt="pd-logo" />
            <h1>My Portfolio Website</h1>
            <p>Reactjs</p>
            
            <a href="https://github.com/reeshavanand/portfolio-website">Github Link</a>

        </div>


        
        <div className="pro4">

        <img src={rj} alt="rj-logo" />
            <h1>ToDo List Web App</h1>
            <p>React JS</p>
            
            <a href="https://github.com/reeshavanand/React-Js-Course-Project">Github Link</a>

        </div>

        <div className="pro5">

        <img src={rj} alt="rj-logo" />
            <h1>Merchant-Product eCommerce WebApp</h1>
            <p>React JS</p>
            
            <a href="https://github.com/reeshavanand/React-Assignment">Github Link</a>

        </div>

        <div className="pro6">

        <img src={rj} alt="rj-logo" />
            <h1>Blogging Website</h1>
            <p>React JS</p>
            
            <a href="https://github.com/reeshavanand/Reactjs-Project">Github Link</a>

        </div>

        <div className="pro7">

        <img src={pd} alt="pd-logo" />
            <h1>Ice Cream Parlour Website</h1>
            <p>Django</p>
            
            <a href="https://github.com/reeshavanand/Django-Project">Github Link</a>

        </div>


        <div className="footer-pages">
        <a href= "https://wa.me/+919693028953">Copyright &copy; myportfoliowebsite.com</a>
        </div>

        </>
     );
}
 
export default Skill;