import { React, Components, Component } from 'react';
import Maindrop from '../../Dropdown/Maindrop'
import './style.css';


export default class Top extends Component {
    render() {
        return (
            <div className="content-section-top">
                <div className="top">
                    <h1 className="section-title">THIS IS THE TOP SECTION</h1>
                    <span><Maindrop /></span>
                </div>
            </div>
        )
    }
}