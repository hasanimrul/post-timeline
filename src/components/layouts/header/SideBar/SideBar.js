import React from "react";
import style from "./SideBar.module.css";

import Logo from "../winStoreLogo";

const SideBar = () => {
  return (
    <div className="bg-full-width">
      <div className={style.sideBarContainer + " boxed-content"}>
        <Logo />
        <img src="/img/header/hamburger.svg" />
      </div>
    </div>
  );
};

export default SideBar;
