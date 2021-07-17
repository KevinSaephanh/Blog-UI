import { Dispatch } from "react";
import { PostActions } from "./postTypes";
import { config } from "../../../utils/constants";
import IPost from "../../../shared/models/IPost";
import axios from "axios";
import * as uuid from "uuid";

const BASE_URL = process.env.REACT_APP_API_URL as string;

export const addPost = async (post: IPost, dispatch: Dispatch<any>) => {
  try {
    post.id = uuid.v1();
    const { data } = await axios.post(BASE_URL, { post }, config);
    window.location.href = "/";
    dispatch({ type: PostActions.ADD_POST_SUCCESS, payload: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: PostActions.ADD_POST_FAILURE });
  }
};

export const getPosts = async (dispatch: Dispatch<any>) => {
  try {
    const { data } = await axios.get(BASE_URL, config);
    dispatch({ type: PostActions.GET_POSTS_SUCCESS, payload: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: PostActions.GET_POSTS_FAILURE });
  }
};

export const getPost = async (id: string, dispatch: Dispatch<any>) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/${id}`, config);
    console.log(data);
    dispatch({ type: PostActions.GET_POST_SUCCESS, payload: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: PostActions.GET_POST_FAILURE });
  }
};

export const updatePost = async (post: IPost, dispatch: Dispatch<any>) => {
  try {
    const { data } = await axios.put(BASE_URL, { post }, config);
    dispatch({ type: PostActions.UPDATE_POST_SUCCESS, payload: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: PostActions.UPDATE_POST_FAILURE });
  }
};
