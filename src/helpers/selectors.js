// Function to return appointments for a specific day as an object
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

// Function to return new object containing interview data when passed an object that contains an interviewer; else return null
export function getInterview(state, interview) {
  let interviewObj = null;

  if (interview === null) {
    return interviewObj;
  }

  if (interview.interviewer) {
    const interviewerID = interview.interviewer;
    interviewObj = {
      student: interview.student,
      interviewer: {
        id: state.interviewers[interviewerID].id,
        name: state.interviewers[interviewerID].name,
        avatar: state.interviewers[interviewerID].avatar,
      },
    };
  }

  return interviewObj;
}
