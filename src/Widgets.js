import React from "react";
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
function Widgets() {
  const newArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon className="dot_icon" />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <h6>{subtitle}</h6>
      </div>
    </div>
  );
  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon className="info_icon" />
      </div>

      {newArticle("What not to say in a job interview", "2256 readers")}
      {newArticle("How tech hiring will evolve in 2022", "2256 readers")}
      {newArticle("Hiring mode on at IT firms", "2256 readers")}
      {newArticle("E-tailers to sharpen Bharat focus", "2256 readers")}
      {newArticle("15 Big Ideas that will shape 2022", "2256 readers")}
      {newArticle("Get noticed by recruiters", "2256 readers")}
    </div>
  );
}

export default Widgets;
