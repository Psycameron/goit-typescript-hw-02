/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum DaysOfWeek {
  Monday = "Monday",
  Tuesday = "Tuesday",
  Wednesday = "Wednesday",
  Thursday = "Thursday",
  Friday = "Friday",
  Saturday = "Saturday",
  Sunday = "Sunday"
} 

function isWeekend(day: DaysOfWeek): boolean {
  // const weekend = [DaysOfWeek.Saturday, DaysOfWeek.Sunday];
  // return weekend.includes(day);
        if (day === DaysOfWeek.Saturday || day === DaysOfWeek.Sunday) {
    return true
  } else {
    return false
  }
}

console.log(isWeekend(DaysOfWeek.Friday))
console.log(isWeekend(DaysOfWeek.Sunday))
