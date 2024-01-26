import React from 'react';

const ResumeImg = '/images/Resume.png';

const Resume = () => {
    return (
        <>
            <h1>Resume</h1>
            <div className='resume-page'>
                <img src={ResumeImg}></img>
            </div>
        </>
    );
};

export default Resume;
