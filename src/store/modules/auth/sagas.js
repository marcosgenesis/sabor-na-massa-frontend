import { all, takeLatest, put, call } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '~/services/api';
import history from '~/services/history';
import { signInSuccess, signFailure } from '~/store/modules/auth/actions';

export function* signIn({ payload }) {
  try {
    const { username, password } = payload;

    const response = yield call(api.post, 'sessions', { username, password });
    const { token, user } = response.data;
    if (!user.admin) console.tron.error('Usuario não é administrador');
    yield put(signInSuccess(token, user));
    history.push('/dashboard');
  } catch (error) {
    yield put(signFailure());
    toast.error('Falha na autenticação');
  }
}
export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
