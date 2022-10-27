import React, { useEffect, useState } from 'react'
import data from '../data.json'
import '../index.css'
import './style.css'


function SearchBar() {
    let { hits } = data;
    let [searchKey, setSearchKey] = useState('');
    let [noResult,setNoResult]=useState('none');
    let [searchResults, setSearchResults] = useState([]);

  
    //     getting the search key work
    const handleChange = (e) => {
        setSearchKey(e.target.value);
    }

    //     search function
    const handleSubmit = (e) => {
        e.preventDefault();
        if(searchKey===''){
               alert("please Enter something!") ;
               return;
            }
        const results = hits.filter((element) => element.title.includes(searchKey))
        console.log("results", results)
        setSearchResults(results);
        setNoResult(true);
    }

    return (
        <div>
             <form onSubmit={handleSubmit}>
                <input type='text' value={searchKey} onChange={handleChange} placeholder="enter something"></input>
                <button type='submit' >Search </button>
            </form> 

             {/* <p> SEARCH RESULTS </p> */}
            { 
            (searchResults.length !== 0)   ?
              searchResults.map((element) => { return (
                    <div id={element.objectID} className="search-result">
                        <h3>{element.title}</h3>
                        <h4>{element.author}</h4>
                        <p>{element.url}</p>
                    </div> )
                }) 
                : <div style={{display:noResult}}> "No result found !" </div>
            }
        </div>
    )
}

export default SearchBar;
