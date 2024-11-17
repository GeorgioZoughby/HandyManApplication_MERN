import React from "react"
import "./Search.css"



const Search = () => {
    return (
        <div className="search">
            <input className="search-input" type="text" placeholder="What's on your To-Do list?" />
            <button className="search-button" type="text"><i className="bi bi-search"></i></button>
        </div>
    );
}

export default Search;