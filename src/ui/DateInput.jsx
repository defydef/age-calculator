export const DateInput = () => {
  return (
    <div className="flex items-start gap-[32px] relative">
      <div className="inline-flex flex-col items-start gap-[8px] relative flex-[0_0_auto]">
        <label className="relative w-fit mt-[-1.00px] font-heading-s font-[number:var(--heading-s-font-weight)] text-grey text-[length:var(--heading-s-font-size)] tracking-[var(--heading-s-letter-spacing)] leading-[var(--heading-s-line-height)] [font-style:var(--heading-s-font-style)]">
          DAY
        </label>
        <div className="flex w-[160px] items-center gap-[16px] px-[24px] py-[12px] relative flex-[0_0_auto] rounded-[8px] border border-solid border-line">
          <div className="relative w-fit mt-[-1.00px] opacity-50 font-heading-m font-[number:var(--heading-m-font-weight)] text-black text-[length:var(--heading-m-font-size)] tracking-[var(--heading-m-letter-spacing)] leading-[var(--heading-m-line-height)] [font-style:var(--heading-m-font-style)]">
            DD
          </div>
        </div>
      </div>
    </div>
  );
};
