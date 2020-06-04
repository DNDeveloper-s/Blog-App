import axios from '../axios-blog';

const fetchSinglePost = (postId) => {
    return axios.get('/fetchPost?postId=' + postId);
};

export default fetchSinglePost;