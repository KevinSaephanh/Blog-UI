import { createContext, Dispatch, useReducer } from "react";
import {
  initialPostState,
  IPostState,
  PostReducer,
} from "../reducers/postReducer";

export const PostContext = createContext<{
  state: IPostState;
  dispatch: Dispatch<any>;
}>({
  state: initialPostState,
  dispatch: () => null,
});

export const PostProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(PostReducer, initialPostState);

  return (
    <PostContext.Provider value={{ state, dispatch }}>
      {children}
    </PostContext.Provider>
  );
};
