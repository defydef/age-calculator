import { useAge } from "../contexts/AgeContext";
import Age from "./Age";

function AgeDisplay() {
  const { dateDiff } = useAge();
  const { yearDiff, monthDiff, dayDiff } = dateDiff || {};
  return (
    <div className="flex flex-col items-start relative self-stretch sm:w-full flex-[0_0_auto]">
      <Age label="years" diff={yearDiff} />
      <Age label="months" diff={monthDiff} />
      <Age label="days" diff={dayDiff} />
    </div>
  );
}

export default AgeDisplay;
