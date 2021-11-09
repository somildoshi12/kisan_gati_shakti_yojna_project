import React from 'react'
import { Link } from 'react-router-dom'
// import img from './Images/flag.png';

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky">
                <div className="container-fluid">
                    {/* <Link class="navbar-brand mx-4" to="/">
                        <img src={img} alt="" width="30" height="24"/>
                    </Link> */}
                    <Link className="navbar-brand mx-2" to="/">Kisan Gati Shakti Yojna</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link mx-2" aria-current="page" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link mx-2" to="/form">Form</Link>
                            </li>
                        </ul>
                        <form className="d-flex">

                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}