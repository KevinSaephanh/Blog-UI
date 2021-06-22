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
    thumbnailCredit,
    sections,
  } = props.post;
  const formattedDate = `${
    monthNames[dateCreated.getMonth()]
  } ${dateCreated.getDate()}, ${dateCreated.getFullYear()}`;

  console.log(props.post);

  return (
    <div className="post-view">
      <h1>{title}</h1>
      <div className="post-metadata-wrapper">
        <img src={userProfilePic} />
        <p>
          <strong>{user}</strong>
        </p>
        <p>{formattedDate}</p>
      </div>
      <ul className="post-category-list">
        {categories.map((category, key) => (
          <li key={key}>{category}</li>
        ))}
      </ul>
      <div className="post-image-container">
        <img className="post-thumbnail" src={thumbnail} />
        {thumbnailCredit ? <span>{thumbnailCredit}</span> : null}
      </div>

      <div className="sections-wrapper">
        {sections.map((section, key) => {
          const { title, picture, pictureCredit, body } = section;
          return (
            <div key={key}>
              {title ? <h3>{title}</h3> : null}
              {picture ? (
                <div className="post-image-container">
                  {
                    <img
                      src={
                        picture instanceof File
                          ? URL.createObjectURL(picture)
                          : picture
                      }
                    />
                  }
                  {pictureCredit ? <span>{pictureCredit}</span> : null}
                </div>
              ) : null}
              <p className="body">{body}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PostView;
