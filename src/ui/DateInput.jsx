import { useAge } from "../contexts/AgeContext";

export function DateInput({ placeholder, label }) {
  const { dispatch, day, month, year, error } = useAge();

  const value = label === "day" ? day : label === "month" ? month : year;

  const errorClass = () => {
    if (
      (label === "day" && (error?.dayError || error?.emptyDayError)) ||
      (label === "month" && (error?.monthError || error?.emptyMonthError)) ||
      (label === "year" && (error?.futureDateError || error?.emptyYearError)) ||
      error?.invalidDateError
    )
      return {
        errorLine: "border-[var(--red)]",
        errorColor: "text-[var(--red)]",
      };
  };
  const { errorLine, errorColor } =
    errorClass() !== undefined ? errorClass() : "";

  function changeDateInput(e) {
    if (label === "day") {
      dispatch({
        type: "date/inputDay",
        payload: Number(e.target.value),
      });
    } else if (label === "month") {
      dispatch({
        type: "date/inputMonth",
        payload: Number(e.target.value),
      });
    } else if (label === "year") {
      dispatch({
        type: "date/inputYear",
        payload: Number(e.target.value),
      });
    }
  }

  return (
    <div className="flex flex-col items-start sm:gap-[8px] gap-1 sm:flex-[0_0_auto]">
      <label
        className={`relative sm:w-fit sm:font-heading-s font-[number:var(--heading-s-font-weight)] text-[var(--grey)] sm:text-[length:var(--heading-s-font-size)] tracking-[var(--heading-s-letter-spacing)] text-[length:0.75rem] leading-[var(--heading-s-line-height)] uppercase ${errorColor}`}
        htmlFor={label}
      >
        {label}
      </label>
      <input
        className={`sm:w-[160px] w-full sm:px-[24px] sm:py-[6px] p-[0.75rem_1rem] sm:rounded-[8px] rounded-lg border border-solid border-line placeholder:text-[var(--black)] placeholder:opacity-50 placeholder:tracking-[var(--heading-m-letter-spacing)] placeholder:leading-[var(--heading-m-line-height)] placeholder:sm:font-[number:var(--heading-m-font-weight)] items-center h-fit sm:text-[32px] text-[1.25rem] placeholder:uppercase font-[number:var(--heading-m-font-weight)] focus:outline-[var(--purple)] cursor-pointer caret-[var(--purple)] placeholder:text-[1.25rem] ${errorLine}`}
        type="number"
        placeholder={placeholder}
        name="day"
        value={value}
        onChange={changeDateInput}
      />
      {/* <input
        placeholder={placeholder}
        name={label}
        value={value}
        onChange={changeDateInput}
        className="w-3/5"
      /> */}
      <p className={`${errorColor} italic text-sm`}>
        {label === "day" &&
          (error?.emptyDayError || error?.dayError || error?.invalidDateError)}
        {label === "month" && (error?.emptyMonthError || error?.monthError)}
        {label === "year" && (error?.emptyYearError || error?.futureDateError)}
      </p>
    </div>
  );
}
