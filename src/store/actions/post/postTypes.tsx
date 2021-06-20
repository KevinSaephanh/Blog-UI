import IPost from "../../../shared/models/IPost";

export enum PostActions {
  ADD_POST_SUCCESS = "ADD POST SUCCESS",
  ADD_POST_FAILURE = "ADD POST FAILURE",
  GET_POSTS_SUCCESS = "GET POSTS SUCCESS",
  GET_POSTS_FAILURE = "GET POSTS FAILURE",
  GET_POST_SUCCESS = "GET POST SUCCESS",
  GET_POST_FAILURE = "GET POST FAILURE",
  UPDATE_POST_SUCCESS = "UPDATE POST SUCCESS",
  UPDATE_POST_FAILURE = "UPDATE POST FAILURE",
}

export interface IAddPostSuccess {
  readonly type: PostActions.ADD_POST_SUCCESS;
  payload: IPost;
}

export interface IAddPostFailure {
  readonly type: PostActions.ADD_POST_FAILURE;
}

export interface IGetPostsSucces {
  readonly type: PostActions.GET_POSTS_SUCCESS;
}

export interface IGetPostsFailure {
  readonly type: PostActions.GET_POSTS_FAILURE;
}

export interface IGetPostSucces {
  readonly type: PostActions.GET_POST_SUCCESS;
}

export interface IGetPostFailure {
  readonly type: PostActions.GET_POST_FAILURE;
}

export interface IUpdatePostSucces {
  readonly type: PostActions.UPDATE_POST_SUCCESS;
  payload: IPost;
}

export interface IUpdatePostFailure {
  readonly type: PostActions.UPDATE_POST_FAILURE;
}

export type PostAction =
  | IAddPostSuccess
  | IAddPostFailure
  | IGetPostSucces
  | IGetPostsFailure
  | IGetPostSucces
  | IGetPostFailure
  | IUpdatePostSucces
  | IUpdatePostFailure;
