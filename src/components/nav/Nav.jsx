import React, { useState, useEffect } from "react";
import IconList from "../iconlist/IconList";
import Logo from "../../img/logo.svg";
import Modal from "../modal/Modal";
import LocationButton from "../botones/locationbutton/LocationButton";
import "./Nav.css";

const Nav = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("Helsinki, Finland"); // Estado inicial

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const updateSelectedLocation = (location) => {
    setSelectedLocation(location);
  };

  useEffect(() => {
    // Actualiza la ubicación inicial al cargar la página
    updateSelectedLocation("Helsinki, Finland");
  }, []);

  return (
    <nav className="nav-container">
      <div className="left-content">
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
        <h1>Stays in Finland</h1>
      </div>
      <div className="right-content">
        <div className="search-container">
          <button onClick={openModal}>{selectedLocation}</button>
          <div className="AddGuests">
            <button onClick={openModal}>Add guests</button>
          </div>
          <button onClick={openModal}>
            <IconList iconName="search" />
          </button>
        </div>
        <h6>12+ stays</h6>
      </div>

      <Modal isOpen={modalOpen} onClose={closeModal} selectedLocation={selectedLocation}>
        <LocationButton
          onLocationSelected={updateSelectedLocation}
          selectedLocation={selectedLocation}
        />
      </Modal>
    </nav>
  );
};

export default Nav;
