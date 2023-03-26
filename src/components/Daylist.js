import React from "react";
import DayListItem from "./DayListItem";

const DayList = (props) => {
  const { days, value, onChange } = props;

  const dayListItemArr = days.map((day) => {
    return (
      <DayListItem
        key={day.id}
        name={day.name}
        spots={day.spots}
        selected={day.name === value}
        setDay={() => onChange(day.name)}
      />
    );
  });

  return <ul>{dayListItemArr}</ul>;
};

export default DayList;
