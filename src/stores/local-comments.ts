import { defineStore } from "pinia";
import { PostID } from "../types/alias";
import CommentResponse from "../types/comment-response";
import UserComment from "../types/user-comment";

const postEndpoint = 'https://dummyjson.com/comments'

export const useLocalCommentsStore = defineStore('localComments', {
    state: () => ({
        deletedComments: {} as {[k: string]: UserComment}
    }),
    getters: {
        deleted(state) {
            return state.deletedComments
        }
     },
    actions: {
        async loadAllCommentsByPost(id: PostID): Promise<UserComment[]> {
            return fetch(`${postEndpoint}/post/${id}`)
                .then(responseMetaData => responseMetaData.json() as Promise<CommentResponse>)
                .then(comments => comments.comments)
        },

        isDeleted(comment: UserComment) {
            return generateID(comment) in this.deletedComments
        },
        
        delete(comment: UserComment) {
            this.deletedComments[generateID(comment)] = comment
        },

        return(comment: UserComment) {
            delete this.deletedComments[generateID(comment)]
        }
    },
})

function generateID(comment:UserComment) {
    return `comment-${comment.id}-post-${comment.postId}-length-${comment.body.length}`
}
