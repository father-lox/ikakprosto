import { PostID, Tag } from "./alias"

export default interface Post {
    id: PostID,
    title: string,
    body: string,
    tags: Tag[],
    reactions: {
        likes: number,
        dislikes: number
    }
    views: number,
    userId: number
}