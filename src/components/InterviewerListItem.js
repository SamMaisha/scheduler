import React from "react";
import "components/InterviewerListItem.scss";

const InterviewerListItem = (props) => {
  const { id, name, avatar } = props;

  return (
    <li className="interviewers__item">
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
