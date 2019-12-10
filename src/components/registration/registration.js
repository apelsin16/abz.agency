import React from "react";
import './registration.scss';
import Form from "./form/form";

const Registration = props => {
    return (
        <section className="section registration" id='registration'>
            <h2 className="section__title registration__title">
                Register to get a work
            </h2>
            <p className="section__text registration__text">
                Attention! After successful registration and alert, update the list of users
                in the block from the top
            </p>
            <Form {...props}/>
        </section>
    )
};

export default Registration;
