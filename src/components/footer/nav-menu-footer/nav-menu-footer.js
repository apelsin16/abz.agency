import React from 'react';
import './nav-menu-footer.scss';

const NavMenuFooter = () => {
    return (
        <div className='menu menu--mobile menu--footer' id="menu-footer">
            <nav className="nav nav--footer">
                    <ul className="nav__list list nav__list--bottom">
                        <li className="list__item list__item--bottom">
                            <a href='#acquaintance' >About me</a>
                        </li>
                        <li className="list__item list__item--bottom">
                            <a href='#relationship' >Relationships</a>
                        </li>
                        <li className="list__item list__item--bottom">
                            <a href='#requirement' >Requirements</a>
                        </li>
                        <li className="list__item list__item--bottom">
                            <a href='#users' >Users</a>
                        </li>
                        <li className="list__item list__item--bottom">
                            <a href='#registration' >Sign Up</a>
                        </li>
                    </ul>
                </nav>
        </div>
    )
}

export default NavMenuFooter;
