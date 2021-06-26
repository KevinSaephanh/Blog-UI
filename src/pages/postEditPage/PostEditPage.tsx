import { FC, useEffect, useState } from "react";
import PostForm from "../../components/postForm/PostForm";
import IPost from "../../shared/models/IPost";

const PostEditPage: FC<IPost> = () => {
  const [post, setPost] = useState<IPost>({} as IPost);

  return (
    <div>
      <h1 style={{ margin: "20px 0" }}>Edit Post</h1>
      <PostForm />
    </div>
  );
};

export default PostEditPage;
