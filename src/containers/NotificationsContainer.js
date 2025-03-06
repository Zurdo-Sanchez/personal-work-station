import { connect } from "react-redux";
import NotificationToast from "../components/NotificationToast";
import { hideNotification } from "../store/actions/notificationsActions";
import {
  getMessageNotification,
  getTypeNotification,
  getVisibleNotification,
  getDurationNotification,
} from "../store/selectors/NotificationsSelector";

const mapStateToProps = (state) => ({
  message: getMessageNotification(state),
  type: getTypeNotification(state),
  visible: getVisibleNotification(state),
  duration: getDurationNotification(state),
});

const mapDispatchToProps = (dispatch) => ({
  hideNotification: () => dispatch(hideNotification()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NotificationToast);
