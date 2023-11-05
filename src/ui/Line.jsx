function Line() {
  return (
    <>
      <div className="hidden sm:flex flex-col items-start gap-[10px] relative flex-1 grow h-px bg-[var(--line)]"></div>
      <div className="flex sm:hidden flex-col items-start gap-[10px] relative top-[2rem] h-px bg-[var(--line)]"></div>
    </>
  );
}

export default Line;
