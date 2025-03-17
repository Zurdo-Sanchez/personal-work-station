import { connect } from "react-redux";
import HeaderView from "../components/HeaderView";
import { logoutRequest } from "../store/actions/usersActions";
import { getUserSelector } from "../store/selectors/UserSelector";
import { setTheme, setLanguage } from "../store/actions/configActions";
import {
  getThemeSelector,
  getLanguageSelector,
} from "../store/selectors/ConfigSelector ";

const mapStateToProps = (state) => ({
  user: getUserSelector(state),
  getTheme: getThemeSelector(state),
  getLenguage: getLanguageSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  logoutRequest: () => dispatch(logoutRequest()),
  setTheme: (theme) => dispatch(setTheme(theme)),
  setLanguage: (language) => dispatch(setLanguage(language)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderView);
