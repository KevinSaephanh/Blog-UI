import { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import PostView from "../../components/postView/PostView";
import IPicture from "../../shared/models/IPicture";
import IPost from "../../shared/models/IPost";
import ISection from "../../shared/models/ISection";
import { mockPost } from "../../utils/mocks";

const PostViewPage: FC = () => {
  const { title } = useParams<{ title: string }>();
  let post: IPost;

  useEffect(() => {
    // get title of post here and retrieve it from api
    
  })

  return (
    <div>
      <PostView post={mockPost} />
    </div>
  );
};

export default PostViewPage;
