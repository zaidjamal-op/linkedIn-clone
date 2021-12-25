import { Avatar } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import "./SideBar.css";

function SideBar() {
  const user = useSelector(selectUser);
  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://res.cloudinary.com/dqmlanbbj/image/upload/v1640193298/Avatar/istockphoto-1248542684-612x612_ow1j04.jpg"
          alt=""
        />
        <Avatar className="sidebar__avatar" src={user.photoUrl}>
          {user?.email[0].toUpperCase()}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">2546</p>
        </div>

        <div className="sidebar__stat">
          <p>Views on posts</p>
          <p className="sidebar__statNumber">2448</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("React.js")}
        {recentItem("programming")}
        {recentItem("softwaredevelopment")}
        {recentItem("engineering")}
        {recentItem("linkedin")}
        {recentItem("material Ui")}
        {recentItem("redux")}
      </div>
    </div>
  );
}

export default SideBar;
