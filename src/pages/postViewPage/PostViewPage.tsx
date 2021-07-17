import { FC, useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import PostView from "../../components/postView/PostView";
import IPost from "../../shared/models/IPost";
import { getPost } from "../../store/actions/post/postActions";
import { PostContext } from "../../store/providers/PostProvider";

const PostViewPage: FC = () => {
  const { id } = useParams<{ id: string }>();
  const { state, dispatch } = useContext(PostContext);
  const [post, setPost] = useState<IPost | null>(null);

  useEffect(() => {
    getPost(id, dispatch);
    setPost(state.currentPost!);
  }, [state.currentPost]);

  return <div>{post ? <PostView post={post} /> : null}</div>;
};

export default PostViewPage;
