import { DateInput } from "./DateInput";

function DateInputGroup() {
  return (
    <div className="flex gap-[32px] self-stretch">
      <DateInput placeholder="dd" label="day" />
      <DateInput placeholder="mm" label="month" />
      <DateInput placeholder="yyyy" label="year" />
    </div>
  );
}

export default DateInputGroup;
