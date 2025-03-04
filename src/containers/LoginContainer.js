import { connect } from "react-redux";
import LoginView from "../components/LoginView";
import {
  loginRequest,
  loginWithGitHub,
  loginWithGoogle,
} from "../store/actions/usersActions";

const mapStateToProps = (state) => ({
  loading: state.users.loading,
  error: state.users.error,
});

const mapDispatchToProps = (dispatch) => ({
  loginRequest: (email, password) => dispatch(loginRequest(email, password)),
  loginWithGoogle: () => dispatch(loginWithGoogle()),
  loginWithGitHub: () => dispatch(loginWithGitHub()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginView);
