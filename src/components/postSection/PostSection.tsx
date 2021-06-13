import { FC, useState } from "react";
import { Form, Button, Row } from "react-bootstrap";
import ISection from "../../shared/models/ISection";
import "./PostSection.scss";

interface PostSectionProps {
  section: ISection;
  keyId: number;
}

const PostSection: FC<PostSectionProps> = (props) => {
  const [section, setSection] = useState<ISection>(props.section);

  return (
    <Form className="section-form">
      <i className="fas fa-trash-alt"></i>

      <Form.Group className="row-group" as={Row}>
        <Form.Label column sm="2">
          Title
        </Form.Label>
        <Form.Control placeholder="Enter title" />
      </Form.Group>

      <Form.Group className="section-picture-form-group">
        <Form.Label>Upload a picture for this section</Form.Label>
        <Form.File />
      </Form.Group>

      <Form.Group>
        <Form.Label>Section Body</Form.Label>
        <Form.Control as="textarea" rows={3} />
        {/* Use text editor here instead? */}
      </Form.Group>
    </Form>
  );
};

export default PostSection;
