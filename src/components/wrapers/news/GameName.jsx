function GameName({ text }) {
  return (
    <>
      <div
        className="font-semibold text-blue-purple dark:text-pale-yellow"
        data-text={text}
      >
        {text}
      </div>
    </>
  );
}

export default GameName;
