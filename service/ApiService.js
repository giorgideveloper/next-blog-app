import axios from 'axios';

const instance = axios.create({
	baseUrl: 'https://jsonplaceholder.typicode.com',
	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json',
	},
});

export const getPosts = () => instance.get('/posts');
export const getPostById = id => instance.get(`/posts${id}`);
export const getUserById = id => instance.get(`/users/${id}`);
export const getCommentById = id => instance.get(`/posts/${id}/comments`);
