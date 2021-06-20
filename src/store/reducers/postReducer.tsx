import IPost from "../../shared/models/IPost";
import { PostActions } from "../actions/post/postTypes";

export interface IPostState {
  posts: IPost[];
}

export const initialPostState: IPostState = {
  posts: [] as IPost[],
};

export const PostReducer = (state: IPostState, action: any): any => {
  switch (action.type) {
    case PostActions.ADD_POST_SUCCESS:
    case PostActions.GET_POST_SUCCESS:
    case PostActions.GET_POSTS_SUCCESS:
    case PostActions.UPDATE_POST_SUCCESS:
      return {
        ...state,
        posts: [...action.payload],
      };
    case PostActions.GET_POSTS_FAILURE:
      return {
        ...state,
        posts: [],
      };
    case PostActions.ADD_POST_FAILURE:
    case PostActions.GET_POST_FAILURE:
    case PostActions.UPDATE_POST_FAILURE:
      return { ...state };
    default:
      return state;
  }
};
