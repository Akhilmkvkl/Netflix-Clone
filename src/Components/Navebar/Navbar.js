import React from "react";
import "./Navebar.css"
function Navebar() {
  return (
    <div>
      <div className="navebar">
        <img className="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
          alt=""
        />
        <img className="avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Netflix_icon.svg/1200px-Netflix_icon.svg.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Navebar;
