import { useEffect, useState } from 'react';
import { MoonIcon as SolidMoon, SunIcon as SolidSun } from '@heroicons/react/20/solid';
import { MoonIcon as OutlineMoon, SunIcon as OutlineSun } from '@heroicons/react/24/outline';

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSolid, setIsSolid] = useState(false);
  const [isIcons, setIsIcons] = useState(false);

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    setIsIcons(!isIcons);
    document.body.classList.toggle('dark', newDarkMode);
  };

  useEffect(() => {
    const checkDarkModePreference = () => {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setIsDarkMode(true);
        setIsIcons(true);
        document.body.classList.add('dark');
      } else {
        setIsIcons(false);
        document.body.classList.remove('dark');
      }
    };

    checkDarkModePreference();
  }, []);

  return (
    <div>
      <button
        className="dark:text-white"
        onClick={toggleDarkMode}
        onMouseOver={() => setIsSolid(true)}
        onMouseLeave={() => setIsSolid(false)}
      >
        {isIcons ? (
          isSolid ? (
            <SolidMoon className="h-9" />
          ) : (
            <OutlineMoon className="h-9" />
          )
        ) : isSolid ? (
          <SolidSun className="h-9" />
        ) : (
          <OutlineSun className="h-9" />
        )}
      </button>
    </div>
  );
};

export default DarkModeToggle;
