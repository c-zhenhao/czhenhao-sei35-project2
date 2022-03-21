import React from "react";

function NavBar() {
  return (
    <div className="NavBar">
      <div className="NavBar-container">
        <div className="logo">&#123; ? Shaken : !Stirred &#125;</div>
        <ul className="NavBar-ul">
          <li>Search</li>
          <li>Favourites</li>
          <li>Kitchen</li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
