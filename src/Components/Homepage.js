import React from 'react'
import { Link } from 'react-router-dom';
// import Form from './Form';
import './Homepage.css';
import Fade from 'react-reveal/Fade';

export default function Homepage() {
    return (
        <div className="homePage" >
            <div className="home" >
                <Fade left>
                    <p className="title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati placeat quod consequuntur quaerat consequatur autem magni, temporibus sit, aut numquam deleniti voluptas aliquid quisquam, nostrum voluptatibus tenetur. Blanditiis dolorum earum numquam cum itaque officia?</p>
                </Fade>
                <Fade right>
                    <button type="button" className="btn btn-dark" ><Link className="btn-home btn-dark" to="/form">join us</Link></button>
                </Fade>
            </div>
        </div>
    )
}
