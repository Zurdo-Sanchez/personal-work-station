function DashboardView({ user, logoutRequest }) {
  return (
    <>
      <h1>
        Bienvenido, {user.displayName ? user.displayName : user.firstname}
      </h1>
      <button onClick={logoutRequest}>Cerrar Sesión</button>
    </>
  );
}

export default DashboardView;
