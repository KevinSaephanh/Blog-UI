import axios from "axios";
import { Dispatch } from "react";
import { getBaseUrl } from "../../../shared/environments/environment";
import IPost from "../../../shared/models/IPost";
import { PostActions } from "./postTypes";

const POST_BASE_URL = getBaseUrl() + "/posts";
const UPLOAD_URL = getBaseUrl() + "/upload";

export const addPost = async (post: IPost, dispatch: Dispatch<any>) => {
  try {
    const { data } = await axios.post(POST_BASE_URL, { post });
    dispatch({ type: PostActions.ADD_POST_SUCCESS, payload: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: PostActions.ADD_POST_FAILURE });
  }
};

export const getPosts = async (dispatch: Dispatch<any>) => {
  try {
    const { data } = await axios.get(POST_BASE_URL);
    dispatch({ type: PostActions.GET_POSTS_SUCCESS, payload: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: PostActions.GET_POSTS_FAILURE });
  }
};

export const getPost = async (id: string, dispatch: Dispatch<any>) => {
  try {
    const { data } = await axios.get(`${POST_BASE_URL}/${id}`);
    dispatch({ type: PostActions.GET_POST_SUCCESS, payload: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: PostActions.GET_POST_FAILURE });
  }
};

export const updatePost = async (post: IPost, dispatch: Dispatch<any>) => {
  try {
    const { data } = await axios.put(POST_BASE_URL, { post });
    dispatch({ type: PostActions.UPDATE_POST_SUCCESS, payload: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: PostActions.UPDATE_POST_FAILURE });
  }
};

export const uploadImage = async (
  formData: FormData,
  dispatch: Dispatch<any>
) => {
  try {
    const { data } = await axios.post(UPLOAD_URL, { formData });
    // dispatch
  } catch (error) {
    console.log(error);
    dispatch({ type: PostActions.UPDATE_POST_FAILURE });
  }
};
