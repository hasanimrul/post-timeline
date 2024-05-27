import React from "react";
import style from "./TopNav.module.css";
import Logo from "../../winStoreLogo";

const TopNav = () => {
  return (
    <nav className={style.topNavContainer + " bg-full-width"}>
      <div className={style.topNavContainerInner + " boxed-content"}>
        <div className={style.leftPart}>
          <Logo />
          <div className={style.categoryAndSearchWrapper}>
            <select name="Categories" id="categories">
              <option value="">All Categories</option>
              <option value="">Lincoln Nautilus</option>
              <option value="">Mercedes-Benz GLB 2022</option>
              <option value="">BMW X3 2022</option>
              <option value="">Genesis GV80 2022</option>
              <option value="">Mercedes-Benz GLS 2022</option>
            </select>
            <form action="/search" method="get">
              <input
                type="text"
                name="query"
                placeholder="Search for products"
              />
              <button type="submit">
                <img src="/img/header/search.svg" />
              </button>
            </form>
          </div>
        </div>
        <div className={style.rightPart}>
          <div>
            <p>Call Us Now</p>
            <p className={style.call}>
              <img src="/img/header/call.svg" />
              +011 5827918
            </p>
            <p>Sign In</p>
          </div>
          <div className={style.icons}>
            <img src="/img/header/user.svg" />
            <img src="/img/header/love.svg" />
            <img src="/img/header/cart.svg" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
