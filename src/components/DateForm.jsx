import InputsSection from "./InputsSection";
import DividerSection from "./DividerSection";

function DateForm() {
  return (
    <form className="flex flex-col gap-8">
      <InputsSection />

      <DividerSection />
    </form>
  )
}

export default DateForm;