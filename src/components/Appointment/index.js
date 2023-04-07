import React from "react";
import "components/Appointment/styles.scss";
import { useVisualMode } from "hooks/useVisualMode";
import Header from "./Header";
import Empty from "./Empty";
import Show from "./Show";

const Appointment = (props) => {
  const { time, interview } = props;
  // modes
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const { mode, transition, back } = useVisualMode(interview ? SHOW : EMPTY);

  return (
    <article className="appointment">
      <Header time={time} />
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && (
        <Show
          student={interview.student}
          interviewer={interview.interviewer}
          onEdit={() => console.log("Clicked Edit")}
          onDelete={() => console.log("Clicked Delete")}
        />
      )}
      {mode === CREATE && (
        <Form
          interviewers={[]}
          onSave={() => console.log("Clicked onSave")}
          onCancel={() => console.log("Clicked onCancel")}
        />
      )}
    </article>
  );
};

export default Appointment;
