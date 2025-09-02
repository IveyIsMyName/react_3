import React from 'react';
import logo from '../logo.svg';
import Header from './header/Header.js';
import './App.css';
import Hello from './hello/Hello.js';
import Length from './length/Length.js';
import DecimalToBinary from './decimal_to_binary/DecimalToBinary.js';
import DecimalToHex from './decimal_to_hex/DecimalToHex.js';
import Form from './form/Form.js';
import Range from './range/Range.js';
import Posts from './posts/Posts.js';
import Post from './post/Post.js';

class App extends React.Component {
  state =
  {
    posts:
    [
      {id:"1", 
      title:"Процедурное программирование на языке C++",
      content:"Изучаются базовые конструкции языка C++"},
      {id:"2", 
      title:"Объективно-ориентированное программироание на языке C++",
      content:"Изучаются базовые концепции ООП на языке C++"},
      {id:"3", 
      title:"DataContainers",
      content:"Изучаются основные структуры данных"}
    ]
    }
  
  render() {
    return (
      <div className="App">
    <Header />
    {/* <Hello />
    <Length />
    <hr />
    <DecimalToBinary />
    <hr />
    <DecimalToHex />
    <Form />
    <Range /> */}
    <Posts posts={this.state.posts}/>
    {/* <Post title = "title" content = "content"/> */}
    </div>
  );
}
}

export default App;
