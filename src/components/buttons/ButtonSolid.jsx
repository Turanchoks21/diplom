import { Link } from "react-router-dom";

function ButtonSolid({ to, children, type, onClick }) {
  if (to) {
    return (
      <Link
        to={to}
        className="p-2 xxl:p-3 w-full text-center text-lg md:text-xl xxl:text-3xl 
        text-lavender-mist dark:text-midnight-black
          font-semibold bg-midnight-black dark:bg-pale-yellow border-2 border-midnight-black 
          dark:border-pale-yellow hover:bg-blue-purple dark:hover:bg-blue-purple
          hover:border-blue-purple dark:hover:border-blue-purple rounded-xl"
      >
        <button onClick={onClick} type={type}>
          {children}
        </button>
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      type={type}
      className="p-2 xxl:p-3 w-full text-center text-lg md:text-xl xxl:text-3xl 
      text-lavender-mist dark:text-midnight-black
        font-semibold bg-midnight-black dark:bg-pale-yellow border-2 border-midnight-black 
      dark:border-pale-yellow hover:bg-blue-purple dark:hover:bg-blue-purple
      hover:border-blue-purple dark:hover:border-blue-purple rounded-xl"
    >
      {children}
    </button>
  );
}

export default ButtonSolid;
