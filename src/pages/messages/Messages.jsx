/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import "./Messages.scss";
const Messages = () => {
  const currentUser = {
    id: 1,
    username: "john doe",
    isSeller: true,
  };
  const message =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam quasi qui praesentium, amet totam cupiditate mollitia sint rem facere officiis incidunt architecto ad unde, ullam exercitationem, explicabo commodi autem!";
  return (
    <div className="message">
      <div className="container">
        <div className="title">
          <h1>Message</h1>
        </div>
        <table>
          <tr>
            <th>Buyer</th>
            <th>Last Message</th>
            <th>Date</th>

            <th>Action</th>
          </tr>
          <tr className="active">
            <td>John Doe</td>
            <td>   <Link to="/message/123" className="link">{message.substring(0, 100)}..</Link></td>
            <td>1 day ago</td>
            <td>
              <button>Mark as read</button>
            </td>
          </tr>
          <tr className="active">
            <td>John Doe</td>
            <td>   <Link to="/message/123" className="link">{message.substring(0, 100)}..</Link></td>
            <td>2 hour ago</td>
            <td>
              <button>Mark as read</button>
            </td>
          </tr>
          <tr>
            <td>John Doe</td>
            <td>   <Link to="/message/123" className="link">{message.substring(0, 100)}..</Link></td>
            <td>1 day ago</td>
          </tr>
          <tr>
            <td>John Doe</td>
            <td>   <Link to="/message/123" className="link">{message.substring(0, 100)}..</Link></td>
            <td>1 day ago</td>
          </tr>
          <tr>
            <td>John Doe</td>
            <td>   <Link to="/message/123" className="link">{message.substring(0, 100)}..</Link></td>
            <td>1 day ago</td>
          </tr>
          <tr>
            <td>John Doe</td>
            <td>
              <Link to="/message/123" className="link">{message.substring(0, 100)}..</Link>
            </td>
            <td>1 day ago</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Messages;
