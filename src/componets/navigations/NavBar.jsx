import React from "react";
import { Link } from "react-router-dom";
import ThemButton from "./../buttons/ThemButton";
import NavButton from "../buttons/NavButton";

function NavBar() {
  return (
    <>
      <div className="fixed flex px-48 py-2 items-center top-0 left-0 border-b-2 w-full border-violet-purple dark:border-neon-green">
        <Link to="/register">
          <NavButton>Register</NavButton>
        </Link>

        <ThemButton />
      </div>
    </>
  );
}

export default NavBar;
