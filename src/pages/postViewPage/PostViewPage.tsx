import { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import PostView from "../../components/postView/PostView";
import IPost from "../../shared/models/IPost";

const PostViewPage: FC = () => {
  const { title } = useParams<{ title: string }>();
  let post: IPost;

  useEffect(() => {
    console.log(title);
    // get title of post here and retrieve it from api
  });

  return <div>{/* <PostView post={post} /> */}</div>;
};

export default PostViewPage;
