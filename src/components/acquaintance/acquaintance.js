import React from "react";
import './acquaintance.scss';
import manMobile from './man-mobile.svg';

const Acquaintance = () => {
    return (
        <section className="section acquaintance" id="acquaintance">
            <h2 className="section__title acquaintance__title">Let's get acquainted</h2>
            <div className="block">
                <div className="block__img">
                    <img src={manMobile} alt="man with mobile" className="section__img acquaintance__img" />
                </div>
                <div className="block__info">
                    <h3 className="section__subtitle acquaintance__subtitle">I am cool frontend
                        developer</h3>
                    <p className='section__text acquaintance__text'>
                        When real users have a slow experience on mobile, they're much less likely to find what they are looking for or purchase from you in the future. For many sites this equates to a huge missed opportunity, especially when more than half of visits are abandoned if a mobile page takes over 3 seconds to load.
                    </p>
                    <p className='section__text acquaintance__text'>
                        Last week, Google Search and Ads teams announced two new speed initiatives to help improve user-experience on the web.
                    </p>
                    <a href='#registration' className="section__link acquaintance__link">Sign Up</a>
                </div>
            </div>
        </section>
    )
};

export default Acquaintance;
