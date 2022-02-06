import React, {createContext, useContext} from 'react'
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import './HomePage.css';

const PostsContext = createContext({
    posts: [],
});

export default function HomePage({ history }) {
  const { posts, loading } = useContext(PostsContext);

  return (
    <div className='home'>
      <button className='new-post-btn'>
        <Link to='/posts/new'>{'Создать пост'}</Link>
      </button>
      <div className='body'>
        { loading && <div>{'Loading...'}</div> }
        { posts.map((o) => <Card data={o} key={o.id} onClick={() => history.push(`/posts/${o.id}`)} />) }
      </div>
    </div>
  )
}
