import { useState, useEffect } from 'react';
import PostsCard from './PostsCard';
import PostCard from './PostCard';

function App() {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const [postResponse, userResponse, commentsResponse] =
          await Promise.all([
            fetch('https://jsonplaceholder.typicode.com/posts'),
            fetch('https://jsonplaceholder.typicode.com/users'),
            fetch('https://jsonplaceholder.typicode.com/comments'),
          ]);

        const getPosts = await postResponse.json();
        const getUsers = await userResponse.json();
        const getComments = await commentsResponse.json();

        setPosts(getPosts);
        setUsers(getUsers);
        setComments(getComments);
      } catch (error) {
        setError('Az adatok betöltése közben hiba lépett fel.');
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const getPostsData = posts.map((post) => {
    return {
      ...post,
      user: users.find((user) => user.id === post.userId),
      comments: comments.filter((comment) => comment.postId === post.id),
    };
  });

  return (
    <div>
      {/* <PostsCard getPostsData={getPostsData} /> */}
      <PostCard getPostsData={getPostsData} />
    </div>
  );
}

export default App;
