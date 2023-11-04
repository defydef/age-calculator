import AgeDisplay from "./ui/AgeDisplay";
import Button from "./ui/Button";
import DateInputGroup from "./ui/DateInputGroup";
import { useAge } from "./contexts/AgeContext";

function App() {
  const { dispatch, day, month, year } = useAge();
  function isLeapYear(year) {
    // Leap years are divisible by 4
    if (year % 4 !== 0) {
      return false;
    }
    // years divisible by 100 are not leap years unless they are also divisible by 400
    if (year % 100 !== 0 || (year % 100 === 0 && year % 400 === 0)) {
      return true;
    }
    return false;
  }

  function getInvalidDateError(day, month, year) {
    const mon30 = [4, 6, 9, 11];
    if (
      (mon30.includes(month) && day === 31) ||
      (month === 2 && isLeapYear(year) && (day === 30 || day === 31)) ||
      (month === 2 && !isLeapYear(year) && day > 28 && day < 32)
    )
      return "Invalid date";
    return null;
  }

  function submitDOB(e) {
    e.preventDefault();
    const today = new Date();
    const submittedDate = new Date(year, month - 1, day);
    const dayError =
      day < 1 || day > 31 ? "date is not within valid range" : null;
    const monthError =
      month < 1 || month > 12 ? "month is not within valid range" : null;
    const futureDateError =
      submittedDate > today ? "date should not be in the future" : null;
    const invalidDateError = getInvalidDateError(day, month, year);

    const isValidInput =
      !dayError && !monthError && !futureDateError && !invalidDateError;

    dispatch({
      type: "submit",
      payload: isValidInput
        ? null
        : { dayError, monthError, futureDateError, invalidDateError },
    });
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
