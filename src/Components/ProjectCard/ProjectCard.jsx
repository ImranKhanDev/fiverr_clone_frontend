/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import "./ProjectCard.scss";
import { Link } from "react-router-dom";
import "./ProjectCard.scss";
const ProjectCard = ({ item }) => {
  return (
    <Link to="/" className="link">
      <div className="ProjectCard">
        <img src={item.img} alt="" />
        <div className="info">
          <img src={item.pp} alt="" />
          <div className="texts">
            <h2>{item.cat}</h2>
            <span>{item.username}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
