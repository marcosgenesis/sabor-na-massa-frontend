import { combineReducers } from 'redux';
import auth from './auth/reducer';
import user from './user/reducer';
import post from './post/reducer';

export default combineReducers({ auth, user, post });
