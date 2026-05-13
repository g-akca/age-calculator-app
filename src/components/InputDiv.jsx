function InputDiv({ label, placeholder }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={label} className="uppercase text-[12px] leading-base tracking-[4px] font-bold text-grey-500">{label}</label>
      <input id={label} placeholder={placeholder} className="border border-grey-200 rounded-lg px-4 py-2 placeholder:text-black/50 placeholder:font-bold" />
    </div>
  )
}

export default InputDiv;