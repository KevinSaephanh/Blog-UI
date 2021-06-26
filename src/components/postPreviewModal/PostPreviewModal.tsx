import { FC, useState } from "react";
import { Modal } from "react-bootstrap";
import { mockPost } from "../../utils/mocks";
import PostView from "../postView/PostView";

const PostPreviewModal: FC<any> = (props) => {
  return (
    <Modal {...props} centered>
      <Modal.Header closeButton />
      <Modal.Body>
        <PostView post={mockPost} />
      </Modal.Body>
    </Modal>
  );
};

export default PostPreviewModal;
