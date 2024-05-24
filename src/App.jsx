import NavBar from "./componets/navigations/NavBar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <div className="m-0 px-48">
        <Outlet />
      </div>
    </>
  );
}

export default App;
