import React from "react";
import Article from "./Article";
import data from "../data.json";
import Stories from "./Stories";
import SearchBar from "./SearchBar";
import './style.css'



function Main() {
  //title is renamed as t to show that title is the property name and t is the property value.
  // {data.hits.map(({ title: t, url, author }) => {
  //  return <Article title={t} url={url} author={author} />;
  //  })}

   let {hits}=data;
   let story_text=hits.story_text ;
    
    
  return (
    <div className="main">

      <p>Main</p>
      {data.hits.map(({ title: t, url, author ,objectID}) => {
        return <Article title={t} url={url} author={author} objectID={objectID}  />;
      })}
      

     {/*----  STORIES SECTION ----- */}
      { hits.map((element) => {
        if (element.story_text!==null) {
      return <Stories id={element.created_at} story_text={element.story_text} author={element.author} /> }  
      else return ;
         } )}


      {/* ----- SEARCH BAR SECTION ---------    */}
        
      <p>SEARCH</p>
    
      <SearchBar />
      
    </div>
  );
}

export default Main;
