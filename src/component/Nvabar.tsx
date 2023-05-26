import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-around">
      <div>
        <Link to={"/"}>J_Bhargava</Link>
      </div>
      <div className="flex gap-2">
        <Link to={"/experience"}>Experience</Link>
        <Link to={"/projects"}>Project</Link>
        <Link to={"/achivments"}>Achivments</Link>
        <Link to={"/Blog"}>Blog</Link>
        <Link to={"/contact"}>Contact</Link>
      </div>
    </div>
  );
};

export default Navbar;
