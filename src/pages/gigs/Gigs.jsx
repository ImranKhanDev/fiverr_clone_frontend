/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./Gigs.scss";
import GigCard from "../../Components/GigCard/GigCard";
import { gigs } from "../../data";
const Gigs = () => {
  const [sort, setSort] = useState("sales");
  const [open, setOpen] = useState(false);

  const reSort = (type) => {
    setSort(type);
    setOpen(false);
  };

  return (
    <div className="gigs">
      <div className="container">
        <span className="breadcrumbs">
          FiVERR {">"} Graphics & Design {">"}
        </span>
        <h1>AI artists</h1>
        <p>
          Explore the boundaries of art and technology with fiver's AI artist
        </p>
        <div className="menu">
          <div className="left">
            <input type="text" placeholder="minimum" />
            <input type="text" placeholder="maximum" />
            <button>Apply</button>
          </div>
          <div className="right">
            <span className="sortBy">sortBy : </span>
            <span className="sortType">
              {sort === "sales" ? "Best Selling" : "Newest"}
            </span>
            <img
              src="./assets/down.png"
              alt=""
              onClick={() => setOpen(!open)}
            />

            {open && (
              <div className="rightMenu">
                {sort === "sales" ? (
                  <span onClick={() => reSort("createdAt")}>Newest</span>
                ) : (
                  <span onClick={() => reSort("sales")}>Best Selling</span>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="cards">
          {gigs.map((gig) => (
            <GigCard key={gig.id} item={gig} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gigs;
