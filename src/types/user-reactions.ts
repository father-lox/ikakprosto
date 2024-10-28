import { PostID } from "./alias";
import ReactionStatistics from "./reaction-statistics";
import Reactions from "./reactions";

export default interface UserReaction {
    reaction: Reactions,
    postID: PostID,
    counts: ReactionStatistics
}