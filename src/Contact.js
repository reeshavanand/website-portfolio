import React, {useState} from "react";
import {Link} from 'react-router-dom';

const Contact = () => {

    const [userRegister, setUserRegister] = useState({
        fname:"",
        lname:"",
        phone:"",
        email:"",

    });

    const [ records, setRecords] = useState([]);

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        
        setUserRegister({ ...userRegister, [name]:value});

    }

    const handleSubmit = (e) => {

        e.preventDefault();

        const newRecord = { ...userRegister, id:new Date().getTime().toString() }
        
        setRecords([...records, newRecord]);

        setUserRegister({fname:"", lname:"", phone:"", email:""});
    }

    return (
    <>
        
        <nav className="navbar">

            <li>
                    <Link to = "/">Home</Link>
                    <Link to = "/education">Education</Link>
                    <Link to="/experience">Experience</Link>                 
                    <Link to = "/skill">Projects</Link>    
            </li>    
                
                    <h1>Contact Me!</h1>
        </nav>



        <div className="contact-page">

            <form action=""  onSubmit= {handleSubmit}>

            <label htmlFor="fname">First Name</label>

            <input type="text" id="fname" name="fname"
            autoComplete="off" value={userRegister.fname}
            onChange={handleInput} />
            
            <label htmlFor="lname">Last Name</label>
            
            <input type="text" id="lname" name="lname"
             autoComplete="off" value={userRegister.lname}
             onChange={handleInput} />
            
            <label htmlFor = "phone">Phone</label>
            
            <input type = "text" id ="phone" name = "phone" 
            autoComplete="off" value={userRegister.phone}
            onChange={handleInput} />
            
            <label htmlFor="email">Email</label>
            
            <input type ="text" id = "email" name="email"
             autoComplete="off" value={userRegister.email}
             onChange={handleInput} />
            
            <button type="submit">Submit</button>

            </form>
        </div>

        <div className="popup">
                {
                    records.map((curElem) => {
                        return(
                            <div>
                                <p>{curElem.fname}</p>
                                <p>{curElem.lname}</p>
                                <p>{curElem.phone}</p>
                                <p>{curElem.email}</p>

                                </div >
                           
                        )
                    })
                }
            </div>


        <div className="footer">
            <a href= "https://wa.me/+919693028953">Copyright &copy; myportfoliowebsite.com</a>
        </div>
    </>


     );
}
 
export default Contact;