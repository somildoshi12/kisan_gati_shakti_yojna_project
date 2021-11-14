import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
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
                                <Link className="nav-link mx-2" to="/about">About us</Link>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <button class="btn btn-outline-success" type="submit" formaction="https://docs.google.com/forms/d/e/1FAIpQLScqSely23wBH6O0maImZiUPY7Q8oki024LK5c261Sjkq7mdcg/viewform" formTarget="/blank">Feedback</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}