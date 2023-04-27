import { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData() {
  // state data
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {},
  });
  //Fetch data from API and set state
  useEffect(() => {
    Promise.all([
      axios.get("/api/days"),
      axios.get("/api/appointments"),
      axios.get("/api/interviewers"),
    ]).then((all) => {
      setState((prev) => ({
        ...prev,
        days: all[0].data,
        appointments: all[1].data,
        interviewers: all[2].data,
      }));
    });
  }, []);
  const setDay = (day) => setState({ ...state, day });
  /**
   *
   * @param {string} day
   * @returns number of spots remaining for day
   * days contains array for appointments
   * check for interview null
   */
  const updateSpots = function (id, appointments) {
    // return days array, with updated day containing appt id
    const updatedDays = state.days.map((day) => {
      if (day.appointments.includes(id)) {
        let spots = 0;
        day.appointments.forEach((apptID) => {
          if (appointments[apptID].interview === null) {
            spots++;
          }
        });
        // return days for which spots was updated
        return {
          ...day,
          spots,
        };
      }
      // return days for which spots were not updates
      return day;
    });
    return updatedDays;
  };
  /**
   *
   * @param {number} id -> appointment id
   * @param {object} interview
   * @returns a promise and sets the state for appointments
   */
  const bookInterview = function (id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview },
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };
    const days = updateSpots(id, appointments);
    return axios.put(`/api/appointments/${id}`, appointment).then(() => {
      setState({
        ...state,
        appointments,
        days,
      });
    });
  };
  /**
   *
   * @param {number} id
   * @returns a promise and sets the state for appointments
   */
  const cancelInterview = function (id) {
    const appointment = {
      ...state.appointments[id],
      interview: null,
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };
    const days = updateSpots(id, appointments);
    return axios.delete(`/api/appointments/${id}`).then(() => {
      setState({
        ...state,
        appointments,
        days,
      });
    });
  };

  return {
    state,
    setDay,
    bookInterview,
    cancelInterview,
  };
}
