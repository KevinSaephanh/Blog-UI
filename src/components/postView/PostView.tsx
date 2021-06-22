import { FC } from "react";
import { Card } from "react-bootstrap";
import IPicture from "../../shared/models/IPicture";
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

  const getPictureCreds = (picture: IPicture) => {
    const { creator, creatorLink, website, websiteLink } = picture;

    if (creator && website) {
      return (
        <span>
          Credit:{" "}
          <a href={creatorLink} target="_blank">
            {creator}
          </a>
          &nbsp;from&nbsp;
          <a href={websiteLink} target="_blank">
            {website}
          </a>
        </span>
      );
    }
    return null;
  };

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
        <img className="post-thumbnail" src={thumbnail.pic as string} />
        {getPictureCreds(thumbnail)}
      </div>

      <div className="sections-wrapper">
        {sections.map((section, key) => {
          const { title, picture, body } = section;

          return (
            <div key={key}>
              {title ? <h3>{title}</h3> : null}
              {picture ? (
                <div className="post-image-container">
                  <img src={picture.pic as string} />
                  {getPictureCreds(picture)}
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
