import React from "react";
import TodoCalendar from "../../containers/TaskCalendarContainer";
import classes from "../../styles/calendarStyles";

const TodoDashboardView = () => {
  return (
    <>
      <TodoCalendar className={classes.calendarContainer} />
    </>
  );
};

export default TodoDashboardView;
