function NewsPost({ children }) {
  return (
    <>
      <div
        className="flex flex-col w-full space-y-4 rounded-xl bg-lavender-mist 
        dark:bg-midnight-black border-2 border-blue-purple p-3 
            transition-color ease-in-out duration-500"
      >
        {children}
      </div>
    </>
  );
}

export default NewsPost;
