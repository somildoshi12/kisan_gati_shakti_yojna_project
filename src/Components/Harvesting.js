import React from 'react'
import './Harvesting.css';
import img from './Images/andhra.jpg';

export default function Harvesting(props) {
    return (
        <div>
            <div className="harvestingPage">
                <div className="harvestingTitle">
                    <h1>Harvesting plan for {props.heading}</h1>
                </div>
                <br />
                <div className="bg">

                    <h3>{props.heading2}</h3>
                    <hr />
                    <div className="climate">
                        <p>{props.climate}</p>
                    </div>
                    {/* <br />   */}
                    {/* <br />
                    <br /> */}
                    <div>
                        <img className="image" src={img} alt="temp" />
                    </div>
                    {/* <br /> */}
                    <h3>{props.heading3}</h3>
                    <hr />
                    <div className="climate">
                        <p>{props.method}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
