import { Link } from "react-router-dom";

function NavButton({ to, children }) {
  return (
    <>
      <Link
        to={to}
        className="dark:text-pale-yellow text-center hover:text-[#FF5733] text-hot-pink 
      dark:hover:text-violet-purple text-xl transition ease-in-out hover:scale-110 "
      >
        {children}
      </Link>
    </>
  );
}

export default NavButton;
