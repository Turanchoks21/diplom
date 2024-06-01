function NewsPhoto({ src }) {
  return (
    <>
      <div className="relative">
        <img src={src} className="rounded-lg" />
      </div>
    </>
  );
}

export default NewsPhoto;
