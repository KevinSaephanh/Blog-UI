import { FC, FormEvent, useState } from "react";
import { Form, Button, Row } from "react-bootstrap";
import BlogSection from "../blogSection/BlogSection";
import ISection from "../../shared/models/ISection";
import "./BlogForm.scss";

const myCategories = ["Reviews", "Software Dev", "Philosophy", "Misc."];
const username = "Kevin Saephanh";
const picture =
  "https://res.cloudinary.com/geekysrm/image/upload/v1542221619/default-user.png";
const dateCreated = "December 1, 2021";

const BlogForm: FC = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [thumbnail, setThumbnail] = useState<File>();
  const [sections, setSections] = useState<ISection[]>([]);

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

  const handleCategoryClick = (e: FormEvent, category: string) => {
    e.preventDefault();

    // If array includes category, remove it
    // Else push it to the array
    if (categories.includes(category)) {
      const index = categories.indexOf(category);
      setCategories((categories) => categories.splice(index, 1));
    } else {
      setCategories((categories) => [...categories, category]);
    }
    console.log(categories);

    const categoryButton = document.getElementById(`${category}-button`);
    categoryButton?.classList.toggle("active");
  };

  const handleFileInput = (e: HTMLInputElement) => {
    // setThumbnail(e.files[0]);
  };

  const handleAddSection = (e: FormEvent) => {
    e.preventDefault();
    const section: ISection = {
      title: "",
      picture: "",
      body: "",
    };
    setSections((sections) => [...sections, section]);
  };

  const handleDeleteSection = () => {};

  return (
    <Form className="blog-form">
      <Form.Group className="row-group" as={Row}>
        <Form.Label column sm="2">
          Title
        </Form.Label>
        <Form.Control placeholder="Enter title" />
      </Form.Group>
      <Form.Group className="row-group categories" as={Row}>
        <Form.Label column sm="2">
          Categories
        </Form.Label>
        {getCategories()}
      </Form.Group>
      <Form.Group className="thumbnail-form-group">
        <Form.Label>Upload a thumbnail for your post</Form.Label>
        <Form.File />
      </Form.Group>

      <Button variant="success" onClick={(e) => handleAddSection(e)}>
        Add Section
      </Button>
      {sections.length > 0
        ? sections.map((section, key) => {
            return <BlogSection section={section} keyId={key} />;
          })
        : null}

      <div className="button-group">
        <Button variant="success">Preview</Button>
        <Button variant="success" type="submit">
          Submit
        </Button>
      </div>
    </Form>
  );
};

export default BlogForm;
