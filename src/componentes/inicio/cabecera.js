import React, {Component} from 'react'



export const Navbar = () =>{
    export const Navbar=() => {
        const hidden = () =>{
            const menu = document.querySelector('#navbarSupportedContent');
            menu.ClassList.toogle('none')
        }
    }

    return(
        <nav className="navbar navbar-expand-lg  navbar-dark bg-dark"> 
        <link className="navbar-brand" to="/"></link>
        <button
        className="navbar-toggler"
        type="Button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>    
        </button>
        
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav m-auto">
            <li className="nav-item">
                <link className="nav-link" to="/">Link 1</link>
            </li>
            <li>
                <link className="nav-link" to="/">Link 2</link>
            </li>
            <li>
                <link className="nav-link" to="/">Link 3</link>
            </li>
        </ul>
        <link className="btn btn-outline-success my-2 my-sm-0" to="/">Para salir</link>
        </div>
        </nav>
    )
}