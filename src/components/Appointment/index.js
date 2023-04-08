import React from "react";
import "components/Appointment/styles.scss";
import { useVisualMode } from "hooks/useVisualMode";
import Header from "./Header";
import Empty from "./Empty";
import Show from "./Show";
import Form from "./Form";
import Status from "./Status";

const Appointment = (props) => {
  const { id, time, interview, interviewers, bookInterview } = props;
  // modes and custom hook
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const SAVING = "SAVING";
  const { mode, transition, back } = useVisualMode(interview ? SHOW : EMPTY);

  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer,
    };
    transition(SAVING);
    bookInterview(id, interview);
    transition(SHOW);
  }

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
          interviewers={interviewers}
          onSave={save}
          onCancel={() => back()}
        />
      )}
      {mode === SAVING && <Status message="Saving..." />}
    </article>
  );
};

export default Appointment;
