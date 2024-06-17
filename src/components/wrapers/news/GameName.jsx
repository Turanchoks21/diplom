function GameName({ text }) {
  return (
    <>
      <div
        className="font-semibold text-blue-purple dark:text-pale-yellow xxl:text-3xl 4xl:text-4xl "
        data-text={text}
      >
        {text}
      </div>
    </>
  );
}

export default GameName;
