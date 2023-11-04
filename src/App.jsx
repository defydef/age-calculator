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
      return "Must be a valid date";
    return null;
  }

  function millisecondsToYearsMonthsDays(milliseconds) {
    const millisecondsInASecond = 1000;
    const millisecondsInAMinute = millisecondsInASecond * 60;
    const millisecondsInAnHour = millisecondsInAMinute * 60;
    const millisecondsInADay = millisecondsInAnHour * 24;

    const msPerYear = millisecondsInADay * 365.25; // 365.25 days per year on average to account for leap years
    const msPerMonth = msPerYear / 12; // Approximate number of milliseconds in a month

    const years = Math.floor(milliseconds / msPerYear);
    const months = Math.floor((milliseconds % msPerYear) / msPerMonth);
    const days = Math.floor(
      ((milliseconds % msPerYear) % msPerMonth) / millisecondsInADay
    );
    return { years, months, days };
  }

  function submitDOB(e) {
    e.preventDefault();
    const today = new Date();
    const submittedDate = new Date(year, month - 1, day);
    const dayError = day < 1 || day > 31 ? "Must be a valid day" : null;
    const monthError = month < 1 || month > 12 ? "Must be a valid month" : null;
    const futureDateError =
      submittedDate > today ? "Must be in the past" : null;
    const invalidDateError = getInvalidDateError(day, month, year);
    const requiredFieldMessage = "This field is required";
    const emptyDayError = !day ? requiredFieldMessage : null;
    const emptyMonthError = !month ? requiredFieldMessage : null;
    const emptyYearError = !year ? requiredFieldMessage : null;
    const isValidInput =
      !emptyDayError &&
      !emptyMonthError &&
      !emptyYearError &&
      !dayError &&
      !monthError &&
      !futureDateError &&
      !invalidDateError;

    const dateDiffInMilliseconds = today.getTime() - submittedDate.getTime();
    const {
      years: yearDiff,
      months: monthDiff,
      days: dayDiff,
    } = millisecondsToYearsMonthsDays(dateDiffInMilliseconds);

    // submit form input
    dispatch({
      type: "submit",
      payload: isValidInput
        ? {
            dateDiff: {
              yearDiff,
              monthDiff,
              dayDiff,
            },
          }
        : {
            errors: {
              emptyDayError,
              emptyMonthError,
              emptyYearError,
              dayError,
              monthError,
              futureDateError,
              invalidDateError,
            },
          },
    });
  }

  return (
    <div className="flex bg-[var(--light-grey)] items-center justify-center h-screen w-screen">
      <div className="flex flex-col sm:w-[840px] w-[21.4375rem] h-[80vh] items-center sm:p-[56px] bg-white rounded-[1.5rem_1.5rem_6.25rem_1.5rem] sm:rounded-[1.5rem_1.5rem_12.5rem_1.5rem] p-[3rem_1.5rem]">
        <DateInputGroup />
        {/* <div className="flex items-center relative self-stretch w-full flex-[0_0_auto]">
          <div className="hidden sm:flex flex-col items-start gap-[10px] relative flex-1 grow h-px bg-[var(--line)]"></div>
          <Button onClick={submitDOB}>
            <img
              className="relative sm:w-[96px] sm:h-[96px] w-[4rem] h-[4rem]"
              alt="Submit"
              src="https://c.animaapp.com/GbK8U0NX/img/frame-30.svg"
            />
          </Button>
        </div> */}
        {/* <AgeDisplay /> */}
      </div>
    </div>
  );
}

export default App;
