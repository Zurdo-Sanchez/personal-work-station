import { connect } from "react-redux";
import TaskCardView from "../components/to-do/TaskCardView";
import {
  resetPasswordRequest,
  setResetPasswordSuccess,
} from "../store/actions/usersActions";
import {
  getPasswordResetSuccessSelector,
  getAuthLoadingSelector,
  getAuthErrorSelector,
} from "../store/selectors/UserSelector";

const mapStateToProps = (state) => ({
  loading: getAuthLoadingSelector(state),
  error: getAuthErrorSelector(state),
  getPasswordResetSuccessSelector: getPasswordResetSuccessSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  resetPassword: (email) => dispatch(resetPasswordRequest(email)),
  setResetPasswordSuccess: (value) => dispatch(setResetPasswordSuccess(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskCardView);
