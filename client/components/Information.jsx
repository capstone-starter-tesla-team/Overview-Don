import React, { Component } from 'react'
import StarRatings from 'react-star-ratings'
import axios from 'axios'
export default class Information extends Component {
    constructor(props) {
        super(props)
        this.state = {
            rating:0,
            name:"",
            category:"",
            price:"",
            value: 0,
        }   
    }
  changeRating(newRating) {
    this.setState({
      rating: newRating,
    });
  }
  
    render() {
        return (            
            <div className="row" >
                <div className="row">
                <div className='stars'>
                    <StarRatings 
                    rating={this.props.data.rating}
                        starDimension="16px"
                        starSpacing="2px"
                        numberOfStars={5}
                        name="rating" />  
                        <a className="readreview">READ ALL REVIEWS</a>
                        </div>
                        </div>
                    <div className="col">
                    <div className='info'>
                        <h4>Category</h4>
                        <strong>{this.props.data.category}</strong>
                        </div>
                        <div className="info">
                        <h1>Name</h1>
                        <strong>{this.props.data.name}</strong>
                    </div>
                    <div className="price">${this.props.data.price}</div>
                
               </div>
            </div>
         
         
        )
    }
}
