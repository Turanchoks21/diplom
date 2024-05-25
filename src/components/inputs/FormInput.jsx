function FormInput({ children }) {
  return (
    <div className="form-group w-full max-w-xl">
      <input
        className="py-2 pl-3 w-full text-xl text-pale-yellow bg-midnight-black border-2 border-pale-yellow rounded-xl"
        type="text"
        placeholder={children}
      />
      <label className="form-label">{children}</label>
    </div>
  );
}

export default FormInput;
