import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage';
import NewPostPage from './pages/NewPostPage';
import ViewPostPage from './pages/ViewPostPage';
import PostsProvider from './components/PostsProvider';
import Page404 from './pages/Page404';

import './App.css';

export default function App() {

  return (
      <PostsProvider>
        <div className="App">
          <Router>
            <Routes>
              <Route path='/posts/new' component={NewPostPage}/>
              <Route path='/posts/:id([0-9]+)?' component={ViewPostPage}/>
              <Route exact path='/' component={HomePage}/>
              <Route component={Page404}/>
            </Routes>
          </Router>
        </div>
      </PostsProvider>
  );
}
