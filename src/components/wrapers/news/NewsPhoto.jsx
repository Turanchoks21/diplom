function NewsPhoto({ src }) {
  return (
    <>
      <div className="relative">
        <img src={src} className="rounded-lg w-full max-w-xl xxl:max-w-2xl" />
      </div>
    </>
  );
}

export default NewsPhoto;
