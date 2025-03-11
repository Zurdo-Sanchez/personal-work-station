import { takeLatest, put, call } from "redux-saga/effects";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth, googleProvider, githubProvider } from "../../firebase";
import * as types from "../actions/actionType/usersTypes";
import {
  loginSuccess,
  loginFailure,
  logoutSuccess,
  logoutFailure,
  registerSuccess,
  registerFailure,
  resetPasswordSuccess,
  resetPasswordFailure,
  setLoading,
  setResetPasswordSuccess,
  setLoadingSuccess,
} from "../actions/usersActions";
import { showNotification } from "../actions/notificationsActions";

// 📌 Función de registro con Email/Password
function* handleRegister(action) {
  try {
    yield put(setLoading(true));
    const { email, password } = action.payload;

    const userCredential = yield call(
      createUserWithEmailAndPassword,
      auth,
      email,
      password
    );

    yield put(registerSuccess(userCredential.user));
    yield put(
      showNotification("auth/account-created-success", "success", 3000)
    );
  } catch (error) {
    yield put(registerFailure(error.message));
    yield put(showNotification(error.code, "warning", 3000));
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
    yield put(showNotification(error.code, "warning", 3000));
  } finally {
    yield put(setLoading(false));
  }
}

// 📌 Función de login con Google
function* handleGoogleLogin() {
  try {
    yield put(setLoading(true));
    const userCredential = yield call(signInWithPopup, auth, googleProvider);
    yield put(loginSuccess(userCredential.user));
  } catch (error) {
    debugger;
    yield put(loginFailure(error.message));
    yield put(showNotification(error.code, "warning", 3000));
  } finally {
    yield put(setLoading(false));
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
    yield put(showNotification(error.code, "warning", 3000));
  } finally {
    yield put(setLoading(false));
  }
}

function* handledLoginSuccess(action) {
  yield put(setLoadingSuccess(action.payload));
}

// 📌 Función de logout
function* handleLogout() {
  try {
    yield put(setLoading(true));
    yield call(signOut, auth);
    yield put(logoutSuccess());
  } catch (error) {
    yield put(logoutFailure(error.message));
    yield put(showNotification(error.code, "warning", 3000));
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
    yield put(showNotification("auth/password-reset-success", "success", 3000));
  } catch (error) {
    yield put(resetPasswordFailure(error.message));
    yield put(setResetPasswordSuccess(false));
    yield put(showNotification(error.code, "warning", 3000));
  } finally {
    yield put(setLoading(false));
  }
}

// 📌 Manejar el fallo de la recuperación de contraseña
function* handleResetPasswordFailure(action) {
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
