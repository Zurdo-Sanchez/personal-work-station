import { connect } from "react-redux";
import TaskCalendarView from "../components/to-do/TaskCalendarView";
import { completeTask } from "../store/actions/tasksActions";
import { addCoins } from "../store/actions/coinsActions";
import { selectTasks } from "../store/selectors/tasksSelectors";
import { showNotification } from "../store/actions/notificationsActions";

const mapStateToProps = (state) => ({
  tasks: selectTasks(state),
});

const mapDispatchToProps = {
  completeTask,
  addCoins,
  showNotification,
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskCalendarView);
