import React, { Component } from 'react'
import StarRatings from 'react-star-ratings'
import axios from 'axios'
export default class Information extends Component {
    constructor(props){
        super(props)
        this.state={

        }
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
