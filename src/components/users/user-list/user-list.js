import React from "react";
import './user-list.scss';
import User from "../user/user";

const UserList = (props) => {
    return (

        <ul className="user-list">
            {props.users.map(user =>
                <User key={user.id} {...user} />
            )}
        </ul>
    )
};

export default UserList;

