import { useAge } from "../contexts/AgeContext";

export function DateInput({ placeholder, label }) {
  const { dispatch, date, month, year } = useAge();

  const value = label === "day" ? date : label === "month" ? month : year;

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
        className="relative w-fit font-heading-s font-[number:var(--heading-s-font-weight)] text-[var(--grey)] text-[length:var(--heading-s-font-size)] tracking-[var(--heading-s-letter-spacing)] leading-[var(--heading-s-line-height)] [font-style:var(--heading-s-font-style)] uppercase"
        htmlFor="day"
      >
        {label}
      </label>
      <input
        className="w-[160px] px-[24px] py-[6px] rounded-[8px] border border-solid border-line placeholder:text-[var(--black)] placeholder:opacity-50 placeholder:tracking-[var(--heading-m-letter-spacing)] placeholder:leading-[var(--heading-m-line-height)] placeholder:font-[number:var(--heading-m-font-weight)] items-center h-fit text-[32px] placeholder:uppercase font-[number:var(--heading-m-font-weight)]"
        type="text"
        placeholder={placeholder}
        name="day"
        value={value}
        onChange={changeDateInput}
      />
    </div>
  );
}
