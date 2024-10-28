import { PostID } from "./alias";
import Reactions from "./reactions";

export default interface UserReaction {
    reaction: Reactions,
    postID: PostID
}