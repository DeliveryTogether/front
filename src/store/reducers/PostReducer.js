import {FETCH_POST} from './actions/index';


const PostReducer = (state = [], action) =>{

    switch(action.type){
        case FETCH_POST : 
            return {
                Post : [
                    ...state,
                    action.data,
                ]
            }
        case UPDATE_POST :
            const index = state.posts.findIndex(
                post => post.id === ??
            )
            return {
                //포스트 상태 변경 
            }
        return state 
    }

}

export default PostReducer 
