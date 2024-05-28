function FormInput({ children, type }) {
  return (
    <div className="form-group w-full">
      <input
        className="py-2 pl-3 w-full text-xl text-pale-yellow bg-midnight-black border-2 border-pale-yellow rounded-xl"
        type={type}
        placeholder={children}
      />
      <label className="form-label">{children}</label>
    </div>
  );
}

export default FormInput;
