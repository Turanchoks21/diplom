function PurpleInput({ children }) {
  return (
    <>
      <div className="form-group w-full">
        <input className="py-2 pl-3 text-xl border-2 border-blue-purple rounded-xl" />
        <label className="form-label text-blue-purple">{children}</label>
      </div>
    </>
  );
}

export default PurpleInput;
