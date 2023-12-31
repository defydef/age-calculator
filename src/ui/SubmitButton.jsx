import { useAge } from "../contexts/AgeContext";
import Button from "./Button";

function SubmitButton() {
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
    <div className="m-auto flex justify-center">
      <Button onClick={submitDOB}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="46"
          height="44"
          viewBox="0 0 46 44"
        >
          <g fill="none" stroke="#FFF" strokeWidth="2">
            <path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44" />
          </g>
        </svg>
      </Button>
    </div>
  );
}

export default SubmitButton;
