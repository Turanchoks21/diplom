import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { GlobeAltIcon as OutlineGlobo } from "@heroicons/react/24/outline";
import { GlobeAltIcon as SolidGlobe } from "@heroicons/react/20/solid";

const solutions = [
  { name: "eng", value: "en" },
  { name: "ua", value: "ua" },
  { name: "ru", value: "ru" },
];

export default function Example() {
  const [isSolid, setIsSolid] = useState(false);

  const { i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <>
      <Popover className="relative">
        <>
          <Popover.Button
            onMouseOver={() => setIsSolid(true)}
            onMouseLeave={() => setIsSolid(false)}
            className=" text-blue-purple dark:text-pale-yellow  
            focus:outline-none focus:ring-0 focus:ring-offset-0"
          >
            {isSolid ? (
              <SolidGlobe className="h-8 xxl:h-12 3xl:h-20" />
            ) : (
              <OutlineGlobo className="h-8 xxl:h-12 3xl:h-20" />
            )}
          </Popover.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-1 max-w-xs sm:px-0">
              <div className="rounded-lg shadow-lg ring-1 ring-midnight-black ring-opacity-5 overflow-hidden">
                <div className="relative grid gap-6 bg-white px-2 py-4 sm:gap-8 sm:p-6">
                  {solutions.map((item) => (
                    <button
                      key={item.value}
                      onClick={() => changeLanguage(item.value)}
                      className="-m-3 p-1 px-2 block rounded-md hover:bg-gray-200 transition ease-in-out duration-150"
                    >
                      <p className="text-base xxl:text-xl font-medium text-midnight-black">
                        {item.name}
                      </p>
                    </button>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      </Popover>
    </>
  );
}
