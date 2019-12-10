import React from "react";
import './form.scss';

const INITIAL_STATE = {
    image: '',
    position: '',
    name: '',
    tel: '',
    email: '',
    notEmpty: false
}



export default class Form extends React.Component {

    state = {...INITIAL_STATE};



    handleChange = e => {

        const name = e.target.name;
        const value = e.target.value;
        if( this.state.name !== '' ) {
            this.setState( {
                [name]: value,
                notEmpty: true
            })
        } else {
            this.setState({
                [name]: value
            })
        }

    };

    fileInputChange = (e) => {
        this.setState({image:e.target.files[0]})
    }

    handleSubmit = e => {
        e.preventDefault();

        const { name, tel, email, position, image } = this.state;

        this.props.onAddUser({
            email,
            name,
            phone: tel,
            photo: image,
            position_id: position,
        });
        this.setState({ ...INITIAL_STATE });
    }

    render () {
        const { positions } = this.props;
        return (
            <form className="form" onSubmit={this.handleSubmit}>
                <div className="input-block">
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        onChange={this.handleChange}
                        placeholder="Your name"
                        required
                    />
                </div>
                <div className="input-block">
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        onChange={this.handleChange}
                        placeholder="Your email"
                        required
                      />
                </div>
                <div className="input-block">
                    <label>Phone</label>
                    <input
                        type="tel"
                        name="tel"
                        onChange={this.handleChange}
                        placeholder="+38 (___) ___ __ __"
                        pattern="^[\+]{0,1}380([0-9]{9})$"
                        required
                    />
                </div>
                <select
                    name="position"
                    onChange={this.handleChange}
                    placeholder="+38 (___) ___ __ __"
                    required
                >
                    <option value="" >Select your position</option>

                    {positions.map(option => (
                        <option key={option.id} value={option.id}>
                            {option.name}
                        </option>
                    ))}
                </select>
                <div className="input-wrapper">
                    <input required type="file"  id="file" className="inputfile" onChange={this.fileInputChange}/>
                    <label htmlFor="file">Upload your photo</label>
                </div>
                <p className="upload__text">
                    File format jpg  up to 5 MB, the minimum size
                    of 70x70px
                </p>
                {
                    this.state.notEmpty ?
                        <button className="banner__button"  type='submit'>Sign Up</button> :
                        <button className="form__button" disabled type='submit'>Sign Up</button>
                }
                {/*<button className="form__button" type='submit'>Sign Up</button>*/}
            </form>
        )
    }

};
