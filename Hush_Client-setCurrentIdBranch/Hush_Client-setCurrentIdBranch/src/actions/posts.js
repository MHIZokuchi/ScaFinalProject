import * as api from '../api/index'; //import everything - api.fetchPosts.. 

//Action Creators... 

export const getPosts = () => async (dispatch) => {            //async(dispatch) ~ from redux-thunk.

    try {
        const { data } = await api.fetchPosts();                            //get the data from the api in the action creators... 
        dispatch({ type: 'FETCH_ALL', payload: data });                     //dispatch the data as the payload to the reducer.....
    } catch (error) {
        console.log(error.message);
    }

};

export const updatePost = (id, post) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(id, post);
        dispatch({ type: 'UPDATE_POST', payload: data });
    } catch (error) {
        console.log(error.message);
    }
}


export const createPost = (postdata) => async (dispatch) => {
    try {
        const { data } = await api.createPost(postdata);
        dispatch({ type: 'CREATE_POST', payload: data });
    } catch (error) {
        console.log(error.message);
    }
}

/*

    //if you are not loading asynchronous data... (takes time for the data to persist... )

    const getPosts = () => {
        const action = { type: 'FETCH_ALL', payload: data };
        return action.
    }



*/


//action creators - are actions that return functions.... 
