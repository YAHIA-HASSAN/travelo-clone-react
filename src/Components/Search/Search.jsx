import React, { useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import SearchResultContainer from '../SearchResult/SearchResult';
import './Search.css';

const Search = () => {
    const [destination, setDestination] = useState('');
    const [date, setDate] = useState('');
    const [travelMode, setTravelMode] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const mockResults = [
            `Results for ${destination} on ${date} by ${travelMode}`
        ];
        setSearchResults(mockResults);
    };

    return (
        <div className="search-data" id='search-section'>
            <h3>Where do you want to go?</h3>
            <SearchBar
                destination={destination}
                setDestination={setDestination}
                date={date}
                setDate={setDate}
                travelMode={travelMode}
                setTravelMode={setTravelMode}
                handleSubmit={handleSubmit}
            />
            <SearchResultContainer results={searchResults} />
        </div>
    );
};

export default Search;
