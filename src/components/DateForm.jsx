import InputsSection from "./InputsSection";
import DividerSection from "./DividerSection";
import { useForm } from "react-hook-form"

function DateForm({ setResult }) {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors }
  } = useForm();

  function onSubmit(data) {
    const today = new Date();

    const birthDate = new Date(data.year, data.month - 1, data.day);

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
      months--;
      const previousMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      days += previousMonth.getDate();
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    setResult({
      years,
      months,
      days
    });
  }

  function onError() {
    setResult({
      years: "",
      months: "",
      days: ""
    });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)} className="flex flex-col gap-8 desktop:gap-0">
      <InputsSection register={register} errors={errors} getValues={getValues} />

      <DividerSection />
    </form>
  )
}

export default DateForm;