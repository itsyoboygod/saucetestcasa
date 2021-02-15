import React, { Component } from "react";
import { Link } from "react-router-dom";
import Loadbox from "../Carrousel/loadbox";
import Carrouseldrop from "../Dropdown/Carrouseldrop";
import "./style.css";

export default class Carrousel extends Component {
  render() {
    function moveRight() {
      const moveRight = document.getElementById("carrousel-static");
      moveRight.classList.remove("carrousel-static");
      moveRight.style.marginLeft = "-500px";
    }

    function moveLeft() {
      const moveLeft = document.getElementById("carrousel-static");
      moveLeft.classList.remove("carrousel-static");
      moveLeft.style.marginLeft = "500px";
    }
    return (
        <div className="carrpusel-all">
      <div className="carrousel">
          <div className="header-section">
            <h1> THIS IS THE CARROUSEL TEST SECTION </h1> <Carrouseldrop />
          </div>
        <hr id="line"></hr>

        <div className="section-carrousel-content">
          {/* <h1>NO CONTENT YET :(</h1> */}
          <button id="btn-span-arrow-left" onClick={moveLeft}>
            <span className="arrow-span-carrousel-left">&#10092;</span>
          </button>
          <ul id="carrousel-static">
            <li>
              <Loadbox />
            </li>
          </ul>
          <button id="btn-span-arrow-right" onClick={moveRight}>
            <span className="arrow-span-carrousel-right">&#10093;</span>
          </button>
        </div>
      </div>
      </div>
    );
  }
}