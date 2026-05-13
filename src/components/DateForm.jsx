import InputsSection from "./InputsSection";
import DividerSection from "./DividerSection";
import { useForm } from "react-hook-form"

function DateForm() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors }
  } = useForm();

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8">
      <InputsSection register={register} errors={errors} getValues={getValues} />

      <DividerSection />
    </form>
  )
}

export default DateForm;