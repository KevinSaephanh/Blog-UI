import { FC } from "react";
import IPicture from "../../shared/models/IPicture";
import IPost from "../../shared/models/IPost";
import "./PostView.scss";

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

interface PostViewProps {
  post: IPost;
}

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
          Credit:&nbsp;
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

  return (
    <div className="post-view">
      {/* Post title */}
      <h1>{title}</h1>

      {/* Post metadata (author, date created) */}
      <div className="post-metadata-wrapper">
        <img src={userProfilePic} />
        <p>
          <strong>{user}</strong>
        </p>
        <p>{formattedDate}</p>
      </div>

      {/* Post categories */}
      <ul className="post-category-list">
        {categories.map((category, key) => (
          <li key={key}>{category}</li>
        ))}
      </ul>

      {/* Post thumbnail */}
      <div className="post-image-container">
        <img className="post-thumbnail" src={thumbnail.pic as string} />
        {getPictureCreds(thumbnail)}
      </div>

      {/* Post section */}
      <div className="sections-wrapper">
        {sections.map((section, key) => {
          const { title, picture, body } = section;

          return (
            <div key={key}>
              {/* Section title */}
              {title ? <h3>{title}</h3> : null}

              {/* Section image */}
              {picture ? (
                <div className="post-image-container">
                  <img src={picture.pic as string} />
                  {getPictureCreds(picture)}
                </div>
              ) : null}

              {/* Section body */}
              <div className="body-wrapper">
                {body.map((paragraph, key) => {
                  const { content, isList } = paragraph;
                  let items = content as string[];

                  return (
                    <div className="body">
                      {isList ? (
                        // Render each item separately if body content is a list
                        <ul>
                          {items.map((item, key) => (
                            <li key={key}>{item}</li>
                          ))}
                        </ul>
                      ) : (
                        // Render body content as a paragraph
                        <p key={key}>
                          {paragraph.content}
                          <br />
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PostView;
