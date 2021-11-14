import React from 'react'
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
            </div>
        </div>
    )
}