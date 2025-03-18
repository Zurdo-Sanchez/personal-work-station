import { connect } from "react-redux";
import SidebarView from "../components/SidebarView";
import { toggleSidebar } from "../store/actions/sidebarActions";

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  toggleSidebar,
};

export default connect(mapStateToProps, mapDispatchToProps)(SidebarView);
