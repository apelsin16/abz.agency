import React from 'react';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import './App.css';
import Header from './components/header/header';
import Banner from "./components/banner/banner";
import Acquaintance from "./components/acquaintance/acquaintance";
import Relationship from "./components/relationship/relationship";
import Requirement from "./components/requirement/requirement";
import Users from './components/users/users';
import Registration from "./components/registration/registration";
import Footer from "./components/footer/footer";

class App extends React.Component {
    state = {
        token: '',
        links: {

        },
        page: 1,
        totalUsers: '',
        users: [],
        positions: [],
        error: false,
        openModal: false,
        showMore: true,
    }



    componentDidMount() {
        if (window.innerWidth < 768) {

            axios.get(`https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=3`)
                .then(({data, status}) => {

                    if(status === 200) {
                        this.setState({
                            users: data.users,
                            links: data.links,
                            totalUsers: data.total_users,

                        })
                    }
                })
        } else {

            axios.get(`https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6`)
                .then(({data, status}) => {

                    if(status === 200) {
                        this.setState({
                            users: data.users,
                            links: data.links,
                            totalUsers: data.total_users,
                        })
                    }
                })
        }
        axios.get('https://frontend-test-assignment-api.abz.agency/api/v1/token')
            .then(({data, status}) => {
                if(status===200) {
                    this.setState({
                        token: data.token
                    })
                }
            })
        axios.get('https://frontend-test-assignment-api.abz.agency/api/v1/positions')
            .then(({status, data}) => {
                if(status === 200) {
                    this.setState({
                        positions: data.positions
                    })
                }
            })
    }


    addUser = ({ email, name, phone, position_id }) => {

        const formData = new FormData();
            // file from input type='file'
        const fileField = document.querySelector('input[type="file"]');
        formData.append('position_id', position_id);
        formData.append('name', name);
        formData.append('email', email);
        formData.append('phone', phone);
        formData.append('photo', fileField.files[0]);

        fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users', {
            method: 'POST',
            body: formData,
            headers: {
                'Token': this.state.token, // get token with GET api/v1/token method
            },
        })
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                // console.log(data);
                if(data.success) {
                    this.handleOpenModal();
                } else {
                    // proccess server errors
                }
            })
            .catch(function(error) {
                // proccess network errors
            });
    }

    showMoreUsers = () => {
        let { totalUsers, users} = this.state;

        let count;
        window.innerWidth < 768 ? count = 3 : count = 6;
        if ((totalUsers - users.length) < count) {
            count = (totalUsers - users.length);
        }

        let url = `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${this.state.page + 1}&count=${count}`

        axios.get(url)
            .then(({data, status}) => {
                if(status ===200) {
                    if ( totalUsers === users.length + count) {
                        this.setState({
                            users: [...this.state.users, ...data.users],
                            links: data.links,
                            showMore: false
                        })
                    } else {
                        this.setState({
                            users: [...this.state.users, ...data.users],
                            page: this.state.page + 1,
                            links: data.links,
                        })
                    }

                }
            })
    }

    handleOpenModal = () => {
        this.setState({
            openModal: true
        })
    }

    handleCloseModal = () => {
        this.setState({
            openModal: false
        })
    }



    render() {
        const { users, positions } = this.state;
        return (
            <div className="App">
                <Header user={this.state.users[0]}  />

                <main>
                    <Banner/>
                    <Acquaintance/>
                    <Relationship />
                    <Requirement/>
                    <Users users={users} showMoreUsers={this.showMoreUsers} showMore={this.state.showMore}/>
                    <Registration positions={positions} onAddUser={this.addUser} />
                    <Modal
                        show={this.state.openModal}
                        onHide={() => this.setState({
                            openModal: false
                        })}
                        dialogClassName="modal-90w"
                        aria-labelledby="example-custom-modal-styling-title"
                    >
                        <h2 className="modal__title">Congratulations</h2>
                        <p className="modal__text">You have successfully passed the registration</p>
                        <button className="modal__button" onClick={this.handleCloseModal}>OK</button>
                    </Modal>
                </main>
                <Footer />
            </div>
        );
    }
};



export default App;
