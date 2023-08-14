import React, { useEffect, useState } from "react";
import IconList from "../iconlist/IconList";
import "./Card.css";

const Card = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const res = await fetch("stays.json");
      const resJson = await res.json();
      setData(resJson);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const truncateTitle = (title, maxLength) => {
    if (title.length > maxLength) {
      return title.slice(0, maxLength) + "...";
    }
    return title;
  };

  return (
    <div className="card-container">
      {data.map((el, i) => (
        <div className="card" key={i}>
          <img src={el.photo} alt={el.title} />
          <div className="ratings">
            <div className="rating">
              <IconList iconName="star" /> 
              <span>{el.rating}</span>
            </div>
            <p className="type">{`${el.type} · ${el.beds} beds`}</p>
            {el.superHost && <div className="superhost">Superhost</div>}
          </div>
          <h2 className="title">{truncateTitle(el.title, 20)}</h2>
        </div>
      ))}
    </div>
  );
};

export default Card;
