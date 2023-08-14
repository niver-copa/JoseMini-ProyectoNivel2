import React, { useState } from "react";
import IconList from "../../iconlist/IconList";
import "./GuestsButton.css";

const GuestsButton = ({ onClick, showLocation }) => {
  const [adultsCount, setAdultsCount] = useState(0);
  const [childrenCount, setChildrenCount] = useState(0);

  const handleAdultsIncrement = () => {
    if (adultsCount < 100) {
      setAdultsCount(adultsCount + 1);
    }
  };

  const handleAdultsDecrement = () => {
    if (adultsCount > 0) {
      setAdultsCount(adultsCount - 1);
    }
  };

  const handleChildrenIncrement = () => {
    if (childrenCount < 12) {
      setChildrenCount(childrenCount + 1);
    }
  };

  const handleChildrenDecrement = () => {
    if (childrenCount > 0) {
      setChildrenCount(childrenCount - 1);
    }
  };

  const handleButtonClick = () => {
    onClick();
  };

  return (
    <div className="guests-button-container">
      <button
        className={`guests-button-add ${showLocation ? "hidden" : ""}`}
        onClick={handleButtonClick}
      >
        <strong>Guests</strong>
        <span className="guests-button-text">
          Add guests
        </span>
      </button>
      <div className={`guests-content ${showLocation ? "hidden" : ""}`}>
        <div className="contain-title">
          <p className="guests-label">Adults</p>
          <p className="guests-description">Ages 13 or above</p>
        </div>
        <div className="contain-add-remove">
          <button onClick={handleAdultsDecrement}><IconList className="remove" iconName="remove" /></button>
          <span className="guests-counter">{adultsCount}</span>
          <button onClick={handleAdultsIncrement}><IconList className="add" iconName="add" /></button>
        </div>
        <div className="contain-title">
          <p className="guests-label">Children</p>
          <p className="guests-description">Ages 2-12</p>
        </div>
        <div className="contain-add-remove">
          <button onClick={handleChildrenDecrement}><IconList className="remove" iconName="remove" /></button>
          <span className="guests-counter">{childrenCount}</span>
          <button onClick={handleChildrenIncrement}><IconList className="add" iconName="add" /></button>
        </div>
      </div>
    </div>
  );
};

export default GuestsButton;
