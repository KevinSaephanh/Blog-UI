import { FC } from "react";
import { RawDraftContentState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import IPost from "../../shared/models/IPost";
import { getFormattedDate } from "../../utils/utils";
import "./PostView.scss";

interface PostViewProps {
  post: IPost;
}

const PostView: FC<PostViewProps> = (props) => {
  const { title, categories, author, authorPic, createdAt, body } = props.post;

  const convertFromJSONToHTML = (text: RawDraftContentState) => {
    try {
      return { __html: draftToHtml(text) };
    } catch (err) {
      console.log(err);
      return { __html: err };
    }
  };

  return (
    <div className="post-view">
      {/* Header content for post: title, author, etc. */}
      <div className="post-header">
        <h1>{title}</h1>
        <div className="post-metadata-wrapper">
          <img src={authorPic} />
          <p>
            <strong>{author}</strong>
          </p>
          <p>{getFormattedDate(createdAt)}</p>
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
        />
      ) : null}
    </div>
  );
};

export default PostView;
