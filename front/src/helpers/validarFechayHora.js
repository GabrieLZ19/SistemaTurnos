export const isDateValid = (selectedDate) => {
  const today = new Date();
  today.setDate(today.getDate() - 1);

  return selectedDate >= today;
};

export const isTimeValid = (selectedTime) => {
  const hours = selectedTime.getHours();

  return (hours >= 9 && hours < 13) || (hours >= 16 && hours < 21);
};
