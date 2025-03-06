import { takeLatest, put, call } from "redux-saga/effects";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth, googleProvider, githubProvider } from "../../firebase";
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  LOGIN_WITH_GOOGLE,
  LOGIN_WITH_GITHUB,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
} from "../actions/actionType/usersTypes";
import {
  loginSuccess,
  loginFailure,
  logoutSuccess,
  logoutFailure,
  registerSuccess,
  registerFailure,
} from "../actions/usersActions";

// Función de registro con Email/Password
function* handleRegister(formData) {
  try {
    const { email, password } = formData.payload;
    debugger;
    const userCredential = yield call(
      createUserWithEmailAndPassword,
      auth,
      email,
      password
    );
    yield put(registerSuccess(userCredential.user));
  } catch (error) {
    yield put(registerFailure(error.message));
  }
}

// Función de login con Email/Password
function* handleLogin(action) {
  try {
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
  }
}

// Función de login con Google
function* handleGoogleLogin() {
  try {
    const userCredential = yield call(signInWithPopup, auth, googleProvider);
    yield put(loginSuccess(userCredential.user));
  } catch (error) {
    yield put(loginFailure(error.message));
  }
}

// Función de login con GitHub
function* handleGitHubLogin() {
  try {
    const userCredential = yield call(signInWithPopup, auth, githubProvider);
    yield put(loginSuccess(userCredential.user));
  } catch (error) {
    yield put(loginFailure(error.message));
  }
}

// Función de logout
function* handleLogout() {
  try {
    yield call(signOut, auth);
    yield put(logoutSuccess());
  } catch (error) {
    yield put(logoutFailure(error.message));
  }
}

// Watcher Sagas
export default function* watchUsersSaga() {
  yield takeLatest(REGISTER_REQUEST, handleRegister);
  yield takeLatest(LOGIN_REQUEST, handleLogin);
  yield takeLatest(LOGIN_WITH_GOOGLE, handleGoogleLogin);
  yield takeLatest(LOGIN_WITH_GITHUB, handleGitHubLogin);
  yield takeLatest(LOGOUT_REQUEST, handleLogout);
}
