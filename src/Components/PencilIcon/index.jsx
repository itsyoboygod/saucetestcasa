import React, { useState, useRef } from "react";
import Modal from "react-modal";
import "./style.css";

Modal.setAppElement("#root");

function Pencilicon() {
  const [modalIsOpen, setmodalIsOpen] = useState(false);


    const [title, setTitle] = useState('')
    const inputRef = useRef()
  


  return (
    <div className="newmodal">
      <button onClick={() => setmodalIsOpen(true)} id="myBtn-pencil">
      ✎
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setmodalIsOpen(false)}
        style={{
          overlay: {
            zIndex: 99,
            top: "10px",
            backgroundColor: "rgba(52, 52, 52, 0.8)",
          },
        }}
      >
        <div className="modal-content">
          <button id="btn-close-modal" onClick={() => setmodalIsOpen(false)}>
            &times;
          </button>
          <div id="modal-posts">
            <form className="form-clock-title">
              <input
              autoComplete="off"
                    value={title}
                    ref={inputRef}
                    onChange={e => setTitle(e.target.value)}
                    id="id-navtop-input-modal-title"
                    placeholder=" event title "
                    type="text"/>
            </form>
                    <div>New title: {title}</div>

            <div className="input-div-modal">
                <form className="form-clock-time">
              <input
                id="id-navtop-input-modal days"
                className="navtop-input-modal"
                placeholder=" days... "
                type="text"
              />
              <span>:</span>
              <input
                id="id-navtop-input-modal days"
                className="navtop-input-modal"
                placeholder=" hours... "
                type="text"
              />
              <span>:</span>
              <input
                id="id-navtop-input-modal min"
                className="navtop-input-modal"
                placeholder=" minutes... "
                type="text"
              />
              <span>:</span>
              <input
                id="id-navtop-input-modal sec"
                className="navtop-input-modal"
                placeholder=" seconds... "
                type="text"
              />
                </form>

            </div>
              <button id="btn-add-post-modal">
                <h3>Done</h3>
              </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Pencilicon;