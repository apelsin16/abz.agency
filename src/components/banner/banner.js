import React from 'react';
import './banner.scss';

const Banner = () => {
    return(
        <section className='banner'>
            <div className="wrapper">
                <h1 className="banner__title">Test assignment for Frontend Developer position</h1>
                <p className="banner__text">We kindly remind you that your test assignment should be submitted as a link to github/bitbucket repository. Please be patient, we consider and respond to every application that meets minimum requirements. We look forward to your submission. Good luck!</p>
                <p className="banner__text banner__text--short">We kindly remind you that your test assignment should be submitted as a link to github/bitbucket repository. </p>
                <a  href="#registration" className="banner__button" >Sign Up</a>

            </div>
        </section>
    )
}

export default Banner;
