import { defineStore } from "pinia";
import UserReaction from "../types/user-reactions";
import { PostID } from "../types/alias";
import Reactions from "../types/reactions";


export const useReactions = defineStore('reactions', {
    state: () => ({ 
        reactions: {} as {[k: string]: UserReaction}
    }),
    getters: {
        getAll: (state) => state.reactions,
        getByPostID: (store) => (id: PostID) => store.reactions[id.toString()] as UserReaction | undefined,
    },
    actions: {

        toLike(id: PostID) {
            this.react(id, Reactions.LIKE)
        },

        toDislike(id: PostID) {
            this.react(id, Reactions.DISLIKE)
        },

        react(id: PostID, reaction: Reactions) {
            const stringifyedPostID = id.toString()
            const currentReaction = this.reactions[stringifyedPostID]
            const isPostReacted = currentReaction !== undefined

            if (!isPostReacted) {
                this.reactions[stringifyedPostID] = {
                    postID: id,
                    reaction: reaction
                }
            } else {
                this.reactions[stringifyedPostID].reaction = reaction
            }
        }
    }
})
