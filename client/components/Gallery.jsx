import React, { Component } from 'react'
import Information from './Information.jsx'
import axios from 'axios'
import Style from './Style.jsx'
export default class Gallery extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            images: []
        }
    }
    componentDidMount() {
        const token = "bcdce18c68547bfd6fca0bc5b11da2c8a63c7e34"
        axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/11003/styles`, {

            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-type": "Application/json",
                "Authorization": token
            }
        })
            .then((res) => {
                res.data.results.map((elem) => {
                    var styles = Object.values(elem.photos);
                    var array = []
                    styles.map((element) => {
                        array.push(element.url)
                        this.setState({ data: array })
                    })


                })

            })
            .catch((err) => {
                console.log(err)
            })
    }

    render() {
        const { images, data } = this.state
        return (

            <div className="inline1">
                <div className="container">
                    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img className="block" src={data[0]} alt="First slide" />
                            </div>
                            <div className="carousel-item">
                                <img className="block" src={data[1]} alt="Second slide" />
                            </div>
                            <div className="carousel-item">
                                <img className="block" src={data[2]} alt="Second slide" />
                            </div>
                            <div className="carousel-item">
                                <img className="block" src={data[3]} alt="Second slide" />
                            </div>
                            <div className="carousel-item">
                                <img className="block" src={data[4]} alt="Second slide" />
                            </div>
                            <div className="carousel-item">
                                <img className="block" src={data[5]} alt="Second slide" />
                            </div>
                            <div className="carousel-item">
                                <img className="block" src={data[6]} alt="Second slide" />
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                    </div>
                    <div className="inline2">
                        <Information />
                        <Style />
                    </div>
                
            </div>


        )
    }
}
