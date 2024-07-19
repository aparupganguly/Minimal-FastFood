import React from "react";
import "./Styles/Hero.css";
import img1 from "./Images/burger.png";
import img2 from "./Images/fries.png";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
const MainPage = () => {
  const lenis = useLenis(({ scroll }) => {});

  return (
    <>
      <ReactLenis root>
        {/* content */}
        <div className="mainContainer">
          <div className="heroContainer">
            <p className="landingText">Fast Food</p>
            <p className="landingSubText">
              calories measurement for minimalists
            </p>
            <div className="contenSection">
              <img src={img1} className="img1" alt="" />
              <div className="paraText">
                <span>Protein (g)32.01</span>
                <span>Protein (g)32.01</span>
                <span>Protein (g)32.01</span>
                <span>Protein (g)32.01</span>
                <span>Protein (g)32.01</span>
              </div>
              <div className="headingFirst">
                <p>CHICKEN WHOPPER</p>
              </div>
            </div>
            <div className="contenSection">
              <img src={img2} className="img1" alt="" />
              <div className="paraText">
                <span>Protein (g)32.01</span>
                <span>Protein (g)32.01</span>
                <span>Protein (g)32.01</span>
                <span>Protein (g)32.01</span>
                <span>Protein (g)32.01</span>
              </div>
              <div className="headingFirst">
                <p>FRENCH FRIES</p>
              </div>
            </div>
            <div className="contenSection">
              <img src={img1} className="img1" alt="" />
              <div className="paraText">
                <span>Protein (g)32.01</span>
                <span>Protein (g)32.01</span>
                <span>Protein (g)32.01</span>
                <span>Protein (g)32.01</span>
                <span>Protein (g)32.01</span>
              </div>
              <div className="headingFirst">
                <p>CHICKEN WHOPPER</p>
              </div>
            </div>
            <div className="contenSection">
              <img src={img1} className="img1" alt="" />
              <div className="paraText">
                <span>Protein (g)32.01</span>
                <span>Protein (g)32.01</span>
                <span>Protein (g)32.01</span>
                <span>Protein (g)32.01</span>
                <span>Protein (g)32.01</span>
              </div>
              <div className="headingFirst">
                <p>CHICKEN WHOPPER</p>
              </div>
            </div>
            <div className="contenSection">
              <img src={img1} className="img1" alt="" />
              <div className="paraText">
                <span>Protein (g)32.01</span>
                <span>Protein (g)32.01</span>
                <span>Protein (g)32.01</span>
                <span>Protein (g)32.01</span>
                <span>Protein (g)32.01</span>
              </div>
              <div className="headingFirst">
                <p>CHICKEN WHOPPER</p>
              </div>
            </div>
            <div className="contenSection">
              <img src={img1} className="img1" alt="" />
              <div className="paraText">
                <span>Protein (g)32.01</span>
                <span>Protein (g)32.01</span>
                <span>Protein (g)32.01</span>
                <span>Protein (g)32.01</span>
                <span>Protein (g)32.01</span>
              </div>
              <div className="headingFirst">
                <p>CHICKEN WHOPPER</p>
              </div>
            </div>
            <div className="contenSection">
              <img src={img1} className="img1" alt="" />
              <div className="paraText">
                <span>Protein (g)32.01</span>
                <span>Protein (g)32.01</span>
                <span>Protein (g)32.01</span>
                <span>Protein (g)32.01</span>
                <span>Protein (g)32.01</span>
              </div>
              <div className="headingFirst">
                <p>CHICKEN WHOPPER</p>
              </div>
            </div>
            <div className="contenSection">
              <img src={img1} className="img1" alt="" />
              <div className="paraText">
                <span>Protein (g)32.01</span>
                <span>Protein (g)32.01</span>
                <span>Protein (g)32.01</span>
                <span>Protein (g)32.01</span>
                <span>Protein (g)32.01</span>
              </div>
              <div className="headingFirst">
                <p>CHICKEN WHOPPER</p>
              </div>
            </div>
          </div>
        </div>
      </ReactLenis>
    </>
  );
};

export default MainPage;
