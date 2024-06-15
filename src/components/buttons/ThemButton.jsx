import { useEffect, useState } from "react";
import {
  MoonIcon as SolidMoon,
  SunIcon as SolidSun,
} from "@heroicons/react/20/solid";
import {
  MoonIcon as OutlineMoon,
  SunIcon as OutlineSun,
} from "@heroicons/react/24/outline";

function ThemButton({ className }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSolid, setIsSolid] = useState(false);
  const [isIcons, setIsIcons] = useState(false);
  const styles = "h-8 xxl:h-12 3xl:h-20"

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    setIsIcons(!isIcons);
    document.body.classList.toggle("dark", newDarkMode);
    localStorage.setItem("isDarkMode", newDarkMode);
  };

  useEffect(() => {
    const savedDarkMode = localStorage.getItem("isDarkMode");
    if (savedDarkMode !== null) {
      const isDark = savedDarkMode === "true";
      setIsDarkMode(isDark);
      setIsIcons(isDark);
      document.body.classList.toggle("dark", isDark);
    } else {
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
    }
  }, []);

  return (
    <>
      <div className={className}>
        <button
          className="text-blue-purple dark:text-pale-yellow"
          onClick={toggleDarkMode}
          onMouseOver={() => setIsSolid(true)}
          onMouseLeave={() => setIsSolid(false)}
        >
          {isIcons ? (
            isSolid ? (
              <SolidMoon className={styles} />
            ) : (
              <OutlineMoon className={styles} />
            )
          ) : isSolid ? (
            <SolidSun className={styles} />
          ) : (
            <OutlineSun className={styles} />
          )}
        </button>
      </div>
    </>
  );
}

export default ThemButton;
