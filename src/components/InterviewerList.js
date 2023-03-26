import React from "react";
import "components/InterviewerList.scss";
import InterviewerListItem from "./InterviewerListItem";

const InterviewerList = (props) => {
  const { interviewers, interviewer, setInterviewer } = props;

  const interviewerListItemArr = interviewers.map((x) => {
    return (
      <InterviewerListItem
        key={x.id}
        id={x.id}
        name={x.name}
        avatar={x.avatar}
        selected={x.id === interviewer}
        setInterviewer={(event) => setInterviewer(x.id)}
      />
    );
  });

  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">{interviewerListItemArr}</ul>
    </section>
  );
};

export default InterviewerList;
