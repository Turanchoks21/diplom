import UserNavBar from "./components/navigations/UserNavBar";
import { Outlet } from "react-router-dom";

function MainPageView() {
  return (
    <>
      <UserNavBar />
      <div className="m-0 py-20 px-2 lg:px-48">
        <Outlet />
      </div>
    </>
  );
}

export default MainPageView;
