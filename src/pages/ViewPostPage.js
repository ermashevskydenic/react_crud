import React, {useState, useContext, useEffect, createContext} from 'react'
import Card from '../components/Card';
import Page404 from './Page404';

const PostsContext = createContext({
  posts: [],
});

export default function ViewPostPage({ match, history }) {
  const { posts, handleRemove } = useContext(PostsContext);
  const { id } = match.params;

  const [post, setPost] = useState();

  useEffect(() => {
    if (posts) setPost(posts.find((o) => String(o.id) === id));
    return () => {};
  }, [posts, id]);

  const handleClose = () => {
    handleRemove(id);
    history.push('/');
  }

  return (post && <Card data={post} onClose={handleClose} />) || <Page404/>;
}
