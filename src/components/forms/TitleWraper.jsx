function TitleWraper({ children }) {
  return (
    <>
      <span className="text-3xl xxl:text-5xl pt-2 xxl:pt-0 pb-3 font-semibold text-blue-purple dark:text-pale-yellow">
        {children}
      </span>
    </>
  );
}

export default TitleWraper;
