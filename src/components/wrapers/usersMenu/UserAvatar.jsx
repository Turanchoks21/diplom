function UserAvatar({ src }) {
  return (
    <>
      <div className="h-8 w-8 xxl:h-12 xxl:w-12">
        <img src={src} className="rounded-full" />
      </div>
    </>
  );
}

export default UserAvatar;
