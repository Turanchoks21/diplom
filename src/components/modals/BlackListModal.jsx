import { useTranslation } from "react-i18next";
import { XMarkIcon } from "@heroicons/react/24/outline";

function BlackListModal({ isOpen, onClose }) {
  const { t } = useTranslation();

  if (!isOpen) return null;

  return (
    <div className="fixed z-30 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen ">
        <div
          className="fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity"
          aria-hidden="true"
          onClick={onClose}
        ></div>
        <div
          className="bg-lavender-mist dark:bg-midnight-black rounded-xl overflow-hidden shadow-xl
          transform transition-all max-w-2xl w-full border-2 border-blue-purple"
        >
          <div className="bg-lavender-mist dark:bg-midnight-black px-4 py-5 border-b-2 border-blue-purple sm:px-6 sm:py-4">
            <div className="flex justify-between items-center">
              <span
                className="text-xl xxl:text-3xl leading-6 font-semibold
               text-midnight-black dark:text-pale-yellow"
              >
                {t("preferences")}
              </span>
              <button
                type="button"
                className="text-midnight-black dark:text-pale-yellow 
                focus:outline-none focus:ring-0 focus:ring-offset-0"
                onClick={onClose}
              >
                <XMarkIcon className="h-8 xxl:h-12" />
              </button>
            </div>
          </div>
          <div className="p-4 md:p-5 space-y-4">
            <span className="text-white">BlackList</span>
          </div>
          <div className="bg-lavender-mist dark:bg-midnight-black border-t-2 border-blue-purple px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
              onClick={onClose}
            >
              I accept
            </button>
            <button
              type="button"
              className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-lavender-mist dark:bg-midnight-black text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:mt-0 sm:w-auto sm:text-sm"
              onClick={onClose}
            >
              Decline
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlackListModal;
