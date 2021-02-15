import React, { Component } from 'react';
import Carrouseldrop from '../../Dropdown/Carrouseldrop';
import Maindrop from '../../Dropdown/Maindrop'
import './style.css';
import api from '../../../api'

export default class Loadbox extends Component {
    state = {
      filmes: [],
    };
  
    async componentDidMount() {
      const response = await api.get("");
      this.setState({ filmes: response.data });
      console.log(response.data);
    }
  
    render() {
      const { filmes } = this.state;
  
      return (
        <>
          {filmes.map((filme) => (
            <div className="loadbox-div" key={filme.show.id}>
              <div className="loadbox"></div>
              <div className="loadbox-bottom">
                <div className="loadbox-bottom-circle"></div>
                <div className="loadbox-bottom-txt">
                  <p>
                    <strong>{filme.show.name}</strong>
                  </p>
                </div>
                <Maindrop />
              </div>
            </div>
          ))}
        </>
      );
    }
  }