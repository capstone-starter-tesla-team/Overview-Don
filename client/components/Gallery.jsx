import React, { Component } from 'react'
import Information from './Information.jsx'
import axios from 'axios'
import Style from './Style.jsx'
export default class Gallery extends Component {
    constructor(props){
        super(props)
        this.state={
            data:[]
        }
    }
    componentDidMount(){
        const token = "da973ef82d5b47c1e575b6bb5cbbcd6ae7f8b592"
        axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/11003/styles`, {
    
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-type": "Application/json",
                "Authorization": token
            }
        })
            .then((res) => {  
                res.data.results.map((elem) => {
                    var styles=  Object.values(elem.photos);  
                    this.setState({data:styles})
                 })
            
       
            .catch((err) => {
                console.log(err)
            })
    })
}
    render() {
        const {data}=this.state
        // jQuery(document).ready(function ($) {
        //     $("#myCarousel").carousel({
        //       interval: 50000,
        //     });
        // })
        return (
            <div>
            <div className="inline1">
           
                <div className="container">
                    <div className="carousel-item active">
                        <img className="thumbnail" src="https://images.unsplash.com/photo-1499714832275-d6205d94c35d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80"/>
                        {console.log(data)}
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
                </div>
        
                <div className="inline2">
                    <Information />
                    <Style />
                    </div>
                </div>
           

        )
    }
}
