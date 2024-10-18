import React from 'react';
import './SearchResult.css'; // Import the CSS file here

const SearchResultContainer = ({ results }) => {
    return (
        <div className="search-result-continer">
            {results.length > 0 ? (
                results.map((result) => (
                    <div key={result.id} className="travel-card">
                        <div className="card-img">
                            <img src={result.photoURL} alt={result.city} className="img-fluid" />
                            <div className="price-tag">${result.price}</div>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">{result.city}, {result.country}</h5>
                            <p className="card-location">Travel by: {result.travelMethod}</p>
                            <p>Hotel: {result.hotelDetails.hotelName}</p>
                            <p>Rating: {result.hotelDetails.rating} stars</p>
                            <p>Amenities: {result.hotelDetails.amenities.join(', ')}</p>
                        </div>
                        <div className="card-footer">
                            <span><i className="fa fa-clock-o"></i> 5 Days</span>
                        </div>
                    </div>
                ))
            ) : (
                <p>No results found.</p>
            )}
        </div>
    );
};

export default SearchResultContainer;
