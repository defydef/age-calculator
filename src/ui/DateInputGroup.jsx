import { DateInput } from "./DateInput";

function DateInputGroup() {
  return (
    <div className="flex sm:gap-[32px] gap-[1rem] self-stretch justify-center">
      <DateInput placeholder="dd" label="day" />
      <DateInput placeholder="mm" label="month" />
      <DateInput placeholder="yyyy" label="year" />
    </div>
  );
}

export default DateInputGroup;
