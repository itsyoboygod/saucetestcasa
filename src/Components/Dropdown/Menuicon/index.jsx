import React, { Component } from 'react';
import './style.css';

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>


function SideMenu() {
    const menuicon = document.getElementsByClassName("sidebar")[0];
    menuicon.classList.toggle("closeSideMenu");
    
    };
  

export default class Menuicon extends Component {
    render() {
        return (
            <div className="menuicon"  onClick={SideMenu}>
                <span>&#9776;</span>
            </div>



        )
    }
}

