import React, {Components} from 'react';

import { Component } from 'react';
import Header from '../Header';
import Content from '../Content';
import Sidebar from '../Sidebar';
import TestTime from '../Countdownclock/TestTime'
import Countdownclock from '../Countdownclock'
import Carrousel from  '../Carrousel'


import './style.css';
import Routes from '../../Routes';
import Hooks from '../Countdownclock/Hooks';

export default class Home extends Component {
    render(){
        return(
            <div>
                <Header/>
                <Sidebar/>
                <Countdownclock/>
                <Carrousel/>
                {/* <Content/>
                <Routes/>
                <Hooks/> */}
            </div>
        )
    }
}