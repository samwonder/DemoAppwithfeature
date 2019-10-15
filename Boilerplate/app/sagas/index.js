import { fork } from 'redux-saga/effects';
import { sagaMiddleware } from '../store';
import startUpSaga from './startUpSaga';
import authenticationSaga from './Authentication/authenticationSaga';
import forgotPasswordSaga from './ForgotPassword/forgotPasswordSaga';

function* root() {
    fork(startUpSaga);
    yield fork(authenticationSaga);
    yield fork(forgotPasswordSaga);
}

const run = () => sagaMiddleware.run(root);

export default run;
