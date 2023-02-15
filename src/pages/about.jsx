import './about.css';
import {useState} from 'react';

function About() {
    const [visible, setVisible] = useState(false);
    const [phoneVisible, setPhoneVisible] = useState(false);
    
    function getEmail() {
        return visible ? 'hethe.allemand@icloud.com' : '';
        // if (visible) {
        //     return "hethe.allemand@icloud.com";
        // }
        // else {
        //     return "";
        // }
    }

    function toggleEmail() {
        setVisible(!visible);
    }

    function validateCode(e) {
        const text = e.target.value;
        if (text.toLowerCase() === "cool") {
            setPhoneVisible(true);
        } else {
            setPhoneVisible(false);
        } 
    }

    function getNumber() {
        return phoneVisible ? '867-5309' : '';
        // if (phoneVisible) {
        //     return '867-5309';
        // } else {
        //     return '';
        // }
    }

    return (
        <div className="About">
            <h2>About me</h2>
            <h3>I'm Hethe Allemand</h3>
            <h4>{getEmail()}</h4>
            <button className="btn btn-sm btn-dark" onClick={toggleEmail}>Click to see my email</button>

            <hr/>
            <p>Type the code to see my phone number</p>
            <input onChange={validateCode} placeholder='code'></input>

            <h6 className='mt-3'>{getNumber()}</h6>
        </div>
    );
}


export default About;