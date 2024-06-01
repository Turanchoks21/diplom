function UserAvatar({ src }) {
  return (
    <>
      <div className="h-8 w-8">
        <img src={src} className="rounded-full" />
      </div>
    </>
  );
}

export default UserAvatar;
