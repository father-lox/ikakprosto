import UserComment from "./user-comment"
import APIResponse from "./response"

export default interface CommentResponse extends APIResponse {
    comments: UserComment[]
}