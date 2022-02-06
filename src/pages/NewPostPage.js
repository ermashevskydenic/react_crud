import React, {useState, useContext, createContext} from 'react'
import AddForm from '../components/AddForm';

const PostsContext = createContext({
  posts: [],
});

export default function NewPostPage({ history }) {
  const { handlePush } = useContext(PostsContext);

  const [value, setValue] = useState('');

  const handleSubmit = () => {
    handlePush({ content: value });
    history.push('/');
  };

  return (
    <AddForm
      fields={[{ name: 'content', label: 'Создать пост:', value: value }]}
      onChange={(_, value) => setValue(value)}
      onSubmit={handleSubmit}
    />
  )
}
