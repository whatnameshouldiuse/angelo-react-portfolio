import React from 'react';

const Contact = () => {
    return (
        <>
            <h1>
                Contact
            </h1>
            <div className='d-flex contact-page'>
                <article className="contact-card">
                    <h3>Phone</h3>
                    <hr />
                    <p>&#40;512&#41;461-7804</p>
                </article>
                <article className="contact-card">
                    <h3>Email</h3>
                    <hr />
                    <p>hajccts417@gmail.com</p>
                </article>
                <article className="contact-card">
                    <h3>Github</h3>
                    <hr />
                    <p>@whatnameshouldiuse</p>
                </article>
                <article className="contact-card">
                    <h3>LinkedIn</h3>
                    <hr />
                    <p>Hyunjun Jeon</p>
                </article>
            </div>
        </>
    );
};

export default Contact;
