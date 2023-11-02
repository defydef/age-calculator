export function DateInput({ placeholder, label }) {
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
      />
    </div>
  );
}
