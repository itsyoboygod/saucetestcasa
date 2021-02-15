import React, { Component, useState, useEffect, useRef } from "react";
import "./style.css";




export default function Carrouseldrop(){


  const [inHover, setHover] = useState(2);
  

  function hoverhandle(){
    const btn_grid = document.getElementById("id-btn-span-grid")
    btn_grid.style.transform = "rotate(90deg)"
    btn_grid.style.transition="0.8s"


    const  block_top_left  = document.getElementById("top-left-block");
    block_top_left.style.width="15px";
    block_top_left.style.height="12px"
    block_top_left.style.transform="translate(-2px, -2px)"
    block_top_left.style.transition="0.8s"


    const  block_top_right  = document.getElementById("top-right-block");
    block_top_right.style.width="15px";
    block_top_right.style.height="12px"
    block_top_right.style.transform="translate(2px, -2px)"
    block_top_right.style.transition="0.8s"
    
    const  block_bottom_left  = document.getElementById("bottom-left-block");
    block_bottom_left.style.width="15px";
    block_bottom_left.style.height="12px"
    block_bottom_left.style.transform="translate(-2px, 2px)"
    block_bottom_left.style.transition="0.8s"
    
    const  block_bottom_right  = document.getElementById("bottom-right-block");
    block_bottom_right.style.width="15px";
    block_bottom_right.style.height="12px"
    block_bottom_right.style.transform="translate(2px, 2px)"
    block_bottom_right.style.transition="0.8s"



  }

  function outhandle(){
    const btn_grid = document.getElementById("id-btn-span-grid")
    btn_grid.style.transform = "rotate(0deg)"
    btn_grid.style.transition="0.8s"


    const  block_top_left  = document.getElementById("top-left-block");
    block_top_left.style.width="8px";
    block_top_left.style.height="8px"
    block_top_left.style.transform="translate(0px, 0px)"
    block_top_left.style.transition="0.8s"


    const  block_top_right  = document.getElementById("top-right-block");
    block_top_right.style.width="8px";
    block_top_right.style.height="8px"
    block_top_right.style.transform="translate(0px, 0px)"
    block_top_right.style.transition="0.8s"
    
    const  block_bottom_left  = document.getElementById("bottom-left-block");
    block_bottom_left.style.width="8px";
    block_bottom_left.style.height="8px"
    block_bottom_left.style.transform="translate(0px, 0px)"
    block_bottom_left.style.transition="0.8s"
    
    const  block_bottom_right  = document.getElementById("bottom-right-block");
    block_bottom_right.style.width="8px";
    block_bottom_right.style.height="8px"
    block_bottom_right.style.transform="translate(0px, 0px)"
    block_bottom_right.style.transition="0.8s"



  }

    return (
      <div className="dropdown">
        <span id="option-id" className="option">
          &#8942;
        </span>
        <div className="dropdown-content-option">
          <a href="#">
            <button>
      {/* {(1+1) == 1 ? '😁' : '☹️'} */}
              Option 1{" "}
              {inHover && hoverhandle}
              <a href="#">
                <span>&#x3F;</span>
              </a>
            </button>
          </a>
          <a href="#">
            <button>
              Option 2{" "}
              <a href="#">
                <span>&#x3F;</span>
              </a>
            </button>
          </a>
          <a href="#">
            <button  onMouseOver={hoverhandle} onMouseOut={outhandle}>
            {/* */}
              Open grid{" "}
              <div className="btn-span-grid" id="id-btn-span-grid">
                <div className="row-blocks-top">
                  <div id="top-left-block"></div>
                  <div id="top-right-block"></div>
                </div>
                <div className="row-blocks-bottom">
                  <div id="bottom-left-block"></div>
                  <div id="bottom-right-block"></div>
              </div>
              </div>

            </button>
          </a>
        </div>
      </div>
    );
  }

