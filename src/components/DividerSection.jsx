import arrowIcon from "/images/icon-arrow.svg";

function DividerSection() {
  return (
    <div className="grid grid-cols-[1fr_auto_1fr] items-center">
      <div className="h-px bg-grey-200" aria-hidden />

      <button 
        type="submit" 
        className="w-16 aspect-square rounded-full bg-purple-500 flex justify-center items-center cursor-pointer transition-all duration-300 hover:bg-black"
      >
        <img src={arrowIcon} alt="Arrow icon" className="w-6 aspect-square" />
      </button>

      <div className="h-px bg-grey-200" aria-hidden />
    </div>
  )
}

export default DividerSection;