function FormWraper({ children }) {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div
          className="flex flex-col w-full max-w-xl xxl:max-w-4xl space-y-4 xxl:space-y-8 rounded-xl shadow-md
          shadow-blue-purple bg-lavender-mist dark:bg-midnight-black border-2
          border-blue-purple pt-4 pb-6 px-8 md:px-12 md:pb-7 xxl:px-24 xxl:pb-14 xxl:pt-10 items-center
            transition-color ease-in-out duration-500"
        >
          {children}
        </div>
      </div>
    </>
  );
}

export default FormWraper;
