import InputDiv from "./InputDiv";

function InputsSection({ register, errors, getValues }) {
  function isValidDate(day, month, year) {
    const date = new Date(year, month - 1, day);

    return (
      date.getFullYear() === Number(year) &&
      date.getMonth() === Number(month) - 1 &&
      date.getDate() === Number(day)
    );
  }

  const validateDate = () => {
    const { day, month, year } = getValues();

    if (!day || !month || !year) return true;

    if (!isValidDate(day, month, year)) return "Must be a valid date";

    const inputDate = new Date(year, month - 1, day);

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return inputDate <= today || "Must be in the past";
  };

  const isDateError = errors.day?.type === "validate" || errors.month?.type === "validate" || errors.year?.type === "validate";

  return (
    <div className="grid grid-cols-3 gap-4">
      <InputDiv
        label="day"
        placeholder="DD"
        register={register}
        error={errors.day}
        sharedDateError={isDateError}
        showDateMessage={true}
        validationRules={{
          required: "This field is required",
          min: {
            value: 1,
            message: "Must be a valid day"
          },
          max: {
            value: 31,
            message: "Must be a valid day"
          },
          validate: validateDate
        }}
      />

      <InputDiv
        label="month"
        placeholder="MM"
        register={register}
        error={errors.month}
        sharedDateError={isDateError}
        validationRules={{
          required: "This field is required",
          min: {
            value: 1,
            message: "Must be a valid month"
          },
          max: {
            value: 12,
            message: "Must be a valid month"
          },
          validate: validateDate
        }}
      />

      <InputDiv
        label="year"
        placeholder="YYYY"
        register={register}
        error={errors.year}
        sharedDateError={isDateError}
        validationRules={{
          required: "This field is required",
          validate: validateDate
        }}
      />
    </div>
  )
}

export default InputsSection;