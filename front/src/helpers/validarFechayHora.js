export const isDateValid = (selectedDate) => {
  const today = new Date();
  today.getDay() + 1;

  if (
    selectedDate >= today &&
    selectedDate.getDay() >= 0 &&
    selectedDate.getDay() <= 4
  ) {
    return true;
  }
};

export const isTimeValid = (selectedTime) => {
  const hours = selectedTime.getHours();

  return (hours >= 9 && hours < 13) || (hours >= 16 && hours < 21);
};
