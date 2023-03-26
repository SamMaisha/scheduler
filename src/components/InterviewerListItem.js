import React from "react";
import "components/InterviewerListItem.scss";

const InterviewerListItem = (props) => {
  const { id, name, avatar, setInterviewer } = props;

  return (
    <li className="interviewers__item" onClick={() => setInterviewer(id)}>
      <img
        className="interviewers__item-image"
        src={avatar}
        alt="Sylvia Palmer"
      />
      {name}
    </li>
  );
};

export default InterviewerListItem;
