import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "./components/navigations/NavBar";
import { Outlet } from "react-router-dom";
import UserContext from "./context/UserContext";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    if (users.length > 0) {
      navigate("/main");
    }
  }, [navigate]);

  return (
    <>
      <UserContext>
        <NavBar />
        <div className="m-0 lg:px-48 px-5">
          <Outlet />
        </div>
      </UserContext>
    </>
  );
}

export default App;
