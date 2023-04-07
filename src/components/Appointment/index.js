import React from "react";
import "components/Appointment/styles.scss";
import { useVisualMode } from "hooks/useVisualMode";
import Header from "./Header";
import Empty from "./Empty";
import Show from "./Show";

const Appointment = (props) => {
  const { time, interview } = props;

  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  return (
    <article className="appointment">
      <Header time={time} />
      {interview ? (
        <Show student={interview.student} interviewer={interview.interviewer} />
      ) : (
        <Empty />
      )}
    </article>
  );
};

export default Appointment;
