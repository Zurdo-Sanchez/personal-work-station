import { connect } from "react-redux";
import DashboardView from "../components/DashboardView";
import { logoutRequest } from "../store/actions/usersActions";
import { getUserSelector } from "../store/selectors/UserSelector";

const mapStateToProps = (state) => ({
  user: getUserSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  logoutRequest: () => dispatch(logoutRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardView);
