import { useEffect, useState } from "react";
import {
  MoonIcon as SolidMoon,
  SunIcon as SolidSun,
} from "@heroicons/react/20/solid";
import {
  MoonIcon as OutlineMoon,
  SunIcon as OutlineSun,
} from "@heroicons/react/24/outline";

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSolid, setIsSolid] = useState(false);
  const [isIcons, setIsIcons] = useState(false);

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    setIsIcons(!isIcons);
    document.body.classList.toggle("dark", newDarkMode);
  };

  useEffect(() => {
    const checkDarkModePreference = () => {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        setIsDarkMode(true);
        setIsIcons(true);
        document.body.classList.add("dark");
      } else {
        setIsIcons(false);
        document.body.classList.remove("dark");
      }
    };

    checkDarkModePreference();
  }, []);

  return (
    <>
      <button
        className="text-blue-purple dark:text-pale-yellow"
        onClick={toggleDarkMode}
        onMouseOver={() => setIsSolid(true)}
        onMouseLeave={() => setIsSolid(false)}
      >
        {isIcons ? (
          isSolid ? (
            <SolidMoon className="h-8 xxl:h-12" />
          ) : (
            <OutlineMoon className="h-8 xxl:h-12" />
          )
        ) : isSolid ? (
          <SolidSun className="h-8 xxl:h-12" />
        ) : (
          <OutlineSun className="h-8 xxl:h-12" />
        )}
      </button>
    </>
  );
};

export default DarkModeToggle;
