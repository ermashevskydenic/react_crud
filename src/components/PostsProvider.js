import React, {useState, useEffect, createContext} from 'react';

const PostsContext = createContext({
  posts: [],
});
export default function PostsProvider(props) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const update = () => {
    fetch("http://localhost:7777/posts")
    .then(response => response.json())
    .then(posts => {
      setPosts(posts);
      if (loading) setLoading(false);
    });
  };

  useEffect(update, []);

  const handlePush = ( { id = 0, content } ) => {
    console.log({id, content});
    fetch(process.env.REACT_APP_BACKEND_URL, {
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      method: 'POST',
      body: JSON.stringify({ id, content }),
    })
    .then(update);
  };

  const handleRemove = (id) => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/${id}`, { method: 'DELETE' })
    .then(update);
  }

  return (
    <PostsContext.Provider value={{ posts, loading, handlePush, handleRemove }}>
      {props.children}
    </PostsContext.Provider>
  )
}
