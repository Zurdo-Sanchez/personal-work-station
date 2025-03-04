import { useDispatch, useSelector } from "react-redux";
import {
  logoutRequest,
  loginWithGoogle,
  loginWithGitHub,
} from "../store/actions/usersActions";
import { useState } from "react";

function LoginView() {
  const dispatch = useDispatch();
  const { user, loading, error } = useSelector((state) => state.users);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <h1>{user ? `Bienvenido, ${user.email}` : "Iniciar Sesión"}</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {!user ? (
        <>
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button onClick={() => dispatch(loginWithGoogle())}>
            Iniciar con Google
          </button>
          <button onClick={() => dispatch(loginWithGitHub())}>
            Iniciar con GitHub
          </button>
        </>
      ) : (
        <button onClick={() => dispatch(logoutRequest())}>Cerrar Sesión</button>
      )}
    </div>
  );
}

export default LoginView;
