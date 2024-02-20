import { axiosClient } from '../axiosClient.ts';
import { PostsReturnType } from '../../types.ts';

export const getPosts = async (search: string, page: number) => {
	return await axiosClient.get<PostsReturnType>(`/v2/top-headlines?country=ua`, {
		params: {
			q: search,
			page,
			pageSize: 10
		}
	});
};
