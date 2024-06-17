function NewsTime({ time }) {
  return (
    <>
      <div className="text-blue-purple dark:text-pale-yellow xxl:text-xl 3xl:text-2xl" date-text={time}>
        {time}
      </div>
    </>
  );
}

export default NewsTime;
