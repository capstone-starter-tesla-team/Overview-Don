import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faSearch } from '@fortawesome/fontawesome-free-solid'
import axios from "axios"
export default class Navbar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            search: [],
            data: []
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e) {
        const { data } = this.state
        if (e.target.value === '') {
            this.setState({ search: [] })
            return
        }
        var storage = []
        data.map(element => {
            if (element.name.toLowerCase().includes(e.target.value.toLowerCase())) {
                storage.push(element)
            }
        })


        this.setState({ search: storage })
    }
    componentDidMount() {
        const token = "f7c4293210902d0d6b19e8a637d428c26496e090"
        axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products`, {

            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-type": "Application/json",
                "Authorization": token
            }
        })
            .then((res) => {
                this.setState({ data: res.data })
            })
            .catch((err) => {
                console.log(err)
            })
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
                                <div className="icon ">
                                    <input
                                        onChange={(e) => this.handleChange(e)}
                                        className="prompt"
                                        type="text"
                                        placeholder="Search..."
                                    />
                                    <a href="#" className="search icon"> <FontAwesomeIcon icon={faSearch} /> </a>

                                </div>
                                <div className="search-result"> {this.state.search.map((e, i) =>
                                    <div className="search-element" key={i} onClick={() => this.props.changeId(e.id)} >{e.name}</div>)}
                                </div>
                            </div>
                        </form>
                    </div>
                    <a className="navbar-brand" href="#">
                        <img
                            className="logo"
                            src="https://hungamadeal.co.in/wp-content/uploads/2020/06/freesnippingtool.com_capture_20200620213653.png"
                            style={{ width: 100, height: 50 }}
                        />
                    </a>
                </div>

                <div className="alert">
                    <span className="closebtn">&times;</span>
                    <strong> ANNOUNCEMENT !</strong> SALE / DISCOUNT <strong> OFFER ——</strong><a className="readreview"> NEW PRODUCT HIGHLIGHT</a>
                </div>
            </div>
        )
    }
}
