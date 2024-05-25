function UserForm({ children }) {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div
          className="w-full max-w-xl gap-4 space-y-4 rounded-xl shadow-lg
         shadow-violet-purple bg-lavender-mist dark:bg-midnight-black border-2
          border-violet-purple p-5 flex flex-col items-center
          transition-color ease-in-out duration-500"
        >
          {children}
        </div>
      </div>
    </>
  );
}

export default UserForm;
