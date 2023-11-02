import { useState } from "react";
import AgeDisplay from "./ui/AgeDisplay";
import Button from "./ui/Button";
import DateInputGroup from "./ui/DateInputGroup";

function App() {
  function submitDOB(e) {
    e.preventDefault();
    console.log("test");
  }

  return (
    <div className="flex bg-[var(--light-grey)] items-center justify-center h-screen w-screen">
      <div className="flex flex-col sm:w-[840px] items-center p-[56px] bg-white rounded-[24px_24px_200px_24px]">
        <DateInputGroup />
        <div className="flex items-center relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col items-start gap-[10px] relative flex-1 grow h-px bg-[var(--line)]"></div>
          <Button onClick={submitDOB}>
            <img
              className="relative w-[96px] h-[96px]"
              alt="Frame"
              src="https://c.animaapp.com/GbK8U0NX/img/frame-30.svg"
            />
          </Button>
        </div>
        <AgeDisplay />
      </div>
    </div>
  );
}

export default App;
