function NewsButton({ children, onClick }) {
  return (
    <>
      <button onClick={onClick} className="text-midnight-black dark:text-pale-yellow">
        {children}
      </button>
    </>
  );
}

export default NewsButton;
