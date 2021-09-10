import React, { Component } from 'react'
import { FaBars, FaPlus, FaCogs, FaComments, FaSignInAlt  } from 'react-icons/fa';

import './styles/NavBar.css';

export default class NavBar extends Component {
    render() {
        return (
            <nav className="navbar nav">
            <a className="navbar-brand"></a>
                <ul className="nav">
                    <li><a href="/"><FaBars /> BROWSE</a></li>
                    <li><a href="#"><FaPlus /> ADD NEW QUESTIONS</a></li>
                    <li><a href="#"><FaCogs /> API</a></li>
                    <li><a href="#"><FaComments /> DISCUSS</a></li>
                    <li><a href="#"><FaSignInAlt /> LOGIN</a></li>
                </ul>
            </nav>
        )
    }
}