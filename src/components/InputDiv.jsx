function InputDiv({ 
  label,
  placeholder,
  register,
  error,
  validationRules,
  sharedDateError,
  showDateMessage 
}) {
  const hasError = error || sharedDateError;

  return (
    <div className="flex flex-col gap-2">
      <label 
        htmlFor={label} 
        className={`uppercase text-[12px] leading-base tracking-[4px] font-bold tablet:text-[14px] tablet:tracking-[5px] ${hasError ? "text-red-400" : "text-grey-500"}`}
      >
        {label}
      </label>

      <input 
        id={label} 
        placeholder={placeholder} 
        {...register(label, validationRules)}
        className={`border rounded-lg px-4 py-2 font-bold caret-purple-500 placeholder:text-black/50 focus:outline-none tablet:px-6 tablet:text-[32px] tablet:leading-base ${hasError ? "border-red-400" : "border-grey-200"}`} 
      />

      {error && (
        <p className="text-red-400 text-[12px] leading-base italic tablet:text-[14px]">
          {error.message}
        </p>
      )}
    </div>
  )
}

export default InputDiv;