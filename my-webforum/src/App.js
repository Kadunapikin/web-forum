import React from 'react';
import './App.css';
import Card from './Card';
import { comments } from './CommentData';


const App = () => {
  return (
    <>
      {comments.map((comment, index) => (
        <Card key={index} commentObject={comment} />
      ))}
    </>
  )
}
export default App;