import {
  ChangeEvent,
  FC,
  FormEvent,
  useContext,
  useEffect,
  useState,
} from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import PostPreviewModal from "../postPreviewModal/PostPreviewModal";
import IPost from "../../shared/models/IPost";
import { categoryNames } from "../../utils/constants";
import { mockUser } from "../../utils/mocks";
import { addPost } from "../../store/actions/post/postActions";
import { PostContext } from "../../store/providers/PostProvider";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./PostForm.scss";

interface PostFormProps {
  post?: IPost | null;
}

const PostForm: FC<PostFormProps> = (props) => {
  const [post, setPost] = useState<IPost>({
    title: "",
    thumbnail: "",
    description: "",
    createdAt: new Date(),
    categories: [],
    author: mockUser.username, // Change to auth username
    authorPic: mockUser.profilePic, // Change to auth profile pic
    body: EditorState.createEmpty(),
  });
  const [images, setImages] = useState<{ file: File; localSrc: string }[]>([]);
  const [modalShow, setModalShow] = useState(false);
  const { dispatch } = useContext(PostContext);

  useEffect(() => {
    if (props.post) setPost(props.post);
  });

  const handlePostInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
  };

  const handleCategoryClick = (e: FormEvent, category: string) => {
    e.preventDefault();
    const { categories } = post;
    const temp = categories;

    // If array includes category, remove it
    // Else push it to the array
    if (categories.includes(category)) temp.splice(temp.indexOf(category), 1);
    else temp.push(category);
    setPost({ ...post, categories: temp });

    // Toggle style of category button
    const categoryButton = document.getElementById(`${category}-button`);
    categoryButton?.classList.toggle("active");
  };

  const handleAddPost = (e: FormEvent) => {
    e.preventDefault();

    // Upload images first, then add post
    console.log(images);
    setPost({ ...post, thumbnail: images[0].file.name });
    // console.log(post);
    addPost(post, dispatch);
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
            onChange={handlePostInputChange}
          />
        </Col>
      </Form.Group>

      <Form.Group className="row-group categories" as={Row}>
        <Form.Label column sm="2">
          Categories
        </Form.Label>
        <Col sm="10">
          {categoryNames.map((category, key) => (
            <button
              id={`${category}-button`}
              className="category-button"
              key={key}
              onClick={(e) => handleCategoryClick(e, category)}
            >
              {category}
            </button>
          ))}
        </Col>
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
            onChange={handlePostInputChange}
          />
        </Col>
      </Form.Group>

      <Editor
        editorState={post.body}
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
          setPost({ ...post, body: editorState })
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

      <PostPreviewModal
        post={post}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </Form>
  );
};

export default PostForm;
