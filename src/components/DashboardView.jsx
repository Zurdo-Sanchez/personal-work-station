import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  recomposeColor,
} from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import ListAltIcon from "@mui/icons-material/ListAlt";
import NoteOutlinedIcon from "@mui/icons-material/NoteOutlined";
import useStyles from "../styles/DashboardStyles";
import { colors } from "../themes/colors";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

// Función para reordenar los elementos por id
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

function DashboardView({ user, orderCard, setOrderCard }) {
  const classes = useStyles();

  // Estado para el orden de los IDs
  const [moduleOrder, setModuleOrder] = useState(
    orderCard ? orderCard : [1, 2, 3]
  );

  // Los módulos se mantienen fijos, solo se usa el orden de los IDs
  const modules = [
    {
      id: 1,
      icon: <MailOutlineIcon style={{ fontSize: 50, color: "#4A90E2" }} />,
      title: "Emails",
      path: "/emails",
      backgroundColor: colors.bgEmailCard,
    },
    {
      id: 2,
      icon: <ListAltIcon style={{ fontSize: 50, color: "#50E3C2" }} />,
      title: "To-Do",
      path: "/todo",
      backgroundColor: colors.bgToDoCard,
    },
    {
      id: 3,
      icon: <NoteOutlinedIcon style={{ fontSize: 50, color: "#F5A623" }} />,
      title: "Notas",
      path: "/notes",
      backgroundColor: colors.bgNoteCard,
    },
  ];

  const handleOnDragEnd = (result) => {
    const { destination, source } = result;
    if (!destination) return; // Si no se suelta en un lugar válido, no hacer nada
    if (destination.index === source.index) return; // Si no hay cambio de lugar, no hacer nada

    // Reordenar el array de IDs
    const reorderedModuleOrder = reorder(
      moduleOrder,
      source.index,
      destination.index
    );
    setModuleOrder(reorderedModuleOrder);
    console.log(reorderedModuleOrder);
    setOrderCard(reorderedModuleOrder);
  };

  const navigateTo = (path) => {
    window.location.href = path;
  };

  return (
    <div className={classes.container}>
      <Typography className={classes.title}>
        Bienvenido, {user.displayName || user.firstname}
      </Typography>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="droppable" direction="horizontal">
          {(provided) => (
            <Grid
              container
              className={classes.grid}
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {moduleOrder.map((id, index) => {
                const module = modules.find((mod) => mod.id === id); // Encuentra el módulo por ID
                return (
                  <Draggable
                    key={module.id}
                    draggableId={String(module.id)}
                    index={index}
                  >
                    {(provided) => (
                      <Grid
                        item
                        xs={12}
                        sm={3.7}
                        md={3.8}
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        key={module.id}
                      >
                        <Card
                          className={classes.card}
                          onClick={() => navigateTo(module.path)}
                          style={{ backgroundColor: module.backgroundColor }}
                        >
                          <CardContent className={classes.cardContent}>
                            {module.icon}
                            <Typography>{module.title}</Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </Grid>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default DashboardView;
