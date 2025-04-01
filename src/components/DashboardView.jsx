import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  useMediaQuery,
} from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import ListAltIcon from "@mui/icons-material/ListAlt";
import NoteOutlinedIcon from "@mui/icons-material/NoteOutlined";
import useStyles from "../styles/DashboardStyles";
import { colors } from "../themes/colors";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

function DashboardView({ user }) {
  const classes = useStyles();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm")); // Detecta pantalla chica

  const navigate = useNavigate();
  const [moduleOrder, setModuleOrder] = useState([1, 2, 3]);

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
    if (!destination || destination.index === source.index) return;
    const reorderedModuleOrder = reorder(
      moduleOrder,
      source.index,
      destination.index
    );
    setModuleOrder(reorderedModuleOrder);
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
        <Droppable
          droppableId="droppable"
          direction={isSmallScreen ? "vertical" : "horizontal"} // ✅ cambia según tamaño
        >
          {(provided) => (
            <Grid
              container
              className={classes.grid}
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {moduleOrder.map((id, index) => {
                const module = modules.find((mod) => mod.id === id);
                return (
                  <Draggable
                    key={module.id}
                    draggableId={module.id.toString()}
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
                          onClick={() => navigate(module.path)}
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
