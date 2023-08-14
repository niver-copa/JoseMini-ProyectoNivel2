import React from "react";
import "material-icons/iconfont/material-icons.css";
import './IconList.css'

const IconList = ({ iconName }) => {
  return (
    <div>
      {iconName === "search" && <i className="material-icons">search</i>}
      {iconName === "star" && <i className="material-icons">star</i>}
      {iconName === "add" && <i className="material-icons">add</i>}
      {iconName === "location_on" && <i className="material-icons on">location_on</i>}
      {iconName === "remove" && <i className="material-icons custom-icon">remove</i>}
    </div>
  );
};

export default IconList;
