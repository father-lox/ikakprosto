import { PostID } from "./alias";
import User from "./user";

export default interface UserComment {
    id: number,
    body: string,
    postId: PostID, 
    likes: number,
    user: User
}