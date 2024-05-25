import { Link } from "react-router-dom";

function FormButtonSolid({ to ,children }) {
  return (
    <>
      <Link
        to={to}
        className="py-2 w-full max-w-xl text-center text-xl text-lavender-mist dark:text-midnight-black font-semibold bg-pale-yellow 
      border-2 border-pale-yellow hover:bg-violet-purple hover:border-violet-purple rounded-xl"
      >
        {children}
      </Link>
    </>
  );
}

export default FormButtonSolid;
