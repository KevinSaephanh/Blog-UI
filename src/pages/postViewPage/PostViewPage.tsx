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

  return (
    <div>
      <PostView post={mockPost} />
      {/* Make PostView component for both this page and preview button */}
    </div>
  );
};

export default PostViewPage;
