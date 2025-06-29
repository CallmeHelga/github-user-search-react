import "./SearchBar.css"
import React from "react"
import { useState } from "react"
import searchIcon from '../assets/icon-search.svg'

export default function SearchBar(props) {
    const [query, setQuery] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        if (query.trim() !== "") {
            props.onSearch(query.trim());
        }
    }

    return (
        <div className='search-container'>
            <form onSubmit={handleSubmit}
                className='search-bar'>
                <img src={searchIcon} alt="Search Icon" />
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search GitHub username…"
                    aria-label="Search field" />
                {props.error && (
                    <span className="error-text">No results</span>
                )}
                <button className="search-btn" type="submit">
                    Search
                </button>
            </form>
        </div>

    )
}
