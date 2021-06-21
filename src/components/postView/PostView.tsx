import { FC } from "react";
import { Card } from "react-bootstrap";
import IPost from "../../shared/models/IPost";
import ISection from "../../shared/models/ISection";
import "./PostView.scss";

interface PostViewProps {
  post: IPost;
}

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const PostView: FC<PostViewProps> = (props) => {
  const {
    title,
    categories,
    user,
    userProfilePic,
    dateCreated,
    thumbnail,
    sections,
  } = props.post;
  const formattedDate = `${
    monthNames[dateCreated.getMonth()]
  } ${dateCreated.getDate()}, ${dateCreated.getFullYear()}`;

  console.log(props.post);

  return (
    <div className="main-content">
      <h1>{title}</h1>
      <div className="post-metadata-wrapper">
        <img src={userProfilePic} />
        <p>{user}</p>
        <p>{formattedDate}</p>
      </div>
      <ul>
        {categories.map((category, key) => (
          <li key={key}>{category}</li>
        ))}
      </ul>
      <img className="post-thumbnail" src={thumbnail} />
      <div className="sections-wrapper">
        {sections.map((section, key) => {
          const { title, picture, body } = section;
          return (
            <div key={key}>
              {title !== "" ? <h3>{title}</h3> : null}
              {picture !== null ? (
                <img
                  src={
                    picture instanceof File
                      ? URL.createObjectURL(picture)
                      : picture
                  }
                />
              ) : null}
              <p>{body}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PostView;
