import React from "react";
import locationLogo from "./img/location.png";
import gmail from "./img/gmail.png";
import ln from "./img/ln.png";
import whatsapp from "./img/whatsapp.png";
import insta from "./img/insta.png";
import tg from "./img/tg.png";

function Footer() {
  return (
    <div
      className="footer d__flex align__items__center justify__content__space__between pz-10"
      style={{ padding: "10px 20px", zIndex: "100" }}
    >
      <div className="logo">
         <h1 className="location">Where To Find Me</h1>
         <img src={locationLogo} width={"40px"} height={"60px"}></img></div>
            <div> <h6 className="address">5/84,East street</h6>
            <h6 className="address">Senkotai</h6>
            <h6 className="address">Nilakottai</h6>
            <h6 className="address">Dindigul-24215</h6>
      </div>
      <a href="https://mail.google.com/mail/u/0" target={"_blank"}>
        <button > <img src={gmail} width={"20px"} height={"20px"}></img></button></a>  
           <a  href="https:www.linkedin.com/in/muthu-pandi-t-201973228" target={"_blank"} ><button > <img src={ln} width={"100px"} height={"20px"}></img></button></a>
           <a  href="https://wa.me/916382376146" target={"_blank"}><button > <img src={whatsapp} width={"20px"} height={"20px"}></img></button></a>
           <a  href="https://www.instagram.com/26_m_p/" target={"_blank"}><button><img src={insta} width={"20px"} height={"20px"}></img></button></a>
           <a  href="https://t.me/mp4600" target={"_blank"}><button> <img src={tg} width={"20px"} height={"20px"}></img></button></a>
    
      <span
        className="copyright"
        style={{ color: "#c6c9d8", fontSize: "14px", opacity: "0.75" }}
      >
        Copyright © 2021 programmer 26_M_P. All Rights Reserved.
      </span>
       </div>
    
  );
}

export default Footer;
