import React, { Component } from 'react'
import StarRatings from 'react-star-ratings'
import axios from 'axios'
export default class Information extends Component {
    constructor(props){
        super(props)
        this.state={
             category:[]
        }
    }
    componentDidMount(){
        axios.get("http://159.89.0.200:5000/overview/api/category")
        .then((res)=>{console.log(res,'hello')})
    }
    render() {
        return (
            <div className='starsrating'>
                <div className='star'>
                <StarRatings  
                starDimension="30px"
                starSpacing="2px"
                />
                </div>
                
            </div>
        )
    }
}
