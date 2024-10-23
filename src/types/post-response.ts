import Post from "./post";
import APIResponse from "./response";

export default interface PostResponse extends APIResponse {
    posts: Post[],
}