export function getAppointmentsForDay(state, day) {
  // result to return at end
  const appointmentsForDay = [];
  // days array is empty
  if (state.days.length === 0) {
    return appointmentsForDay;
  }

  const filteredDay = state.days.filter((obj) => obj.name === day);

  // day is not found
  if (filteredDay.length === 0) {
    return appointmentsForDay;
  }

  const appointmentIDsForDay = filteredDay[0].appointments;
  // convert appointment obj to array
  const appointmentsArray = Object.values(state.appointments);

  for (const apptID of appointmentIDsForDay) {
    const filteredAppt = appointmentsArray.filter((obj) => obj.id === apptID);
    appointmentsForDay.push(filteredAppt[0]);
  }
  return appointmentsForDay;
}
