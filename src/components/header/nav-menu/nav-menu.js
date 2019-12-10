import React from 'react';
import Link from "@material-ui/core/Link";
import './nav-menu.scss';

const NavMenu = ({user}) => {
    return (
        <div className='menu menu--mobile' id="menu">
            <div className='user'>
                <img
                    src={user.photo}
                    alt="avatar"
                    srcSet={`${user.photo} 2x`}
                    className="user__avatar" />
                <p className='user__name'>{user.name}</p>
                <p className='user__mail'>{user.email}</p>
            </div>
            <nav className="nav nav--top">
                    <ul className="nav__list list">
                        <li className="list__item">
                            <a href='#acquaintance' >About me</a>

                        </li>
                        <li className="list__item">
                            <a href='#relationship' >Relationships</a>
                        </li>
                        <li className="list__item">
                            <a href='#requirement' >Requirements</a>
                        </li>
                        <li className="list__item">
                            <a href='#users' >Users</a>
                        </li>
                        <li className="list__item">
                            <a href='#registration' >Sign Up</a>
                        </li>
                        <li className="list__item">
                            <a href='foo'> Sign Out</a>
                        </li>
                    </ul>
                </nav>
            </div>

    )
}

export default NavMenu;
