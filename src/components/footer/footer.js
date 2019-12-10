import React from "react";
import './footer.scss';
import logo from './logo.svg';
import NavMenuFooter from "./nav-menu-footer/nav-menu-footer";
import Contacts from "./contacts/contacts";
import Icon from "../shared/icon/icon";
import fb from "./contacts/facebook.svg";
import linkedin from "./contacts/linkedin.svg";
import insta from "./contacts/instagram.svg";
import twitter from "./contacts/twitter.svg";
import pinterest from "./contacts/pinterest.svg";

const Footer = () => {
    return (
        <footer className="footer" >
            <div className="footer__top">
                <a href="#abz">
                    <img src={logo} alt="Logo" className='footer__logo'/>
                </a>
                <NavMenuFooter />
            </div>
            <div className="footer__main">
                <Contacts />
                <ul className="footer__list">
                    <li>
                        <ul className="footer__sublist">
                            <li><a href="foo">News</a></li>
                            <li><a href="foo">Blog</a></li>
                            <li><a href="foo">Partners</a></li>
                            <li><a href="foo">Shop</a></li>
                        </ul>
                    </li>
                    <li>
                        <ul className="footer__sublist">
                            <li><a href="foo">Overview</a></li>
                            <li><a href="foo">Design</a></li>
                            <li><a href="foo">Code</a></li>
                            <li><a href="foo">Collaborate</a></li>
                        </ul>
                    </li>
                    <li>
                        <ul className="footer__sublist">
                            <li><a href="foo">Tutorials</a></li>
                            <li><a href="foo">Resources</a></li>
                            <li><a href="foo">Guides</a></li>
                            <li><a href="foo">Examples</a></li>
                        </ul>
                    </li>
                    <li>
                        <ul className="footer__sublist">
                            <li><a href="foo">FAQ</a></li>
                            <li><a href="foo">Terms</a></li>
                            <li><a href="foo">Conditions</a></li>
                            <li><a href="foo">Help</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className="footer__bottom">
                <p className="legal">© abz.agency specially for the test task</p>
                <ul className="socials">
                    <li className="socials__item">
                        <a href="https://uk-ua.facebook.com/" className="socials__link">
                            <Icon type={fb} />
                        </a>
                    </li>
                    <li className="socials__item">
                        <a href="https://www.linkedin.com/" className="socials__link">
                            <Icon type={linkedin} />
                        </a>
                    </li>
                    <li className="socials__item">
                        <a href="https://www.instagram.com/" className="socials__link">
                            <Icon type={insta} />
                        </a>
                    </li>
                    <li className="socials__item">
                        <a href="https://twitter.com/" className="socials__link">
                            <Icon type={twitter} />
                        </a>
                    </li>
                    <li className="socials__item">
                        <a href="https://www.pinterest.com/" className="socials__link">
                            <Icon type={pinterest} />
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    )
};

export default Footer;
