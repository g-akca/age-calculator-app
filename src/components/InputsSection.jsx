import InputDiv from "./InputDiv";

function InputsSection() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <InputDiv label="day" placeholder="DD" />
      <InputDiv label="month" placeholder="MM" />
      <InputDiv label="year" placeholder="YYYY" />
    </div>
  )
}

export default InputsSection;