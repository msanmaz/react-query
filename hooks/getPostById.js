import { useQuery } from '@tanstack/react-query';
import * as api from 'lib/getpost';

export const usePost = (id) => {
    return useQuery(['post', id], () => api.getPost(id));
}


export const usePosts = () => {
    return useQuery(['posts'], () => api.getPosts());
}