import NavBar from "./componets/navigations/NavBar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <div className="m-0 lg:px-48 px-5">
        <Outlet />
      </div>
    </>
  );
}

export default App;
