import React from "react";
import "./Banner.css";

function Banner() {
  return (
    <div className="banner">
      <div className="bgdark">
        <div className="left">
          <h1 className="head">Money Heist</h1>
          {/* <h2 className="sub">97% liked 2018 season 3</h2> */}
          <p className="para">
            A criminal mastermind who goes by "The Professor" has a plan to pull
            off the biggest heist in recorded history -- to print billions of
            euros in the Royal Mint of Spain. To help him carry out the
            ambitious plan, he recruits eight people with certain abilities and
            who have nothing to lose. The group of thieves take hostages to aid
            in their negotiations with the authorities, who strategize to come
            up with a way to capture The Professor. As more time elapses, the
            robbers prepare for a showdown with the police
          </p>
          <div className="btns">
            <button className="btn">Play Now</button>
            <button className="btn">More</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
