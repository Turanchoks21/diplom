function ButtonWraper({ children }) {
  return (
    <>
      <div className="flex flex-col pt-3 xxl:pt-6 w-full max-w-xl xxl:max-w-4xl space-y-4 xxl:space-y-8">
        {children}
      </div>
    </>
  );
}

export default ButtonWraper;
