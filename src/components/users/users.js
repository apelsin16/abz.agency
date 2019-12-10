import React from "react";
import './users.scss';
import UserList from "./user-list/user-list";
import Button from "../shared/button/button";

const Users = (props) => {
    return (
        <section className="section users" id="users">
            <h2 className="section__title users__title">Our cheerful users</h2>
            <p className="section__text users__text">Attention! Sorting users
                by registration date</p>
            <UserList {...props}/>
            {props.showMore ?
                <Button text="Show more" styleName="users__button" click={props.showMoreUsers}/> :
                null }
        </section>
    )
};

export default Users;
