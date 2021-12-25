import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HeaderOptions from "./HeaderOptions";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { useDispatch } from "react-redux";
import { logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase";
import { useSelector } from "react-redux";

function Header() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };
  return (
    <div className="header">
      <div className="header__left">
        <img src="https://img.icons8.com/color/48/000000/linkedin.png" alt="" />
        <div className="header__search">
          <SearchIcon />
          <input placeholder="Find jobs,skills.." type="text" />
        </div>
      </div>

      <div className="header__right">
        <HeaderOptions Icon={HomeIcon} title={"Home"} />
        <HeaderOptions Icon={SupervisorAccountIcon} title={"My Network"} />
        <HeaderOptions Icon={BusinessCenterIcon} title={"Jobs"} />
        <HeaderOptions Icon={ChatIcon} title={"Messaging"} />
        <HeaderOptions Icon={NotificationsIcon} title={"Notifications"} />
        {user ? (
          <HeaderOptions avatar={true} title={"Me"} onClick={logoutOfApp} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Header;
