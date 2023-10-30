import AgeDisplay from "./ui/AgeDisplay";
import { DateInput } from "./ui/DateInput";

function App() {
  return (
    <div className="bg-[#f0f0f0] flex flex-row items-center">
      <div className="bg-light-grey w-screen h-screen">
        <div className="flex flex-col w-[840px] items-start p-[56px] fixed top-[154px] left-[300px] bg-white rounded-[24px_24px_200px_24px]">
          <div className="flex items-start gap-[32px] relative self-stretch w-full flex-[0_0_auto]">
            <div className="inline-flex flex-col items-start gap-[8px] relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] font-heading-s font-[number:var(--heading-s-font-weight)] text-grey text-[length:var(--heading-s-font-size)] tracking-[var(--heading-s-letter-spacing)] leading-[var(--heading-s-line-height)] [font-style:var(--heading-s-font-style)]">
                DAY
              </div>
              <div className="flex w-[160px] items-center gap-[16px] px-[24px] py-[12px] relative flex-[0_0_auto] rounded-[8px] border border-solid border-line">
                <div className="relative w-fit mt-[-1.00px] opacity-50 font-heading-m font-[number:var(--heading-m-font-weight)] text-black text-[length:var(--heading-m-font-size)] tracking-[var(--heading-m-letter-spacing)] leading-[var(--heading-m-line-height)] [font-style:var(--heading-m-font-style)]">
                  DD
                </div>
              </div>
            </div>
            <div className="inline-flex flex-col items-start gap-[8px] relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] font-heading-s font-[number:var(--heading-s-font-weight)] text-grey text-[length:var(--heading-s-font-size)] tracking-[var(--heading-s-letter-spacing)] leading-[var(--heading-s-line-height)] [font-style:var(--heading-s-font-style)]">
                MONTH
              </div>
              <div className="flex w-[160px] items-center gap-[16px] px-[24px] py-[12px] relative flex-[0_0_auto] rounded-[8px] border border-solid border-line">
                <div className="relative w-fit mt-[-1.00px] opacity-50 font-heading-m font-[number:var(--heading-m-font-weight)] text-black text-[length:var(--heading-m-font-size)] tracking-[var(--heading-m-letter-spacing)] leading-[var(--heading-m-line-height)] [font-style:var(--heading-m-font-style)]">
                  MM
                </div>
              </div>
            </div>
            <div className="inline-flex flex-col items-start gap-[8px] relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] font-heading-s font-[number:var(--heading-s-font-weight)] text-grey text-[length:var(--heading-s-font-size)] tracking-[var(--heading-s-letter-spacing)] leading-[var(--heading-s-line-height)] [font-style:var(--heading-s-font-style)]">
                YEAR
              </div>
              <div className="flex w-[160px] items-center gap-[16px] px-[24px] py-[12px] relative flex-[0_0_auto] rounded-[8px] border border-solid border-line">
                <div className="relative w-fit mt-[-1.00px] opacity-50 font-heading-m font-[number:var(--heading-m-font-weight)] text-black text-[length:var(--heading-m-font-size)] tracking-[var(--heading-m-letter-spacing)] leading-[var(--heading-m-line-height)] [font-style:var(--heading-m-font-style)]">
                  YYYY
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col items-start gap-[10px] relative flex-1 grow">
              <div className="relative self-stretch w-full h-px bg-line" />
            </div>
            <img
              className="relative w-[96px] h-[96px]"
              alt="Frame"
              src="https://c.animaapp.com/GbK8U0NX/img/frame-30.svg"
            />
          </div>
          {/* <AgeDisplay /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
