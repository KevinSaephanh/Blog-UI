import { ChangeEvent, FC, FormEvent, useEffect, useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import PostSection from "../postSection/PostSection";
import ISection from "../../shared/models/ISection";
import "./PostForm.scss";
import IPost from "../../shared/models/IPost";

const myCategories = ["Reviews", "Software Dev", "Philosophy", "Misc."];
const username = "Kevin Saephanh";
const picture =
  "https://res.cloudinary.com/geekysrm/image/upload/v1542221619/default-user.png";
const dateCreated = "December 1, 2021";

interface PostFormProps {
  post?: IPost;
}

const PostForm: FC<PostFormProps> = (props) => {
  const [title, setTitle] = useState<string>("");
  const [categories, setCategories] = useState<string[]>([] as string[]);
  const [thumbnail, setThumbnail] = useState<File | string>();
  const [sections, setSections] = useState<ISection[]>([] as ISection[]);

  useEffect(() => {
    const { post } = props;
    if (post) {
      setCategories(post.categories);
      setSections(post.sections);
      setThumbnail(post.thumbnail);
    }
  });

  const getCategories = () => {
    return myCategories.map((category, key) => {
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

    const categoryButton = document.getElementById(`${category}-button`);
    categoryButton?.classList.toggle("active");
  };

  const handleFileInput = (e: any) => {
    const file = e.target.files[0];
    setThumbnail(file);
  };

  const handleAddSection = (e: FormEvent) => {
    e.preventDefault();
    const section: ISection = {
      title: "",
      picture: "",
      body: "",
    };
    setSections((sections) => [...sections, section]);
    console.log(sections.length);
  };

  const deleteSection = (id: string, sect: ISection) => {
    // Delete element from sections array
    setSections(sections.filter((section) => section !== sect));

    // Delete element from html
    const sectionEl = document.getElementById(id);
    sectionEl?.remove();

    console.log(sections.length);
  };

  const handleAddPost = (e: FormEvent) => {
    e.preventDefault();
    console.log(title);
    console.log(categories);
    console.log(thumbnail);
    console.log(sections);
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
      <Form.Group className="image-form-group">
        <Form.Label>Upload a thumbnail for your post</Form.Label>
        <Col sm="10">
          <Form.File onChange={handleFileInput} />
        </Col>
        {thumbnail ? (
          <img
            src={
              thumbnail instanceof File
                ? URL.createObjectURL(thumbnail)
                : thumbnail
            }
          />
        ) : null}
      </Form.Group>

      <Button variant="success" onClick={(e) => handleAddSection(e)}>
        Add Section
      </Button>
      {sections.length > 0
        ? sections.map((section, key) => {
            return (
              <PostSection
                deleteSection={deleteSection}
                section={section}
                keyId={key}
              />
            );
          })
        : null}

      <div className="button-group">
        <Button variant="success">Preview</Button>
        <Button
          variant="success"
          type="submit"
          onClick={(e: FormEvent) => handleAddPost(e)}
        >
          Submit
        </Button>
      </div>
    </Form>
  );
};

export default PostForm;
