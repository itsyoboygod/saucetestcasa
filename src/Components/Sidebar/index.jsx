import React, {Component} from 'react';
import Pencilicon from  '../PencilIcon'
import './style.css';
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>


export default class Sidebar extends Component {
    render(){
        return(
            <div className="sidebar">
                   <ul>
                       <li><span className="">&#9872;</span></li>
                       <li><Pencilicon/></li>
                       <li><span className="">&#9733;</span></li>
                       <li><span className="">&#9729;</span></li>
                       <li><span className="">&#9835;</span></li>
                   </ul>
            </div>
        )
    }
}