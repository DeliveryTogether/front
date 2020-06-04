import axios from 'axios';

export const FETCH_POST = 'FETCH_POST';
export const FETCH_USER = 'FETCH_USER';
export const FETCH_MARKERS = 'FETCH_MARKERS';

const URL = 'https://url';

export const fetchPostData = (data) =>{
    return {
        type : FETCH_POST,
        data
    }
}
    
//user별로 나누기 
export const fetchPostList = () => {
    return (dispatch) => {
        return axios.get(`${URL}/posts/`)
                    .then(response => {
                        dispatch(fetchPostData(response.data))
                    })
                    .catch(error=> {
                        throw(error);
                    });
    }
}