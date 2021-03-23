import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare,faSearch} from '@fortawesome/fontawesome-free-solid'
// import './App.css';
export default class Navbar extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <div className="navbar navbar-default">
                    <div className="navbar-headr">
                        <button
                            type="button"
                            className="navbar-toggle"
                            data-toggle="collapse"
                            data-target=".navbar-responsive-collapse"
                        >
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                    </div>
                    <div className="navbar-collapse collapse navbar-responsive-collapse">
                        <form className="navbar-form-navbar-left">
                            <div className="ui search">
                                <div className="ui icon input">                                    
                                    <input
                                        className="prompt"
                                        type="text"
                                        placeholder="Search..."
                                    />
                                    <i className="search icon"> <FontAwesomeIcon icon={faSearch} /> </i>
                                    
                                </div>
                                <div className="results"></div>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="alert">
                    <span className="closebtn">&times;</span>
                    <strong> ANNOUNCEMENT !</strong> SALE / DISCOUNT <strong> OFFER.</strong>
                </div>
            </div>
        )
    }
}