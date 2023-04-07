/**
 *
 * @param {object} state
 * @param {string} day
 * @returns appointments as object
 */
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
  // array of appointment ids
  const appointmentIDsForDay = filteredDay[0].appointments;
  // convert appointment obj to array
  const appointmentsArray = Object.values(state.appointments);
  for (const apptID of appointmentIDsForDay) {
    const filteredAppt = appointmentsArray.filter((obj) => obj.id === apptID);
    appointmentsForDay.push(filteredAppt[0]);
  }
  return appointmentsForDay;
}

/**
 *@param {object} state
 * @param {string} day
 * @returns interviewers as object
 */
export function getInterviewersForDay(state, day) {
  // result to return at end
  const interviewersForDay = [];
  // days array is empty
  if (state.days.length === 0) {
    return interviewersForDay;
  }
  const filteredDay = state.days.filter((obj) => obj.name === day);
  // day is not found
  if (filteredDay.length === 0) {
    return interviewersForDay;
  }
  // array or interviewer ids
  const interviewerIDsForDay = filteredDay[0].interviewers;

  // convert interviewer data from obj to array
  const interviewersArray = Object.values(state.interviewers);

  for (const interviewerID of interviewerIDsForDay) {
    const filteredInterviewers = interviewersArray.filter(
      (obj) => obj.id === interviewerID
    );
    interviewersForDay.push(filteredInterviewers[0]);
  }
  return interviewersForDay;
}

/**
 *
 * @param {object} state
 * @param {object} interview
 * @returns new object containing interview data when interview.interviewer is true; else returns null
 */
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
