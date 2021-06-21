import { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import PostView from "../../components/postView/PostView";
import IPost from "../../shared/models/IPost";
import ISection from "../../shared/models/ISection";

const mockSections: ISection[] = [
  {
    title: "Ooga Booga",
    picture:
      "https://res.cloudinary.com/geekysrm/image/upload/v1542221619/default-user.png",
    body: "This is the body of a section",
  },
  {
    title: "Booga Ooga",
    picture:
      "https://res.cloudinary.com/geekysrm/image/upload/v1542221619/default-user.png",
    body: "This is the body of a section again",
  },
  {
    title: "Ooga Booga Mooga",
    picture:
      "https://res.cloudinary.com/geekysrm/image/upload/v1542221619/default-user.png",
    body: "This is the body of a section again again",
  },
];

const mockPost: IPost = {
  title: "First Post",
  categories: ["Category", "Apples", "Stuffs"],
  user: "Kevino Saepino",
  userProfilePic:
    "https://res.cloudinary.com/geekysrm/image/upload/v1542221619/default-user.png",
  dateCreated: new Date(),
  thumbnail:
    "https://res.cloudinary.com/geekysrm/image/upload/v1542221619/default-user.png",
  sections: mockSections,
};

const PostViewPage: FC = () => {
  const { id } = useParams<{ id: string }>();
  let post: IPost;

  return (
    <div>
      <PostView post={mockPost} />
      {/* Make PostView component for both this page and preview button */}
    </div>
  );
};

export default PostViewPage;
