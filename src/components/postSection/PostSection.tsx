import { ChangeEvent, FC, useEffect, useState } from "react";
import { Form, Row, Col } from "react-bootstrap";
import ISection from "../../shared/models/ISection";
import "./PostSection.scss";

interface PostSectionProps {
  section: ISection;
  keyId: number;
  deleteSection(keyId: string, section: ISection): void;
}

const mockSection: ISection = {
  title: "asdfADSs",
  picture:
    "https://res.cloudinary.com/geekysrm/image/upload/v1542221619/default-user.png",
  body: "weqdasda da dwad wq dq qwdwa",
};

const PostSection: FC<PostSectionProps> = (props) => {
  const [inputs, setInputs] = useState<ISection>({
    title: "",
    picture: "",
    body: "",
  });
  const { title, picture, body } = inputs;

  useEffect(() => {
    const { section } = props;
    setInputs(section);
  }, []);

  const handleDeleteSection = () => {
    const section: ISection = {
      title,
      picture,
      body,
    };
    const id = `section-${props.keyId}`;
    props.deleteSection(id, section);
  };

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleFileInput = (e: any) => {
    const file = e.target.files[0];
    setInputs({ ...inputs, picture: file });
  };

  return (
    <Form
      id={`section-${props.keyId}`}
      className="section-form"
      encType="multipart/form-data"
    >
      <div className="trash-icon-wrapper">
        <i className="fas fa-trash-alt" onClick={handleDeleteSection}></i>
      </div>

      <Form.Group className="row-group" as={Row}>
        <Form.Label column sm="2">
          Title
        </Form.Label>
        <Col sm="10">
          <Form.Control
            name="title"
            value={title}
            placeholder="Enter title"
            onChange={handleInput}
          />
        </Col>
      </Form.Group>

      <Form.Group className="image-form-group">
        <div>
          <Form.Label>Upload a picture for this section</Form.Label>
          <Form.File name="picture" onChange={handleFileInput} />
        </div>
        {picture ? (
          <img
            src={
              picture instanceof File ? URL.createObjectURL(picture) : picture
            }
          />
        ) : null}
      </Form.Group>

      <Form.Group>
        <Form.Label column sm="2">
          Section Body
        </Form.Label>
        <Col sm="10">
          <Form.Control
            name="body"
            value={body}
            as="textarea"
            rows={3}
            onChange={handleInput}
          />
        </Col>
        {/* Use text editor here instead? */}
      </Form.Group>
    </Form>
  );
};

export default PostSection;
