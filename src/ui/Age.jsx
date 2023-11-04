function Age({ label, diff }) {
  return (
    <div className="flex items-start gap-[8px] relative self-stretch w-full flex-[0_0_auto]">
      <div className="relative w-fit mt-[-1.00px] font-heading-l font-[number:var(--heading-l-font-weight)] [font-style:var(--heading-l-font-style)] text-purple text-[length:var(--heading-l-font-size)] tracking-[var(--heading-l-letter-spacing)] leading-[var(--heading-l-line-height)] whitespace-nowrap text-[var(--purple)]">
        {diff || diff === 0 ? diff : "- -"}
      </div>
      <div className="relative w-fit mt-[-1.00px] font-heading-l font-[number:var(--heading-l-font-weight)] [font-style:var(--heading-l-font-style)] text-black text-[length:var(--heading-l-font-size)] tracking-[var(--heading-l-letter-spacing)] leading-[var(--heading-l-line-height)] whitespace-nowrap">
        {label}
      </div>
    </div>
  );
}

export default Age;
