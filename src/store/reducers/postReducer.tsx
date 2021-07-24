import IPost from "../../shared/models/IPost";
import { PostActions } from "../actions/post/postTypes";

export interface IPostState {
  posts: IPost[];
  post: IPost;
}

export const initialPostState: IPostState = {
  posts: [] as IPost[],
  post: {} as IPost,
};

export const PostReducer = (state: IPostState, action: any): any => {
  switch (action.type) {
    case PostActions.ADD_POST_SUCCESS:
    case PostActions.GET_POSTS_SUCCESS:
    case PostActions.UPDATE_POST_SUCCESS:
      return {
        ...state,
        posts: [...action.payload],
      };
    case PostActions.GET_POST_SUCCESS:
    case PostActions.SET_POST:
      return {
        ...state,
        post: action.payload,
      };
    case PostActions.GET_POSTS_FAILURE:
      return {
        ...state,
        posts: [],
      };
    case PostActions.GET_POST_FAILURE:
      return {
        ...state,
        currentPost: null,
      };
    case PostActions.ADD_POST_FAILURE:
    case PostActions.UPDATE_POST_FAILURE:
      return { ...state };
    default:
      return state;
  }
};
