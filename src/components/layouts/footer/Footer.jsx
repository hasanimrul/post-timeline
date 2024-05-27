import React from "react";
import style from "./footer.module.css";

const Footer = () => {
  return (
    <>
      <footer className={style.footerContainer + " bg-full-width"}>
        <div className={style.footerInner + " boxed-content"}>
          <div className={style.footerWrapper}>
            <div>
              <img src="/img/header/logo.svg" />
              <p className={style.blueText}>Got questions? Call us 24/7!</p>
              <p>03 111 666 144</p>
              <p>0317 1777015.</p>
              <p className={style.blueText}>Contact info</p>
              <p>info@winstore.pk</p>
              <div className={style.socialIcon}>
                <img src="/img/header/fb.svg" />
                <img src="/img/header/twitter.svg" />
                <img src="/img/header/ld.svg" />
                <img src="/img/header/instagram.svg" />
              </div>
            </div>
            <div>
              <h4 className={style.blueText}>Trending</h4>
              <p>Installments</p>
              <p>Electronics</p>
              <p>Grocery</p>
              <p>Health & Beauty</p>
              <p>Home Appliances</p>
              <p>Mobile Accessories</p>
            </div>
            <div>
              <h4 className={style.blueText}>Information</h4>
              <p>Installments</p>
              <p>Electronics</p>
              <p>Grocery</p>
              <p>Health & Beauty</p>
              <p>Home Appliances</p>
              <p>Mobile Accessories</p>
            </div>
            <div>
              <h4 className={style.blueText}>Customer Care</h4>
              <p>Installments</p>
              <p>Electronics</p>
              <p>Grocery</p>
              <p>Health & Beauty</p>
              <p>Home Appliances</p>
              <p>Mobile Accessories</p>
            </div>
          </div>
          <div className={style.payments}>
            <img src="/img/header/visa.jpg" />
            <img src="/img/header/master.jpg" />
            <img src="/img/header/cash.jpg" />
            <img src="/img/header/installment.jpg" />
          </div>
        </div>
      </footer>
      <div className={style.footerBottom + " bg-full-width"}>
        <div className="boxed-content">
          <p>© 2021 Winstore. All Rights Reserved.</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
