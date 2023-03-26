import React from "react";
import classNames from "classnames";
import "components/InterviewerListItem.scss";

const InterviewerListItem = (props) => {
  const { id, name, avatar, selected, setInterviewer } = props;

  const interviewerClass = classNames("interviewers__item", {
    "interviewers__item--selected": selected,
  });

  return (
    <li className={interviewerClass} onClick={setInterviewer}>
      <img
        className="interviewers__item-image"
        src={avatar}
        alt="Sylvia Palmer"
      />
      {selected ? name : ""}
    </li>
  );
};

export default InterviewerListItem;
