/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import "./Orders.scss";
const Orders = () => {
  const currentUser = {
    id: 1,
    username: "john doe",
    isSeller: true,
  };
  return (
    <div className="Orders">
      <div className="container">
        <div className="title">
          <h1>Orders</h1>
        </div>
        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>{currentUser?.isSeller ? "Buyer" : "Seller"}</th>
            <th>Contact</th>
          </tr>
          <tr>
            <td>
              <img
                className="img"
                src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/886c25bf5456152cb614ecfe531cc3dc-1638280032437/f7109f1a-876d-475b-9970-bc4181caef3f.jpg"
                alt=""
              />
            </td>
            <td>Gig 1</td>
            <td>88</td>
            <td>123</td>
            <td>
              <img className="delete" src="/assets/message.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="img"
                src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/886c25bf5456152cb614ecfe531cc3dc-1638280032437/f7109f1a-876d-475b-9970-bc4181caef3f.jpg"
                alt=""
              />
            </td>
            <td>Gig 1</td>
            <td>88</td>
            <td>123</td>
            <td>
              <img className="delete" src="/assets/message.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="img"
                src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/886c25bf5456152cb614ecfe531cc3dc-1638280032437/f7109f1a-876d-475b-9970-bc4181caef3f.jpg"
                alt=""
              />
            </td>
            <td>Gig 1</td>
            <td>88</td>
            <td>123</td>
            <td>
              <img className="delete" src="/assets/message.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="img"
                src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/886c25bf5456152cb614ecfe531cc3dc-1638280032437/f7109f1a-876d-475b-9970-bc4181caef3f.jpg"
                alt=""
              />
            </td>
            <td>Gig 1</td>
            <td>88</td>
            <td>123</td>
            <td>
              <img className="delete" src="/assets/message.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="img"
                src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/886c25bf5456152cb614ecfe531cc3dc-1638280032437/f7109f1a-876d-475b-9970-bc4181caef3f.jpg"
                alt=""
              />
            </td>
            <td>Gig 1</td>
            <td>88</td>
            <td>123</td>
            <td>
              <img className="delete" src="/assets/message.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="img"
                src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/886c25bf5456152cb614ecfe531cc3dc-1638280032437/f7109f1a-876d-475b-9970-bc4181caef3f.jpg"
                alt=""
              />
            </td>
            <td>Gig 1</td>
            <td>88</td>
            <td>123</td>
            <td>
              <img className="delete" src="/assets/message.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="img"
                src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/886c25bf5456152cb614ecfe531cc3dc-1638280032437/f7109f1a-876d-475b-9970-bc4181caef3f.jpg"
                alt=""
              />
            </td>
            <td>Gig 1</td>
            <td>88</td>
            <td>123</td>
            <td>
              <img className="delete" src="/assets/message.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="img"
                src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/886c25bf5456152cb614ecfe531cc3dc-1638280032437/f7109f1a-876d-475b-9970-bc4181caef3f.jpg"
                alt=""
              />
            </td>
            <td>Gig 1</td>
            <td>88</td>
            <td>123</td>
            <td>
              <img className="delete" src="/assets/message.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="img"
                src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/886c25bf5456152cb614ecfe531cc3dc-1638280032437/f7109f1a-876d-475b-9970-bc4181caef3f.jpg"
                alt=""
              />
            </td>
            <td>Gig 1</td>
            <td>88</td>
            <td>123</td>
            <td>
              <img className="delete" src="/assets/message.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="img"
                src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/886c25bf5456152cb614ecfe531cc3dc-1638280032437/f7109f1a-876d-475b-9970-bc4181caef3f.jpg"
                alt=""
              />
            </td>
            <td>Gig 1</td>
            <td>88</td>
            <td>123</td>
            <td>
              <img className="delete" src="/assets/message.png" alt="" />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Orders;
