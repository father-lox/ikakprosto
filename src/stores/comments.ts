import { defineStore } from "pinia";
import { PostID } from "../types/alias";
import CommentResponse from "../types/comment-response";
import UserComment from "../types/user-comment";

const postEndpoint = 'https://dummyjson.com/comments'

export const useCommentsStore = defineStore('comments', {
    state: () => ({}),
    getters: { },
    actions: {
        async loadAllCommentsByPost(id: PostID): Promise<UserComment[]> {
            return fetch(`${postEndpoint}/post/${id}`)
                .then(responseMetaData => responseMetaData.json() as Promise<CommentResponse>)
                .then(comments => comments.comments)
        }
    },
})
