import React, { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import useStyles, { calendarStyleValues } from "../../styles/calendarStyles";

const TaskCalendarView = ({
  tasks,
  completeTask,
  addCoins,
  showNotification,
}) => {
  const classes = useStyles();
  const [events, setEvents] = useState([]);
  const todayStr = new Date().toISOString().split("T")[0];

  const exampleTasks = [
    {
      id: "1",
      title: "Tarea de Matemáticas",
      date: "2025-04-02",
      coins: 5,
      completed: false,
    },
    {
      id: "2",
      title: "Leer 10 páginas",
      date: "2025-04-04",
      coins: 3,
      completed: true,
    },
    {
      id: "3",
      title: "Ayudar a poner la mesa",
      date: "2025-04-06",
      coins: 2,
      completed: true,
    },
  ];

  useEffect(() => {
    const source = tasks.length > 0 ? tasks : exampleTasks;

    const mapped = source.map((task) => ({
      id: task.id,
      title: task.title,
      start: task.date || new Date(),
      backgroundColor: task.completed ? "#d4edda" : "",
      extendedProps: {
        coins: task.coins,
        completed: task.completed,
      },
    }));

    setEvents(mapped);
  }, [tasks]);

  const handleEventClick = ({ event }) => {
    if (!event.extendedProps.completed) {
      completeTask(event.id);
      addCoins(event.extendedProps.coins);
      event.setProp("backgroundColor", "#d4edda");
      event.setExtendedProp("completed", true);
    }
  };

  const handleDateSelect = (info) => {
    alert("Crear tarea en: " + info.startStr);
  };

  const handleEventDrop = (info) => {
    showNotification("Tarea movida a: " + info.event.startStr, "success", 1500);
  };

  const decorateDayCell = (args) => {};

  const renderEventContent = (eventInfo) => {
    const { title, extendedProps } = eventInfo.event;

    return (
      <div className={classes.eventContentContainer}>
        <strong>{title}</strong>
        <div className={classes.eventDetails}>
          🪙 {extendedProps.coins}
          {extendedProps.completed ? "✅ Completada" : "⏳ Pendiente"}
        </div>
      </div>
    );
  };

  return (
    <div className={classes.calendarWrapper}>
      <h2 className={classes.calendarTitle}>Calendario de Tareas</h2>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          start: "prev,next today",
          center: "title",
          end: "dayGridMonth,dayGridWeek",
        }}
        events={events}
        editable={true}
        selectable={true}
        selectMirror={true}
        dayMaxEvents={true}
        eventContent={renderEventContent}
        eventClick={handleEventClick}
        select={handleDateSelect}
        eventDrop={handleEventDrop}
        dayCellDidMount={decorateDayCell}
        height="auto"
      />
    </div>
  );
};

export default TaskCalendarView;
