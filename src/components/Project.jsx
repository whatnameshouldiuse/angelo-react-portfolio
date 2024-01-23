import React from 'react';
import PropTypes from 'prop-types';

const Project = ({ projectImage }) => {
    return (
        <div className="project">
            <figure style={{
                backgroundImage: `url(${projectImage})`
            }}></figure>
        </div>
    );
};

Project.propTypes = {
    projectImage: PropTypes.string.isRequired
};

export default Project;
