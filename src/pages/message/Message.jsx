/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import "./Message.scss"
const Message = () => {
  return (
    <div className="message">
      <div className="container">
        <div className="breadcrumbs">
          <span>
            {" "}
            <Link to="/messages">Messages</Link> {">"} JOHN DOE {">"}
          </span>
          <div className="messages">
            <div className="item">
              <img src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/58960b09956dc710d2d5a33573261936-1554984111113/750ccab0-8a64-4c91-b9a4-d10039dbf79c.jpg" alt="" />
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium, quae at. Minima iure harum ullam saepe dicta ipsa, voluptates, soluta quis ex impedit reprehenderit culpa assumenda reiciendis doloremque ea! A dolorum debitis officia incidunt minus?
              </p>
            </div>
            <div className="item owner">
              <img src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/58960b09956dc710d2d5a33573261936-1554984111113/750ccab0-8a64-4c91-b9a4-d10039dbf79c.jpg" alt="" />
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium, quae at. Minima iure harum ullam saepe dicta ipsa, voluptates, soluta quis ex impedit reprehenderit culpa assumenda reiciendis doloremque ea! A dolorum debitis officia incidunt minus?
              </p>
            </div>
            <div className="item">
              <img src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/58960b09956dc710d2d5a33573261936-1554984111113/750ccab0-8a64-4c91-b9a4-d10039dbf79c.jpg" alt="" />
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium, quae at. Minima iure harum ullam saepe dicta ipsa, voluptates, soluta quis ex impedit reprehenderit culpa assumenda reiciendis doloremque ea! A dolorum debitis officia incidunt minus?
              </p>
            </div>
            <div className="item owner">
              <img src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/58960b09956dc710d2d5a33573261936-1554984111113/750ccab0-8a64-4c91-b9a4-d10039dbf79c.jpg" alt="" />
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium, quae at. Minima iure harum ullam saepe dicta ipsa, voluptates, soluta quis ex 
              </p>
            </div>
            <div className="item">
              <img src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/58960b09956dc710d2d5a33573261936-1554984111113/750ccab0-8a64-4c91-b9a4-d10039dbf79c.jpg" alt="" />
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium, quae at. Minima iure harum ullam saepe dicta ipsa, voluptates, soluta quis ex impedit reprehenderit culpa assumenda reiciendis doloremque ea! A dolorum debitis officia incidunt minus?
              </p>
            </div>
            <div className="item owner">
              <img src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/58960b09956dc710d2d5a33573261936-1554984111113/750ccab0-8a64-4c91-b9a4-d10039dbf79c.jpg" alt="" />
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium, quae at. Minima iure harum ullam saepe dicta ipsa, voluptates, soluta quis ex impedit reprehenderit culpa assumenda reiciendis doloremque ea! A dolorum debitis officia incidunt minus?
              </p>
            </div>
          </div>
          <hr />
          <div className="write">
            <textarea
              name=""
              placeholder="Write a message"
              id=""
              cols="30"
              rows="10"
            ></textarea>
            <button>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
