const translations = {
  en: {
    login: "Login",
    logout: "Logout",
    register: "Register",
    email: "Email",
    password: "Password",
    welcome: "Welcome",
    notifications: "Notifications",
    markAsRead: "Mark as read",
    unread: "Unread",
    read: "Read",
    goToRegister: "Sign up", // ✅ Cambiado a "Sign up" para evitar confusión
    goToLogin: "Go to Login",
    loginWithGoogle: "Login with Google",
    loginWithGitHub: "Login with GitHub",
    registerButton: "Create Account",

    // Success Messages
    "auth/account-created-success":
      "Your account has been successfully created!",

    // Firebase Authentication Errors (Email & Password)
    "auth/email-already-in-use":
      "The email address is already in use by another account.",
    "auth/invalid-email": "The email address is invalid.",
    "auth/weak-password": "The password must be at least 6 characters long.",
    "auth/missing-password": "You must enter a password.",
    "auth/missing-email": "You must enter an email address.",
    "auth/operation-not-allowed": "This authentication method is not allowed.",
    "auth/user-disabled": "This account has been disabled.",
    "auth/user-not-found": "No user found with this email.",
    "auth/wrong-password": "Incorrect password.",
    "auth/network-request-failed": "Network error, please try again.",
    "auth/too-many-requests":
      "Too many failed attempts. Please try again later.",

    // Firebase Authentication Errors (Google & GitHub)
    "auth/popup-closed-by-user":
      "Authentication popup closed before completing sign-in.",
    "auth/account-exists-with-different-credential":
      "An account already exists with this email using a different provider.",
    "auth/cancelled-popup-request":
      "Authentication request canceled due to another ongoing request.",
    "auth/credential-already-in-use":
      "This credential is already associated with another account.",
    "auth/invalid-credential": "Invalid authentication credential.",
    "auth/unauthorized-domain":
      "This authentication method is not allowed for this domain.",
    "auth/internal-error": "An internal error occurred, please try again.",
  },
  es: {
    login: "Iniciar Sesión",
    logout: "Cerrar Sesión",
    register: "Registrarse",
    email: "Correo Electrónico",
    password: "Contraseña",
    welcome: "Bienvenido",
    notifications: "Notificaciones",
    markAsRead: "Marcar como leído",
    unread: "No leído",
    read: "Leído",
    goToRegister: "Registrarse", // ✅ Corregido
    goToLogin: "Ir al Login",
    loginWithGoogle: "Iniciar con Google",
    loginWithGitHub: "Iniciar con GitHub",
    registerButton: "Crear Cuenta",

    // Mensajes de éxito
    "auth/account-created-success": "¡Tu cuenta ha sido creada exitosamente!",

    // Errores de Firebase (Correo y Contraseña)
    "auth/email-already-in-use":
      "El correo electrónico ya está en uso por otra cuenta.",
    "auth/invalid-email": "El correo electrónico no es válido.",
    "auth/weak-password": "La contraseña debe tener al menos 6 caracteres.",
    "auth/missing-password": "Debes ingresar una contraseña.",
    "auth/missing-email": "Debes ingresar un correo electrónico.",
    "auth/operation-not-allowed":
      "Este método de autenticación no está permitido.",
    "auth/user-disabled": "Esta cuenta ha sido deshabilitada.",
    "auth/user-not-found": "No se encontró un usuario con este correo.",
    "auth/wrong-password": "Contraseña incorrecta.",
    "auth/network-request-failed": "Error de red, por favor intenta de nuevo.",
    "auth/too-many-requests":
      "Demasiados intentos fallidos. Inténtalo más tarde.",

    // Errores de Firebase (Google y GitHub)
    "auth/popup-closed-by-user":
      "La ventana de autenticación se cerró antes de completar el inicio de sesión.",
    "auth/account-exists-with-different-credential":
      "Ya existe una cuenta con este correo usando otro proveedor.",
    "auth/cancelled-popup-request":
      "Se canceló la solicitud de autenticación debido a otra en curso.",
    "auth/credential-already-in-use":
      "Esta credencial ya está asociada a otra cuenta.",
    "auth/invalid-credential": "Credencial de autenticación inválida.",
    "auth/unauthorized-domain":
      "Este método de autenticación no está permitido en este dominio.",
    "auth/internal-error":
      "Ocurrió un error interno, por favor intenta nuevamente.",
  },
  // Agrega más idiomas aquí si es necesario...
};

export default translations;
