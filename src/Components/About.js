import React from 'react'
import './About.css';

import flag from './Images/flag2.png';
export default function About() {
    return (
        <div className="aboutPage">
            <div className="about">
                <h1>About Us</h1>
                <hr />
                <h4>Project Based Learning (PBL)</h4>
                <div className="content">



                    <ul className="mid">
                        <li>SE, IT-A</li>
                        <li>Group no. 2</li>

                    </ul>
                    <div className="left">

                        <p><b>Presented by,</b></p>
                        <ul>
                            <li>Somil Doshi    - 15</li>
                            <li>Preet Desai    - 11</li>
                            <li>Krishna Desai  - 10</li>
                        </ul>
                    </div>

                    <img src={flag} alt="flag" />
                </div>
            </div>
            <div className="footer">
                <p>Copyright &copy; https://kgsy.netlify.app <br/>All rights reserved!</p>
            </div>
        </div>
    )
}
