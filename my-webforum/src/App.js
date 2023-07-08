import React from 'react';
import './App.css';
import { comments } from './CommentData';

const App = () => {
  return (
    <>
      {comments.map((comment, index) => (
        <card key={index} commentObject={comment} />
      ))}
    </>
  )
}
export default App;