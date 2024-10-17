import React from 'react';

const SearchResultContainer = ({ results }) => {
    return (
        <div>
            {results.length > 0 ? (
                results.map((result, index) => (
                    <div key={index}>
                        <p>{result}</p>
                    </div>
                ))
            ) : (
                <p>No results found.</p>
            )}
        </div>
    );
};

export default SearchResultContainer;
