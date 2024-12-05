import React, { useState } from 'react';
import './Search.css';

const SearchBar = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [, setLoading] = useState(false);
    let activeFetchId = 0;

    const handleSearch = async (event) => {
        const value = event.target.value;
        setQuery(value);

        if (value.trim() === '') {
            setResults([]);
            return;
        }

        const currentFetchId = ++activeFetchId;

        try {
            setLoading(true);
            const response = await fetch(`api/search?q=${value}`);
            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }
            const data = await response.json();

            if (currentFetchId === activeFetchId && value.trim() !== '') {
                setResults(data);
            }
        } catch (error) {
            console.error('Error fetching search results:', error);
        } finally {
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
            {results.length > 0 && query.trim() !== '' && (
                <ul className="search-results" style={{ listStyleType: 'none' }}>
                    {results.map((result) => (
                        <a href={`booking/${result._id}`} key={result._id} onClick={() => setQuery(result.subservice_name)}>
                            <li className="results">{result.subservice_name}</li>
                        </a>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SearchBar;
