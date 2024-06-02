function NewsTime({ time }) {
  return (
    <>
      <div className="text-blue-purple dark:text-pale-yellow xxl:text-xl" date-text={time}>
        {time}
      </div>
    </>
  );
}

export default NewsTime;
