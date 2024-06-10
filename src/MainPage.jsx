import UserNavBar from "./components/navigations/UserNavBar";
import UserSideBar from "./components/navigations/UserSideBar";
import { Outlet } from "react-router-dom";
import ScrollToTop from "./router/ScrollToTop";
import UserContext from "./context/UserContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function MainPageView() {
  const navigate = useNavigate();

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    if (users.length <= 0) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <>
      <UserContext>
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
      </UserContext>
    </>
  );
}

export default MainPageView;
