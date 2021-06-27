import { FC, useContext, useEffect, useState } from "react";
import PostForm from "../../components/postForm/PostForm";
import IPost from "../../shared/models/IPost";
import { PostContext } from "../../store/providers/PostProvider";

const PostEditPage: FC<IPost> = () => {
  const [post, setPost] = useState<IPost | null>(null);
  const postContext = useContext(PostContext);
  const { currentPost } = postContext.state;

  useEffect(() => {
    if (currentPost) setPost(currentPost);
  });

  return (
    <div>
      <h1 style={{ margin: "20px 0" }}>Create/Edit Post</h1>
      <PostForm post={post} />
    </div>
  );
};

export default PostEditPage;
