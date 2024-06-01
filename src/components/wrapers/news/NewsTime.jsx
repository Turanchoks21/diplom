function NewsTime({ time }) {
  return (
    <>
      <div className="text-blue-purple dark:text-pale-yellow" date-text={time}>
        {time}
      </div>
    </>
  );
}

export default NewsTime;
