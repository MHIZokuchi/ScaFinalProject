const reducer = (posts = [], action) => {  //always initialize the state(posts) to an empty array.. 

    switch (action.type) {

        case 'FETCH_ALL':
            return action.payload;

        case 'CREATE_POST':
            return [...posts, action.payload];  //update with current payload data...

        case 'UPDATE_POST': //if posts._id is = payloads.id ~ return action.payload(the updated post) else - old post..
            return posts.map(post => post._id === action.payload._id ? action.payload : post);

        default:
            return posts;

    }

}


//export the reducer... 
export default reducer;