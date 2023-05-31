import React, { useState } from "react";
import "../CSS/Mypage.css";
import Schedule from "./MySchedule"
const Mypage = (props) => {
  return (
    <>
    <div className="headerGroup"></div>
    <Schedule/>
    </>
  )
};

export default Mypage;
