import { defineStore } from "pinia";
import UserReaction from "../types/user-reactions";
import { PostID } from "../types/alias";
import Reactions from "../types/reactions";
import ReactionStatistics from "../types/reaction-statistics";


export const useLocalReactions = defineStore('local-reactions', {
    state: () => ({ 
        reactions: {} as {[k: string]: UserReaction}
    }),
    getters: {
        getAll: (state) => state.reactions,
        getByPostID: (store) => (id: PostID) => store.reactions[id.toString()] as UserReaction | undefined,
    },
    actions: {

        toLike(id: PostID, counts: ReactionStatistics) {
            this.react(id, Reactions.LIKE, counts)
        },

        toDislike(id: PostID, counts: ReactionStatistics) {
            this.react(id, Reactions.DISLIKE, counts)
        },

        react(id: PostID, reaction: Reactions, counts: ReactionStatistics) {
            const stringifyedPostID = id.toString()
            const currentReaction = this.reactions[stringifyedPostID]
            const isPostReacted = currentReaction !== undefined

            if (!isPostReacted) {
                this.reactions[stringifyedPostID] = {
                    postID: id,
                    reaction: reaction,
                    counts
                }
            } else {
                this.reactions[stringifyedPostID].reaction = reaction
            }
        }
    }
})
