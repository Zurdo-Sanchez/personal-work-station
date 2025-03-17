import { connect } from "react-redux";
import DasboardView from "../components/DashboardView";
import { setOrderCard } from "../store/actions/configActions";
import { getUserSelector } from "../store/selectors/UserSelector";
import { getOrderCardsSelector } from "../store/selectors/ConfigSelector ";

const mapStateToProps = (state) => ({
  user: getUserSelector(state),
  orderCard: getOrderCardsSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  setOrderCard: () => dispatch(setOrderCard()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DasboardView);
