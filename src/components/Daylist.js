import React from "react";
import DayListItem from "./DayListItem";

const DayList = (props) => {
  const { days, day, setDay } = props;

  const dayListItemArr = days.map((x) => {
    return (
      <DayListItem
        key={x.id}
        name={x.name}
        spots={x.spots}
        selected={x.name === day}
        setDay={setDay}
      />
    );
  });

  return <ul>{dayListItemArr}</ul>;
};

export default DayList;
