import React from 'react';
import useAdvancedFetch from '../../hooks/useAdvancedFetch';

function CustomComponent() {
    const { data, loading, error } = useAdvancedFetch("http://localhost:3000/api/moviedata", {}, 3);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <>
            <div className="movie-name">
                <span>Name</span>
                <p>{data?.moviename}</p>
            </div>
            <div className="hero-name">
                <span>Hero</span>
                <p>{data?.heroname}</p>
            </div>
        </>
    );
}

export default CustomComponent;
