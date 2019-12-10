import React from 'react';
import './header.scss';
import logo from "./logo.svg";
import menuButton from "./line-menu.svg";
import NavMenu from "./nav-menu/nav-menu";
import Drawer from '@material-ui/core/Drawer';
import Icon from "../shared/icon/icon";
import signOut from './sign-out.svg';
import axios from "axios";

class Header extends React.Component {

    state = {
        drawerOpen: false,
        user: {}
    }

    componentDidMount() {
        axios.get('https://frontend-test-assignment-api.abz.agency/api/v1/users/1')
            .then(({data, status}) => {
                if(status === 200) {
                    this.setState({
                        user: data.user,
                    }
                )
            }
        })
    }


    handleDrawerToggle = () => {
        this.setState({
            drawerOpen: !this.state.drawerOpen
        })
    };


    render() {
        const { user } = this.state;
        return (
            <header className='header' id="abz">

                <div className='header__top'>
                    <a href='#abz' className='logo-link' rel='noopener noreferrer'>
                        <img src={logo} alt='Logo' />
                    </a>
                    <button className="menu-button" onClick={this.handleDrawerToggle} >
                        <Icon type={menuButton}/>
                    </button>
                    <nav className="header__nav nav">
                        <ul className="nav__list nav__list--top">
                            <li><a href="#acquaintance">About me</a></li>
                            <li><a href="#relationship">Relationships</a></li>
                            <li><a href="#requirement">Requirements</a></li>
                            <li><a href="#users">Users</a></li>
                            <li><a href="#registration">Sign Up</a></li>
                        </ul>
                    </nav>
                    <div className="user-account">
                        <div>
                            <p className="user-account__name">{user.name}</p>
                            <p className="user-account__email">{user.email}</p>
                        </div>
                        <img src={user.photo} alt="user" className="user-account__photo"/>
                        <button className="user-account__button">
                            <Icon type={signOut}/>
                        </button>
                    </div>

                </div>
                <Drawer
                    open={this.state.drawerOpen}
                    onClose={this.handleDrawerToggle}
                >
                    <NavMenu user={user} handleDrawerToggle={this.handleDrawerToggle} />
                </Drawer>
            </header>
        )
    }
}

export default Header;

