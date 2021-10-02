import axios from "axios";
import {ref} from 'vue';

export function usePosts(limit) {
    const posts = ref([])
    const totalPages = ref(0)
    const isPostsLoading = ref(true)
    const fetching = async (page) => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                params: {
                    _page: page,
                    _limit: limit
                }
            });
            totalPages.value = Math.ceil(response.headers['x-total-count'] / limit)
            posts.value = response.data
        } catch (e) {
            alert('Ошибка')
        } finally {
            isPostsLoading.value = false;
        }
    }

   

    return {
        posts, isPostsLoading, totalPages,fetching
    }
}
