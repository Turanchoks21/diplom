import { Link } from "react-router-dom";

function FormButton({ to, children }) {
  return (
    <Link
      to={to}
      className="py-2 w-full max-w-xl text-center text-xl text-pale-yellow bg-clip border-2 border-pale-yellow hover:text-violet-purple hover:border-violet-purple rounded-xl"
    >
      {children}
    </Link>
  );
}

export default FormButton;
