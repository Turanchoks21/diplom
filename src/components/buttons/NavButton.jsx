import { Link } from "react-router-dom";

function NavButton({ to, children, onClick }) {
  return (
    <>
      <Link
        to={to}
        onClick={onClick}
        className="flex items-center space-x-2
        dark:text-pale-yellow font-semibold text-midnight-black hover:text-blue-purple  
        dark:hover:text-blue-purple text-xl xxl:text-3xl 4xl:text-4xl transition ease-in-out hover:scale-110"
      >
        {children}
      </Link>
    </>
  );
}

export default NavButton;
