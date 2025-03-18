import {
  TOGGLE_SIDEBAR,
  OPEN_SIDEBAR,
  CLOSE_SIDEBAR,
} from "./actionType/sidebarActionTypes";

export const toggleSidebar = () => ({
  type: TOGGLE_SIDEBAR,
});

export const openSidebar = () => ({
  type: OPEN_SIDEBAR,
});

export const closeSidebar = () => ({
  type: CLOSE_SIDEBAR,
});
