import React from "react";
import Tooltip from '@material-ui/core/Tooltip';
import './user.scss';

const User = ({name, photo, email, phone, position}) => {
    return (
        <li className='users__item'>
            <img src={photo} alt="user" className="user__img" srcSet={photo}/>
            <div>
                <h3 className="user__name">{name}</h3>
                <Tooltip title={position}>
                    <p className="user__position">{position}</p>
                </Tooltip>
                <Tooltip title={email}>
                    <p className="user__email">{email}</p>
                </Tooltip>
                <Tooltip title={phone}>
                    <p className="user__tel">{phone}</p>
                </Tooltip>
            </div>
        </li>
    )
};

export default User;
