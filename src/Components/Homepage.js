import React from 'react'
// import { Link } from 'react-router-dom';
import './Homepage.css';
import Fade from 'react-reveal/Fade';

export default function Homepage() {
    return (
        <div className="homePage" >
            <div className="home" >
                
                <Fade left>
                    <p className="title"><b>"Improving Agriculture, Improving Lives"</b></p>
                    <p>Helping the farmers out there by providing information regarding harvesting techniques and tips in their respective states.</p>
                </Fade>
                {/* <Fade right>
                    <button type="button" className="btn btn-dark" ><Link className="btn-home btn-dark" to="/form">join us</Link></button>
                </Fade> */}
            </div>
        </div>
    )
}
