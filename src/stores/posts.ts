import { defineStore } from "pinia";
import Post from "../types/post";
import PostResponse from "../types/post-response";
import { PostID } from "../types/alias";

const postEndpoint = 'https://dummyjson.com/posts'

export const usePostsStore = defineStore('posts', {
    state: () => ({ 
        posts: [] as Post[]
    }),
    getters: {
        getAll: (state) => state.posts,
        getFirstFive: (state) => state.posts.slice(0, 5)
    },
    actions: {
        async loadAll() {
            fetch(postEndpoint)
                .then(responseMetaData => responseMetaData.json() as Promise<PostResponse>)
                .then(serverResponse => this.posts = serverResponse.posts)
        },

        async loadByID(id: PostID): Promise<Post> {
            return fetch(`${postEndpoint}/${id}`)
                .then(responseMetaData => responseMetaData.json() as Promise<Post>)
                .then(post => post)
        }
    },
})
