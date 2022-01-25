import { tab } from "@testing-library/user-event/dist/tab";
import React from "react";
import "./About.css";
import aboutImg from "./img/about.jpg";
function About() {
  //  Up To Top Btn
    window.addEventListener("scroll", function(){
      const upToTop = document.querySelector("a.bottom__to__top");
       upToTop.classList.toggle("active", window.scrollY > 0)
    });
  return (
    <div className="about component__space" id="About">
      <div className="container">
        <div className="row">
          <div className="col__2">
            <img src={aboutImg} alt="" className="about__img" />
          </div>
          <div className="col__2">
            <h1 className="about__heading">About Me</h1>
            <div className="about__meta">
              <p className="about__text p__color">
                Hi... I'm muthu pandi. I'm basically from nilakottai,dindigul district.
                I did my graduation in BE Computer Science And Engineering from SBM College Of Engineering And Technology,
                Dindigul. Currently i'm pursuing ME in same college.
              </p>
              <p className="about__text p__color">
                I would like to become a Web Developer.
                I have excellent knowledge in HTML,CSS,JAVASCRIPT,REACT JS
                intermediate knowledge in JAVA,NODE JS,MONGO DB.</p>
              <p className="about__text p__color">
                Still Now, Searching a job for kick start my carrier development.
                I'm always active to learn new things.
              </p>
               <p className="about__text p__color">
                Note : this page is just Checking Process. i'm later to share updated link. 
              </p>
               <div className="about__button d__flex align__items__center">
                <a href="https://drive.google.com/file/d/1UvOLuY79ELjIcAFHZPd9xXjgv1WdjMCA/view?usp=sharing" target={"_blank"}>
                  <button className="about btn pointer">Resume</button>
                </a>
                <a href="#Contact">
                  <button className="about btn pointer">Contact Me</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* UP TO TOP BTN */}
      <div className="up__to__top__btn">
        <a href="#" className="bottom__to__top">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-chevron-up white"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
          />
        </svg>
        </a>
      </div>
    </div>
  );
}

export default About;
