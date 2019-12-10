import React from "react";
import  './requirement.scss';
import manLaptop from './man-laptop-v1.svg';
import manLaptop2 from './man-laptop-v2.svg';

const Requirement = () => {
    return (
        <section className="section requirement" id="requirement">
            <div className="wrapper">
                <h2 className="section__title requirement__title">General requirements for the test task</h2>
                <div className="block requirement__block">
                    <img src={manLaptop} alt="Man with laptop" className="section__img requirement__img"/>
                    <img src={manLaptop2} alt="Man with laptop" className="section__img requirement__img requirement__img--v2"/>
                    <div>
                        <p className="section__text requirement__text">
                            Users want to find answers to their questions quickly and data shows that people really care about how quickly their pages load. The Search team announced speed would be a ranking signal for desktop searches in 2010 and as of this month (July 2018), page speed will be a ranking factor for mobile searches too.
                        </p>
                        <p className="section__text requirement__text">
                            If you're a developer working on a site, now is a good time to evaluate your performance using our speed tools. Think about how performance affects the user experience of your pages and consider measuring a variety of real-world user-centric performance metrics.
                        </p>
                        <p className="section__text requirement__text">
                            Are you shipping too much JavaScript? Too many images? Images and JavaScript are the most significant contributors to the page weight that affect page load time based on data from HTTP Archive and the Chrome User Experience Report - our public dataset for key UX metrics as experienced by Chrome users under real-world conditions.
                        </p>
                    </div>

                </div>
            </div>


        </section>
    )
}

export default Requirement;
