import { RawDraftContentState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import { FC } from "react";
import IPost from "../../shared/models/IPost";
import { getFormattedDate } from "../../utils/utils";
import "./PostView.scss";

interface PostViewProps {
  post: IPost;
}

const PostView: FC<PostViewProps> = (props) => {
  const { title, categories, creator, creatorProfilePic, dateCreated, body } =
    props.post;

  const convertFromJSONToHTML = (text: RawDraftContentState) => {
    try {
      return { __html: draftToHtml(text) };
    } catch (exp) {
      console.log(exp);
      return { __html: "Error" };
    }
  };

  return (
    <div className="post-view">
      {/* Header content for post: title, creator, etc. */}
      <div className="post-header">
        <h1>{title}</h1>
        <div className="post-metadata-wrapper">
          <img src={creatorProfilePic} />
          <p>
            <strong>{creator}</strong>
          </p>
          <p>{getFormattedDate(dateCreated)}</p>
        </div>
        <ul className="post-category-list">
          {categories.map((category, key) => (
            <li key={key}>{category}</li>
          ))}
        </ul>
      </div>

      {/* Content body for post */}
      {body ? (
        <div
          className="post-body"
          dangerouslySetInnerHTML={convertFromJSONToHTML(
            convertToRaw(body.getCurrentContent())
          )}
        ></div>
      ) : null}
    </div>
  );
};

export default PostView;
