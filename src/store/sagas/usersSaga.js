import { takeLatest, put, call } from "redux-saga/effects";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  sendPasswordResetEmail,
} from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { auth, googleProvider, githubProvider, db } from "../../firebase";
import { persistStore } from "redux-persist";
import { store } from "../../store";
import * as types from "../actions/actionType/usersTypes";
import {
  loginSuccess,
  loginFailure,
  logoutSuccess,
  logoutFailure,
  setUserCreated,
  registerFailure,
  resetPasswordSuccess,
  resetPasswordFailure,
  setLoading,
  setUser,
  setResetPasswordSuccess,
} from "../actions/usersActions";
import { showNotification } from "../actions/notificationsActions";

// 📌 Función de registro con Email/Password
function* handleRegister(action) {
  try {
    yield put(setLoading(true));

    const {
      firstName,
      lastName,
      email,
      password,
      phone,
      birthdate,
      country,
      city,
      avatar,
      linkedIn,
      gitHub,
    } = action.payload;

    // Crear usuario en Firebase Authentication
    const userCredential = yield call(
      createUserWithEmailAndPassword,
      auth,
      email,
      password
    );

    const user = userCredential.user;

    // Guardar información en Firestore
    yield call(setDoc, doc(db, "users", user.email), {
      uid: user.uid,
      firstName,
      lastName,
      displayName: firstName + " " + lastName,
      email,
      phone,
      birthdate,
      country,
      city,
      avatar: avatar || "",
      linkedIn: linkedIn || "",
      gitHub: gitHub || "",
      createdAt: new Date(),
    });

    yield put(setUserCreated(true));
    yield put(showNotification("Cuenta creada con éxito", "success", 5000));
  } catch (error) {
    yield put(registerFailure(error.message));
    yield put(showNotification(error.code, "warning", 5000));
  } finally {
    yield put(setLoading(false));
  }
}

// 📌 Función de login con Email/Password
function* handleLogin(action) {
  try {
    yield put(setLoading(true));
    const { email, password } = action.payload;

    const userCredential = yield call(
      signInWithEmailAndPassword,
      auth,
      email,
      password
    );

    yield put(loginSuccess(userCredential.user));
  } catch (error) {
    yield put(loginFailure(error.message));
    yield put(showNotification(error.code, "warning", 5000));
  }
}

// 📌 Función de login con Google
function* handleGoogleLogin() {
  try {
    yield put(setLoading(true));
    const userCredential = yield call(signInWithPopup, auth, googleProvider);
    yield put(loginSuccess(userCredential.user));
  } catch (error) {
    yield put(loginFailure(error.message));
    yield put(showNotification(error.code, "warning", 5000));
  }
}

// 📌 Función de login con GitHub
function* handleGitHubLogin() {
  try {
    yield put(setLoading(true));
    const userCredential = yield call(signInWithPopup, auth, githubProvider);
    yield put(loginSuccess(userCredential.user));
  } catch (error) {
    yield put(loginFailure(error.message));
    yield put(showNotification(error.code, "warning", 5000));
  }
}

// 📌 Función que se ejecuta al iniciar sesión y verifica si el usuario existe en Firestore
function* handledLoginSuccess(action) {
  try {
    const user = action.payload;

    if (!user || !user.email) {
      throw new Error("No se encontró el email del usuario.");
    }

    // Verificar si el usuario ya está en Firestore
    const userDocRef = doc(db, "users", user.email);
    const userDoc = yield call(getDoc, userDocRef);

    if (!userDoc.exists()) {
      // Si el usuario no existe, guardarlo en Firestore
      yield call(setDoc, userDocRef, {
        uid: user.uid,
        firstName: user.displayName?.split(" ")[0] || "",
        lastName: user.displayName?.split(" ").slice(1).join(" ") || "",
        email: user.email,
        displayName: user.displayName || "",
        phone: user.phoneNumber || "",
        avatar: user.photoURL || "",
        createdAt: new Date(),
      });
      yield put(
        showNotification("Bienvenido, se ha creado tu perfil", "success", 5000)
      );
    } else {
      yield call(setDoc, userDocRef, {
        uid: user.uid,
        firstName: user.displayName?.split(" ")[0] || "",
        lastName: user.displayName?.split(" ").slice(1).join(" ") || "",
        displayName: user.displayName || "",
        phone: user.phoneNumber || "",
        avatar: user.photoURL || "",
        updateAt: new Date(),
      });
    }

    yield put(setUser(user));
  } catch (error) {
    yield put(showNotification(error.message, "warning", 5000));
  }
}

// 📌 Función de logout con eliminación de persistencia
function* handleLogout() {
  try {
    yield put(setLoading(true));

    // Cerrar sesión en Firebase
    yield call(signOut, auth);

    // Borrar el usuario de Redux
    yield put(setUser(null));

    // Borrar la persistencia de Redux
    const persistor = persistStore(store);
    yield call([persistor, persistor.purge]);

    yield put(
      showNotification("Sesión cerrada correctamente", "success", 5000)
    );
    yield put(logoutSuccess());
  } catch (error) {
    yield put(logoutFailure(error.message));
    yield put(showNotification(error.code, "warning", 5000));
  } finally {
    yield put(setLoading(false));
  }
}

// 📌 Función de recuperación de contraseña
function* handleResetPassword(action) {
  try {
    yield put(setLoading(true));
    yield call(sendPasswordResetEmail, auth, action.payload);
    yield put(resetPasswordSuccess());
    yield put(setResetPasswordSuccess(true));
    yield put(
      showNotification("Correo de recuperación enviado", "success", 5000)
    );
  } catch (error) {
    yield put(resetPasswordFailure(error.message));
  } finally {
    yield put(setLoading(false));
  }
}

// 📌 Manejar el fallo de la recuperación de contraseña
function* handleResetPasswordFailure(action) {
  yield put(showNotification(action, "warning", 5000));
  yield put(setResetPasswordSuccess(false));
}

// 📌 Watcher Sagas
export default function* watchUsersSaga() {
  yield takeLatest(types.REGISTER_REQUEST, handleRegister);
  yield takeLatest(types.LOGIN_REQUEST, handleLogin);
  yield takeLatest(types.LOGIN_WITH_GOOGLE, handleGoogleLogin);
  yield takeLatest(types.LOGIN_WITH_GITHUB, handleGitHubLogin);
  yield takeLatest(types.LOGOUT_REQUEST, handleLogout);
  yield takeLatest(types.RESET_PASSWORD_REQUEST, handleResetPassword);
  yield takeLatest(types.RESET_PASSWORD_FAILURE, handleResetPasswordFailure);
  yield takeLatest(types.LOGIN_SUCCESS, handledLoginSuccess);
}
