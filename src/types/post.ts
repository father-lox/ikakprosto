import { PostID, Tag } from "./alias"
import ReactionStatistics from "./reaction-statistics"

export default interface Post {
    id: PostID,
    title: string,
    body: string,
    tags: Tag[],
    reactions: ReactionStatistics,
    views: number,
    userId: number
}