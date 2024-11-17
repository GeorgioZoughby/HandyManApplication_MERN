import React, { useState } from 'react';
import './Search.css';

const SearchBar = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    let activeFetchId = 0; // Unique identifier for fetch calls

    const handleSearch = async (event) => {
        const value = event.target.value;
        setQuery(value);

        if (value.trim() === '') {
            setResults([]);
            return;
        }

        const currentFetchId = ++activeFetchId; // Increment fetch ID for this call

        try {
            setLoading(true);
            const response = await fetch(`http://localhost:5000/api/search?q=${value}`);
            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }
            const data = await response.json();

            // Only update results if this is the latest fetch call
            if (currentFetchId === activeFetchId) {
                setResults(data);
            }
        } catch (error) {
            console.error('Error fetching search results:', error);
        } finally {
            // Only clear loading state if this is the latest fetch call
            if (currentFetchId === activeFetchId) {
                setLoading(false);
            }
        }
    };

    return (
        <div>
            <input
                type="text"
                placeholder="What's on your to-do list?"
                value={query}
                className="search-input"
                onChange={handleSearch}
            />
            {results.length > 0 && (
                <ul className="search-results" style={{ listStyleType: 'none' }}>
                    {results.map((result) => (
                        <a href="#" key={result._id} onClick={() => setQuery(result.name)}>
                            <li className="results">{result.name}</li>
                        </a>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SearchBar;
