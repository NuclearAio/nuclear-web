import React from "react";
import { discord } from "../../socials";

const MobileMenu = () => {
  return (
    <div>
     <div id="dropdown" className="lg:hidden mt-5 -ml-40 absolute z-50 w-48 bg-primary rounded divide-y divide-gray-700 shadow ">
    <ul className="py-1  text-text-color tracking-tighter" aria-labelledby="dropdownDefault">
      <li>
        <a  className="block py-2 px-4 ">Dashboard</a>
        <a href={discord} target="_blank" className="block py-2 px-4">Discord</a>
      </li>
     
    </ul>
</div>
    </div>
  );
};

export default MobileMenu;
