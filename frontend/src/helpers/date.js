const dayOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const monthWord = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const getDayOfWeek = (day) => {
  return dayOfWeek[day.getDay() + 1];
}

const getMonthNumberToString = (day) => {
  const month = day.getMonth();
  return monthWord[month];
}

export{ getDayOfWeek, getMonthNumberToString }