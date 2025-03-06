import { connect } from "react-redux";
import LoginView from "../components/LoginView";
import {
  loginRequest,
  loginWithGoogle,
  loginWithGitHub,
  logoutRequest,
} from "../store/actions/usersActions";

const mapStateToProps = (state) => ({
  user: state.users.user,
  loading: state.users.loading,
  error: state.users.error,
});

const mapDispatchToProps = (dispatch) => ({
  loginRequest: (email, password) => dispatch(loginRequest(email, password)),
  loginWithGoogle: () => dispatch(loginWithGoogle()),
  loginWithGitHub: () => dispatch(loginWithGitHub()),
  logoutRequest: () => dispatch(logoutRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginView);
