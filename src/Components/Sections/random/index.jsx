import { React, Components, Component } from 'react';
import Maindrop from '../../Dropdown/Maindrop'
import './style.css';


export default class Random extends Component {
    render() {
        return (
            <div className="content-section-random">
                <div className="random">
                    <h1 className="section-title">THIS IS THE RANDOM SECTION</h1>
                    <span><Maindrop /></span>
                </div>
            </div>
        )
    }
}