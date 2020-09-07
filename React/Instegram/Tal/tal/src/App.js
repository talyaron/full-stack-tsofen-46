import React from 'react';
// import logo from './logo.svg';
import './App.css';

//components

const stories = [
  {img:'https://i.pinimg.com/originals/97/e4/2a/97e42a82fc7911961d3ca55f54d1372c.jpg', text:'bla'},
  {img:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTJxJo9xQYG8gWAEQFEWrjcBcnYvTbQUxxMiA&usqp=CAU', text:'blo'},
  {img:'https://i.pinimg.com/originals/97/e4/2a/97e42a82fc7911961d3ca55f54d1372c.jpg', text:'bla'},
  {img:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTJxJo9xQYG8gWAEQFEWrjcBcnYvTbQUxxMiA&usqp=CAU', text:'blo'},
  {img:'https://i.pinimg.com/originals/97/e4/2a/97e42a82fc7911961d3ca55f54d1372c.jpg', text:'bla'},
  {img:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTJxJo9xQYG8gWAEQFEWrjcBcnYvTbQUxxMiA&usqp=CAU', text:'blo'},
  {img:'https://i.pinimg.com/originals/97/e4/2a/97e42a82fc7911961d3ca55f54d1372c.jpg', text:'bla'},
  {img:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTJxJo9xQYG8gWAEQFEWrjcBcnYvTbQUxxMiA&usqp=CAU', text:'blo'},
  {img:'https://i.pinimg.com/originals/97/e4/2a/97e42a82fc7911961d3ca55f54d1372c.jpg', text:'bla'},
  {img:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTJxJo9xQYG8gWAEQFEWrjcBcnYvTbQUxxMiA&usqp=CAU', text:'blo'},
  {img:'https://i.pinimg.com/originals/97/e4/2a/97e42a82fc7911961d3ca55f54d1372c.jpg', text:'bla'},
  {img:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTJxJo9xQYG8gWAEQFEWrjcBcnYvTbQUxxMiA&usqp=CAU', text:'blo'},
  {img:'https://i.pinimg.com/originals/97/e4/2a/97e42a82fc7911961d3ca55f54d1372c.jpg', text:'bla'},
  {img:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTJxJo9xQYG8gWAEQFEWrjcBcnYvTbQUxxMiA&usqp=CAU', text:'blo'},
  {img:'https://i.pinimg.com/originals/97/e4/2a/97e42a82fc7911961d3ca55f54d1372c.jpg', text:'bla'},
  {img:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTJxJo9xQYG8gWAEQFEWrjcBcnYvTbQUxxMiA&usqp=CAU', text:'blo'},
  {img:'https://i.pinimg.com/originals/97/e4/2a/97e42a82fc7911961d3ca55f54d1372c.jpg', text:'bla'},
  {img:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTJxJo9xQYG8gWAEQFEWrjcBcnYvTbQUxxMiA&usqp=CAU', text:'blo'},
  {img:'https://i.pinimg.com/originals/97/e4/2a/97e42a82fc7911961d3ca55f54d1372c.jpg', text:'bla'},
  {img:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTJxJo9xQYG8gWAEQFEWrjcBcnYvTbQUxxMiA&usqp=CAU', text:'blo'},
  {img:'https://i.pinimg.com/originals/97/e4/2a/97e42a82fc7911961d3ca55f54d1372c.jpg', text:'bla'},
  {img:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTJxJo9xQYG8gWAEQFEWrjcBcnYvTbQUxxMiA&usqp=CAU', text:'blo'},
  {img:'https://i.pinimg.com/originals/97/e4/2a/97e42a82fc7911961d3ca55f54d1372c.jpg', text:'bla'},
  {img:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTJxJo9xQYG8gWAEQFEWrjcBcnYvTbQUxxMiA&usqp=CAU', text:'blo'}
]

const posts = [
  {img:'https://i.pinimg.com/originals/97/e4/2a/97e42a82fc7911961d3ca55f54d1372c.jpg', text:'bla'},
  {img:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTJxJo9xQYG8gWAEQFEWrjcBcnYvTbQUxxMiA&usqp=CAU', text:'blo'}
]


function App() {


  return (
    <div>
      <div className='stories'>
        {stories.map((story,index)=>{
          return(<Story key={index} story={story}/>)
        })}
      </div>
      <div className='feed'>
        {posts.map((post,index)=>{
            return(<Feed key={index} post={post}/>)
          })}
      </div>
     </div>
  );
}



function Story(props){

  const {story} = props

  return(<div className='story'>
    <img src={story.img} alt={story.text}/>
    <p>{story.text}</p>
  </div>)
}


function Feed(props){

  const {post} = props

  return(<div className='post'>
    <img src={post.img} alt={post.text}/>
    <p>{post.text}</p>
  </div>)
}

export default App;
