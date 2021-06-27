import { FC, useState } from "react";
import { Modal } from "react-bootstrap";
import IPost from "../../shared/models/IPost";
import PostView from "../postView/PostView";

interface PostPreviewModalProps {
  post: IPost;
  show: boolean;
  onHide(): void;
}

const PostPreviewModal: FC<PostPreviewModalProps> = (props) => {
  return (
    <Modal {...props} dialogClassName="fullscreen-modal">
      <Modal.Header closeButton />
      <Modal.Body>
        <PostView post={props.post} />
      </Modal.Body>
    </Modal>
  );
};

export default PostPreviewModal;
