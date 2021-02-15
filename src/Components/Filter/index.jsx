import { render } from '@testing-library/react';
import React, { Component, useState } from 'react';
import JASONDATA from '../../mydata.json';
import './style.css';


function Filtersearch() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="content-filter">
      <div className="search-div">
          <input type="text" placeholder="search"  onChange={event => setSearchTerm(event.target.value)} />
          {JASONDATA.filter(val =>{
            if(searchTerm == ""){
              return val
            } else if (val.first_name.toLowerCase().includes(searchTerm.toLowerCase())){
              return val
            }
          }).map((val, key) =>{
            return (
                <div className="names">{val.first_name}</div>
            );
          })}
      </div>
    </div>
  )



}

export default class Filter extends Component {
  render() {
    return (
      <Filtersearch/>
    );
  }
}

