import React from "react";
import style from "./BottomNav.module.css";
import Link from "next/link";

const BottomNav = () => {
  return (
    <nav className={style.bottomNavContainer + " bg-full-width"}>
    <div className={style.bottomNavInner + " boxed-content"}>
        <div className={style.leftPart}>
          <div className={style.hamburgerMenu}>
            <img src="/img/header/hamburger.svg" />
            <p>Browse By Category</p>
          </div>
          <ul>
            <li>
              <Link href="">Home</Link>
            </li>
            <li>Easy Monthly Installments</li>
            <li>Shop by Brands</li>
            <li>Become a Vendor</li>
          </ul>
        </div>
        <div className={style.rightPart}>
          <img src="/img/header/fb.svg" />
          <img src="/img/header/twitter.svg" />
          <img src="/img/header/ld.svg" />
          <img src="/img/header/instagram.svg" />
        </div>
    </div>
    </nav>
  );
};

export default BottomNav;
