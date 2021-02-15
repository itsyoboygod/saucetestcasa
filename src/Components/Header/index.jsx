import React, {Components} from 'react';
import './style.css';
import { Component } from 'react';
import Maindrop from '../Dropdown/Maindrop';
import Filter from '../Filter'
import Menuicon from '../Dropdown/Menuicon';


export default class Header extends Component {
   
   
    render(){
        
        return(
            <div className="header">
                <div className="btn-sidebar">
                    <Menuicon/>   
                </div>
                <div className="logo"><a href="../Filter"><h1>HEADER</h1></a></div> 
                <div className="search">
                    <input type="search" placeholder=" search" />
                    <button>Go</button>
                </div>                
                <div className="notifis">
                    <div className="icon"></div>
                    <div className="icon"></div>    
                    <div className="icon"></div>    
                    <Maindrop/>   

                </div>                

            </div>
        )
    }
}