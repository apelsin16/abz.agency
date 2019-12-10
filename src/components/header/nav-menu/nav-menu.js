import React from 'react';
import Link from "@material-ui/core/Link";
import './nav-menu.scss';

const NavMenu = (props) => {
    const { user } = props;
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
                            <a href='#acquaintance' onClick={props.handleDrawerToggle} >About me</a>

                        </li>
                        <li className="list__item">
                            <a href='#relationship' onClick={props.handleDrawerToggle} >Relationships</a>
                        </li>
                        <li className="list__item">
                            <a href='#requirement' onClick={props.handleDrawerToggle}>Requirements</a>
                        </li>
                        <li className="list__item">
                            <a href='#users' onClick={props.handleDrawerToggle} >Users</a>
                        </li>
                        <li className="list__item">
                            <a href='#registration' onClick={props.handleDrawerToggle}>Sign Up</a>
                        </li>
                        <li className="list__item">
                            <a href='#registration' onClick={props.handleDrawerToggle}> Sign Out</a>
                        </li>
                    </ul>
                </nav>
            </div>

    )
}

export default NavMenu;
