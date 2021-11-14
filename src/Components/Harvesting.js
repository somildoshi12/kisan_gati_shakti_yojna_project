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

                <div className="name">
                    Hello, {props.name}
                </div>

                <div className="bg">

                    <h3>Climatic Condition</h3>
                    <hr />
                    <div className="climate">
                        <p>{props.climate}</p>
                    </div>
                    <div>
                        <img className="image" src={img} alt="temp" />
                    </div>
                    <h3>Harvesting Methods</h3>
                    <hr />
                    <div className="climate">
                        <p>{props.method}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}