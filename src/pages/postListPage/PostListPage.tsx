import { FC, useContext, useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import IPost from "../../shared/models/IPost";
import { getPosts } from "../../store/actions/post/postActions";
import { PostContext } from "../../store/providers/PostProvider";
import { mockPost } from "../../utils/mocks";
import { getFormattedDate } from "../../utils/utils";
import "./PostListPage.scss";

const PostListPage: FC = () => {
  const postContext = useContext(PostContext);
  const { state, dispatch } = postContext;
  const [posts, setPosts] = useState<IPost[]>(state.posts);

  useEffect(() => {
    if (posts.length < 1) {
      setPosts([mockPost]);
      console.log(posts);
      // getPosts(dispatch);
    }
  }, []);

  const getSortedPosts = (): IPost[] => {
    const temp = [...posts];
    return [mockPost];
  };

  return (
    <div className="post-list-page">
      <h1>Latest Posts</h1>
      <ul className="post-list">
        {posts
          ? posts.map((post, key) => (
              <Card>
                <Card.Body>
                  <Row>
                    <Col>
                      <div className="card-top">
                        <Card.Title>{post.title}</Card.Title>
                        <Card.Text>{post.desc}</Card.Text>
                      </div>
                      <div className="card-bottom">
                        <span>{post.user}</span>
                        <span>{getFormattedDate(post.dateCreated)}</span>
                        <ul>
                          {post.categories.map((category, key) => (
                            <li key={key}>{category}</li>
                          ))}
                        </ul>
                      </div>
                    </Col>
                    <Col>
                      <Card.Img
                        variant="top"
                        src={post.thumbnail.pic as string}
                      />
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            ))
          : null}
      </ul>
    </div>
  );
};

export default PostListPage;
