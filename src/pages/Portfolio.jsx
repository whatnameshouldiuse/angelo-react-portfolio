import React from 'react';

import Project from '../components/Project.jsx';

const projImages = [
    '/images/ph_01.jpg',
    '/images/ph_02.jpg',
    '/images/ph_03.jpg',
    '/images/ph_04.jpg',
    '/images/ph_05.jpg',
    '/images/ph_06.jpg',
]

const Portfolio = () => {
    return (
        <div className="d-flex flex-column">
            {projImages.map((image) => (
                <Project projectImage={image} />
            ))}
        </div>
    );
};

export default Portfolio;
