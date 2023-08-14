import React from "react";
import LocationButton from "../botones/locationbutton/LocationButton";
import GuestsButton from "../botones/guestsbutton/GuestsButton";
import SearchButton from "../botones/seearchbutton/SearchButton";
import PropertyData from "../../../stays.json"
import "./Modal.css";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-buttons-container">
          {children}
          <GuestsButton />
          <SearchButton onClick={onClose} />
        </div>
      </div>
    </div>
  );
};

export default Modal;
