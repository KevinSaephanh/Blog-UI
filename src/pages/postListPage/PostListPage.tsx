import { FC, useContext, useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { getPosts } from "../../store/actions/post/postActions";
import { PostContext } from "../../store/providers/PostProvider";
import { getFormattedDate } from "../../utils/utils";
import IPost from "../../shared/models/IPost";
import "./PostListPage.scss";

const PostListPage: FC = () => {
  const { state, dispatch } = useContext(PostContext);
  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    if (posts.length == 0) {
      getPosts(dispatch);
      // const sortedPosts = getSortedPosts();
      setPosts(state.posts);
      console.log(posts);
    }
  }, [state.posts]);

  const getSortedPosts = (): IPost[] => {
    const temp = [...posts];
    temp.sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime());
    return temp;
  };

  const navigateToViewPostPage = (post: IPost) => {
    window.location.href = `/post/${post.id}`;
  };

  return (
    <div className="post-list-page">
      <h1>Latest Posts</h1>
      <ul className="post-list">
        {posts.map((post, key) => (
          <Card key={key} onClick={() => navigateToViewPostPage(post)}>
            <Card.Body>
              <Row>
                {/* Post metadata */}
                <Col>
                  <div className="card-top">
                    <Card.Title>{post.title}</Card.Title>
                    <Card.Text>{post.description}</Card.Text>
                  </div>
                  <div className="card-bottom">
                    <span>{post.author}</span>
                    <span>{getFormattedDate(new Date(post.createdAt))}</span>
                    <ul>
                      {post.categories.map((category, key) => (
                        <li key={key}>{category}</li>
                      ))}
                    </ul>
                  </div>
                </Col>

                {/* Post image */}
                <Col>
                  <Card.Img variant="top" src={post.thumbnail} />
                </Col>
              </Row>
            </Card.Body>
          </Card>
        ))}
      </ul>
    </div>
  );
};

export default PostListPage;
