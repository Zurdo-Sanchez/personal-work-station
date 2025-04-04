import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { useSelector } from "react-redux";
import ProtectedRoute from "./routes/ ProtectedRoute";
import { getUserSelector } from "./store/selectors/UserSelector";
// Componentes
import LoginContainer from "./containers/LoginContainer";
import DashboardContainer from "./containers/DashboardContainer";
import RegisterContainer from "./containers/RegisterContainer";
import PasswordResetContainer from "./containers/PasswordResetContainer";
import ToDoContainer from "./containers/ToDoDashboardContainer";
function App() {
  const user = useSelector(getUserSelector);

  return (
    <Router>
      <Routes>
        {/* Rutas públicas */}
        <Route
          path="/login"
          element={!user ? <LoginContainer /> : <Navigate to="/dashboard" />}
        />
        <Route
          path="/register"
          element={!user ? <RegisterContainer /> : <Navigate to="/dashboard" />}
        />
        <Route path="/reset-password" element={<PasswordResetContainer />} />

        {/* Rutas protegidas */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardContainer />
            </ProtectedRoute>
          }
        />
        <Route
          path="/todo"
          element={
            <ProtectedRoute>
              <ToDoContainer />
            </ProtectedRoute>
          }
        />

        {/* Ruta por defecto */}
        <Route
          path="*"
          element={<Navigate to={user ? "/dashboard" : "/login"} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
