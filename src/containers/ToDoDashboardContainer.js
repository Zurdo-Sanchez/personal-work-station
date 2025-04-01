import { connect } from "react-redux";
import ToDoDashboardView from "../components/to-do/ToDoDashboardView";
import { setOrderCard } from "../store/actions/configActions";
import { getUserSelector } from "../store/selectors/UserSelector";
import { getOrderCardsSelector } from "../store/selectors/ConfigSelector ";

const mapStateToProps = (state) => ({
  user: getUserSelector(state),
  orderCard: getOrderCardsSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  setOrderCard: (orderCard) => dispatch(setOrderCard(orderCard)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ToDoDashboardView);
