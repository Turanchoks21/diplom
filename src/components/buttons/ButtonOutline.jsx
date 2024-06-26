import { Link } from "react-router-dom";

function ButtonOutline({ to, children, type, onClick }) {
  if (to) {
    return (
      <Link
        to={to}
        className="p-2 xxl:p-3 w-full font-semibold text-center text-lg md:text-xl
        xxl:text-3xl text-midnight-black dark:text-pale-yellow bg-clip border-2
      border-midnight-black dark:border-pale-yellow hover:text-blue-purple
      dark:hover:text-blue-purple hover:border-blue-purple dark:hover:border-blue-purple rounded-xl"
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
      className="p-2 xxl:p-3 w-full font-semibold text-center text-lg md:text-xl
      xxl:text-3xl text-midnight-black dark:text-pale-yellow bg-clip border-2
    border-midnight-black dark:border-pale-yellow hover:text-blue-purple
    dark:hover:text-blue-purple hover:border-blue-purple dark:hover:border-blue-purple rounded-xl"
    >
      {children} 
      {/* text */}
    </button>
  );
}

export default ButtonOutline;
