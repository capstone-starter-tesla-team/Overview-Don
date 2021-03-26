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
  changeRating(newRating,name) {
    this.setState({
      rating: newRating,
    });
  }
    componentDidMount() {
        const token = "9edba59329638e16ec4547ccb25fed2a8edcf241"
        axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/11003`, {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-type": "Application/json",
                "Authorization": token
            }
        })
            .then((res) => {
                this.setState({ 
                    category:res.data.category,
                    name:res.data.name
                
                })
            }).catch((err) => {
                console.log(err)
            })
            axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/reviews?product_id=11003`, {

                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Content-type": "Application/json",
                    "Authorization": token
                }
            })
                .then((res) => {
                    this.setState({ rating: res.data.results[0].rating })
                }).catch((err) => {
                    console.log(err)
                })
                axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/11003/styles`, {
                    headers: {
                        "Access-Control-Allow-Origin": "*",
                        "Content-type": "Application/json",
                        "Authorization": token
                    }
                })
                    .then((res) => {
                        this.setState({ 
                            price:res.data.results[0].original_price,
                        })
                    }).catch((err) => {
                        console.log(err)
                    })
    
      }
    render() {
        return (            
            <div  >
                <div className='stars'>
                    <StarRatings
                    rating={this.state.rating}
                        starDimension="15px"
                        starSpacing="2px"
                        numberOfStars={5}
                        name="rating"
                    />
                    <a className="readreview" >  READ ALL REVIEWS</a>
                    <div className='info'>
                        <h4>Category </h4>
                        <h1>Expanded Product</h1>
                        <strong>{this.state.category}</strong>
                        </div>
                        <div className="info">
                        <h1>Name</h1>
                        <strong>{this.state.name}</strong>
                    </div>
                    <div className="price">${this.state.price}</div>
                </div>
               
            </div>
         
         
        )
    }
}
