import React, { Component } from 'react'
import StarRatings from 'react-star-ratings'
import axios from 'axios'
export default class Information extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
           
        }
       
    }
    componentDidMount() {
        const token = "da973ef82d5b47c1e575b6bb5cbbcd6ae7f8b592"
        axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products`, {

            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-type": "Application/json",
                "Authorization": token
            }
        })
            .then((res) => {
                this.setState({ data: res.data })
            }).catch((err) => {
                console.log(err)
            })
    
      }
    render() {
        return (
            <div className='starsrating'>
                <div className='stars'>
                    <StarRatings
                        starDimension="30px"
                        starSpacing="2px"
                        numberOfStars={5}
                        name="rating"
                    />
                    <a className="readreview" >READ ALL REVIEWS</a>
                    <div className='info'>
                        Category <br />
                        <strong>Jacket</strong>
                        </div>
                        <div className="info">
                        <strong>name</strong>
                    </div>
                    <div className="price">$500</div>
                </div>
               
            </div>
        )
    }
}
