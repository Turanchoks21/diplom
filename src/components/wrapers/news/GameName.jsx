function GameName({ text }) {
  return (
    <>
      <div
        className="font-semibold text-blue-purple dark:text-pale-yellow xxl:text-2xl"
        data-text={text}
      >
        {text}
      </div>
    </>
  );
}

export default GameName;
