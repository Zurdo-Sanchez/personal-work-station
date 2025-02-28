import { takeLatest, put, call } from "redux-saga/effects";
import {
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
} from "../actions/actionType/usersTypes";
import {
  loginSuccess,
  loginFailure,
  logoutSuccess,
  logoutFailure,
} from "../actions/usersActions";

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
  yield takeLatest(LOGIN_REQUEST, handleLogin);
  yield takeLatest(LOGIN_WITH_GOOGLE, handleGoogleLogin);
  yield takeLatest(LOGIN_WITH_GITHUB, handleGitHubLogin);
  yield takeLatest(LOGOUT_REQUEST, handleLogout);
}
