import Age from "./Age";

function AgeDisplay() {
  return (
    <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
      <Age label="years" />
      <Age label="months" />
      <Age label="days" />
    </div>
  );
}

export default AgeDisplay;
