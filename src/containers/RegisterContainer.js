import { connect } from "react-redux";
import RegisterView from "../components/RegisterView";
import { registerRequest, setUserCreated } from "../store/actions/usersActions";
import {
  getAuthLoadingSelector,
  getAuthErrorSelector,
  getUserCreatedSelector,
} from "../store/selectors/UserSelector";

const mapStateToProps = (state) => ({
  loading: getAuthLoadingSelector(state),
  error: getAuthErrorSelector(state),
  getUserCreated: getUserCreatedSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  register: (formData) => dispatch(registerRequest(formData)),
  setUserCreated: (userCreated) => dispatch(setUserCreated(userCreated)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterView);
