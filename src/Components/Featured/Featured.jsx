// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Featured.scss";
const Featured = () => {
  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h1>
          Find the right <i>freelance</i> service, right away
          </h1>
          <div className="search">
            <div className="searchInput">
              <img src="./assets/search.png" alt="" />
              <input type="text" placeholder="Try building mobile app" />
            </div>
            <button>Search</button>
          </div>
          <div className="popular">
            <span>Popular:</span>
            <button>Web Design</button>
            <button>wordpress</button>
            <button>Logo Design</button>
            <button>AI service</button>
          </div>
        </div>
        <div className="right">
          <img src="./assets/man.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Featured;
