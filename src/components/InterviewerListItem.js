import React from "react";

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
