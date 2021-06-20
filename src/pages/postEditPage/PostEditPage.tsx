import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostForm from "../../components/postForm/PostForm";
import IPost from "../../shared/models/IPost";

const PostEditPage: FC<IPost> = () => {
  const [post, setPost] = useState<IPost>({} as IPost);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    console.log(id);
  }, [post]);

  return (
    <div>
      <h1>Create/Edit Post</h1>
      <PostForm />
    </div>
  );
};

export default PostEditPage;
