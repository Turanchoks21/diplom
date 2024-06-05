import UserNavBar from "./components/navigations/UserNavBar";
import UserSideBar from "./components/navigations/UserSideBar";
import { Outlet } from "react-router-dom";
import ScrollToTop from "./router/ScrollToTop";

function MainPageView() {
  return (
    <>
      <UserNavBar />
      <div className="m-0 py-20 px-2 lg:px-48 items-center">
        <div className="flex xl:space-x-4">
          <div className="w-full max-w-[18rem] hidden xl:block">
            <UserSideBar />
          </div>
          <div className="w-full">
            <ScrollToTop>
              <Outlet />
            </ScrollToTop>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainPageView;
