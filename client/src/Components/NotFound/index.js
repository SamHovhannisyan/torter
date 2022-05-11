import React from 'react';
import css from './notFound.module.css';
import {Link} from "react-router-dom";
import {Container} from "react-bootstrap";

const NotFound = () => {
    return (
        <div className={css.mainBg}>
            <Container>
                <div className={css.containerrr2}>
                    <h2>Oops! Page not found.</h2>
                    <h1>404</h1>
                    <p>We can't find the page you're looking for.</p>
                    <Link to={'/'}>Go back home</Link>
                </div>
            </Container>
        </div>
    );
};

export default NotFound;