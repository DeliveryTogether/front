import {combineReducers} from 'redux';
import PostReducer from './PostReducer'; 
import  MakerReducer from './MakerReducer';
import UserReducer from './UserReducer';

const rootReducer = combineReducers({
    marker = MakerReducer,
    post = PostReducer,
    user = UserReducer,
});

export default rootReducer;