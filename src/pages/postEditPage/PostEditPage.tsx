import { FC, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostForm from "../../components/postForm/PostForm";
import IPost from "../../shared/models/IPost";
import { getPost } from "../../store/actions/post/postActions";
import { PostContext } from "../../store/providers/PostProvider";

const PostEditPage: FC<IPost> = () => {
  const [post, setPost] = useState<IPost | null>(null);
  const { state, dispatch } = useContext(PostContext);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (id) {
      getPost(id, dispatch);
      setPost(state.post);
    }
  });

  return (
    <div>
      <h1 style={{ margin: "20px 0" }}>Create/Edit Post</h1>
      <PostForm post={post} />
    </div>
  );
};

export default PostEditPage;
