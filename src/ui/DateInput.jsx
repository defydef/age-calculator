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
    <div className="inline-flex flex-col items-start gap-[8px] relative flex-[0_0_auto]">
      <label
        className={`relative w-fit font-heading-s font-[number:var(--heading-s-font-weight)] text-[var(--grey)] text-[length:var(--heading-s-font-size)] tracking-[var(--heading-s-letter-spacing)] leading-[var(--heading-s-line-height)] [font-style:var(--heading-s-font-style)] uppercase ${errorColor}`}
        htmlFor="day"
      >
        {label}
      </label>
      <input
        className={`w-[160px] px-[24px] py-[6px] rounded-[8px] border border-solid border-line placeholder:text-[var(--black)] placeholder:opacity-50 placeholder:tracking-[var(--heading-m-letter-spacing)] placeholder:leading-[var(--heading-m-line-height)] placeholder:font-[number:var(--heading-m-font-weight)] items-center h-fit text-[32px] placeholder:uppercase font-[number:var(--heading-m-font-weight)] focus:outline-[var(--purple)] cursor-pointer caret-[var(--purple)] ${errorLine}`}
        type="number"
        placeholder={placeholder}
        name="day"
        value={value}
        onChange={changeDateInput}
      />
      <p className={`${errorColor} italic text-sm`}>
        {label === "day" &&
          (error?.emptyDayError || error?.dayError || error?.invalidDateError)}
        {label === "month" && (error?.emptyMonthError || error?.monthError)}
        {label === "year" && (error?.emptyYearError || error?.futureDateError)}
      </p>
    </div>
  );
}
