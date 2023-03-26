import React from "react";
import "components/InterviewerListItem.scss";

const InterviewerListItem = (props) => {
  const { id, name, avatar } = props;

  return (
    <li className="interviewers__item">
      <img
        className="interviewers__item-image"
        src="https://i.imgur.com/LpaY82x.png"
        alt="Sylvia Palmer"
      />
      Sylvia Palmer
    </li>
  );
};

export default InterviewerListItem;
