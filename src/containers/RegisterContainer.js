import { connect } from "react-redux";
import RegisterView from "../components/RegisterView";
import { registerRequest } from "../store/actions/usersActions";

const mapStateToProps = (state) => ({
  loading: state.users.loading,
  error: state.users.error,
});

const mapDispatchToProps = (dispatch) => ({
  register: (formData) => dispatch(registerRequest(formData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterView);
