import { connect } from "react-redux";
import LoaderView from "../components/LoaderView";
import { getAuthLoadingSelector } from "../store/selectors/UserSelector";

const mapStateToProps = (state) => ({
  loading: getAuthLoadingSelector(state),
});

export default connect(mapStateToProps)(LoaderView);
