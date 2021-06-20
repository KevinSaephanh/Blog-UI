import { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import IPost from "../../shared/models/IPost";

const PostViewPage: FC = () => {
  const { id } = useParams<{ id: string }>();
  let post: IPost;

  useEffect(() => {});

  return (
    <div>
      <h1>Post View here!</h1>
      {/* Make PostView component for both this page and preview button */}
    </div>
  );
};

export default PostViewPage;
