import React from 'react'
import Main from './Main';
import './style.css'

function Stories(props) {
  return (
    <div id={props.created_at} className='stories-class'>
        <p>{props.story_text}</p>
         <div>{props.author}</div>
         
    </div>
  )
}

export default Stories


