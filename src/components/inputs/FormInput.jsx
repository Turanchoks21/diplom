function FormInput({ children, type, name, id, register, error }) {
  return (
    <div className="form-group w-full mb-4">
      <input
        className={`py-2 pl-3 text-xl border-2  ${
          error ? "border-red-500" : "border-blue-purple"
        } rounded-xl`}
        type={type}
        name={name}
        id={id}
        placeholder={children}
        {...register(name)}
      />
      <label
        className={`form-label ${error ? "text-red-600" : "text-blue-purple"}`}
      >
        {children}
      </label>
      {error && <p className="mt-1 text-sm text-red-600">{error.message}</p>}
    </div>
  );
}

export default FormInput;
