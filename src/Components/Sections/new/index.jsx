import { React, Components, Component } from 'react';
import Maindrop from '../../Dropdown/Maindrop'
import './style.css';


export default class New extends Component {
    render() {
        return (
            <div className="content-section-new">
                <div className="new">
                    <h1 className="section-title">THIS IS THE NEW SECTION</h1>
                    <span><Maindrop /></span>
                </div>
            </div>
        )
    }
}

