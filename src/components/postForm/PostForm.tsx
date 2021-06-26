import { ChangeEvent, FC, FormEvent, useEffect, useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import ISection from "../../shared/models/ISection";
import IPost from "../../shared/models/IPost";
import IPicture from "../../shared/models/IPicture";

import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw, RawDraftContentState } from "draft-js";
import { categoryNames } from "../../utils/constants";
import draftToHtml from "draftjs-to-html";
import "../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./PostForm.scss";
import PostPreviewModal from "../postPreviewModal/PostPreviewModal";

const username = "Kevin Saephanh";
const picture =
  "https://res.cloudinary.com/geekysrm/image/upload/v1542221619/default-user.png";
const dateCreated = "December 1, 2021";

interface PostFormProps {
  post?: IPost;
}

const PostForm: FC<PostFormProps> = (props) => {
  const [title, setTitle] = useState<string>("");
  const [categories, setCategories] = useState<string[]>([]);
  const [description, setDescription] = useState(EditorState.createEmpty());
  // const [editorState, setEditorState] = useState();
  const [images, setImages] = useState<{ file: File; localSrc: string }[]>([]);
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    const { post } = props;
    if (post) {
      setCategories(post.categories);
    }
  });

  const getCategories = () => {
    return categoryNames.map((category, key) => {
      return (
        <button
          id={`${category}-button`}
          className="category-button"
          key={key}
          onClick={(e) => handleCategoryClick(e, category)}
        >
          {category}
        </button>
      );
    });
  };

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setTitle(value);
  };

  const handleCategoryClick = (e: FormEvent, category: string) => {
    e.preventDefault();

    // If array includes category, remove it
    // Else push it to the array
    if (categories.includes(category)) {
      setCategories((categories) => categories.filter((c) => c === category));
    } else {
      setCategories((categories) => [...categories, category]);
    }

    console.log(categories);

    const categoryButton = document.getElementById(`${category}-button`);
    categoryButton?.classList.toggle("active");
  };

  const handleAddPost = (e: FormEvent) => {
    e.preventDefault();
    console.log(title);
    console.log(categories);
    console.log(description);

    // Upload images first, then add post
  };

  const uploadCallback = (file: File) => {
    // const formData = new FormData();
    // formData.append("file", file);

    let uploadedImages = images;
    const imageObj = { file: file, localSrc: URL.createObjectURL(file) };
    uploadedImages.push(imageObj);
    setImages(uploadedImages);

    return new Promise((resolve, reject) => {
      resolve({ data: { link: imageObj.localSrc } });
    });

    // return new Promise((resolve, reject) => {
    //   fetch("http://localhost:8080/api/upload", {
    //     method: "POST",
    //     body: formData,
    //   })
    //     .then((res) => res.json())
    //     .then((resData) => {
    //       console.log(resData);
    //       resolve({ data: { link: resData } });
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //       reject(error.toString());
    //     });
    // });
  };

  const convertFromJSONToHTML = (text: RawDraftContentState) => {
    try {
      return { __html: draftToHtml(text) };
    } catch (exp) {
      console.log(exp);
      return { __html: "Error" };
    }
  };

  return (
    <Form className="blog-form">
      <Form.Group className="row-group" as={Row}>
        <Form.Label column sm="2">
          Title
        </Form.Label>
        <Col sm="10">
          <Form.Control
            placeholder="Enter title"
            name="title"
            onChange={handleTitleChange}
          />
        </Col>
      </Form.Group>

      <Form.Group className="row-group categories" as={Row}>
        <Form.Label column sm="2">
          Categories
        </Form.Label>
        <Col sm="10">{getCategories()}</Col>
      </Form.Group>

      <Form.Group className="row-group" as={Row}>
        <Form.Label column sm="2">
          Description
        </Form.Label>
        <Col sm="10">
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Give a short description for this post"
            name="description"
            // onChange={handleTitleChange}
          />
        </Col>
      </Form.Group>

      <Editor
        editorState={description}
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        toolbarClassName="toolbar-class"
        wrapperStyle={{ border: "2px solid green", marginBottom: "20px" }}
        editorStyle={{
          height: "90%",
          minHeight: "350px",
          maxHeight: "450px",
          padding: "10px",
        }}
        toolbar={{ image: { uploadCallback } }}
        onEditorStateChange={(editorState: EditorState) =>
          setDescription(editorState)
        }
      />

      <div className="button-group">
        <Button variant="success" onClick={() => setModalShow(true)}>
          Preview
        </Button>
        <Button
          variant="success"
          type="submit"
          onClick={(e: FormEvent) => handleAddPost(e)}
        >
          Submit
        </Button>
      </div>

      <div
        className="blog-post"
        dangerouslySetInnerHTML={convertFromJSONToHTML(
          convertToRaw(description.getCurrentContent())
        )}
      ></div>

      <PostPreviewModal show={modalShow} onHide={() => setModalShow(false)} />
    </Form>
  );
};

export default PostForm;
