import axios from "axios";
import { Dispatch } from "react";
import { getBaseUrl } from "../../../shared/environments/environment";
import IPost from "../../../shared/models/IPost";
import { PostActions } from "./postTypes";

const BASE_URL = getBaseUrl() + "/posts";

export const addPost = async (post: IPost, dispatch: Dispatch<any>) => {
  try {
    const { data } = await axios.post(BASE_URL, { post });
    dispatch({ type: PostActions.ADD_POST_SUCCESS, payload: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: PostActions.ADD_POST_FAILURE });
  }
};

export const getPosts = async (dispatch: Dispatch<any>) => {
  try {
    const { data } = await axios.get(BASE_URL);
    dispatch({ type: PostActions.GET_POSTS_SUCCESS, payload: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: PostActions.GET_POSTS_FAILURE });
  }
};

export const getPost = async (id: string, dispatch: Dispatch<any>) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/${id}`);
    dispatch({ type: PostActions.GET_POST_SUCCESS, payload: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: PostActions.GET_POST_FAILURE });
  }
};

export const updatePost = async (post: IPost, dispatch: Dispatch<any>) => {
  try {
    const { data } = await axios.put(BASE_URL, { post });
    dispatch({ type: PostActions.UPDATE_POST_SUCCESS, payload: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: PostActions.UPDATE_POST_FAILURE });
  }
};
