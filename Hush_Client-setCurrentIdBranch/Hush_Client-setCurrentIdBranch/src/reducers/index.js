import { combineReducers } from 'redux';
import posts from './posts';

//if object { key and value} is the same... then you can choose to keep the first one..  { posts:posts } = {posts}

export default combineReducers({ posts });       //all the indivisual reducers.. 

