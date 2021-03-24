import React, { Component } from 'react'
import axios from 'axios'

export default class Style extends Component {
constructor(){
    super()
    this.state={
        style:[],
        bag:""
    }
    this.handelchange=this.handelchange.bind(this)
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
              var styles=  Object.values(elem.skus);  
                this.setState({style:styles})
             })
        
    })
        .catch((err) => {
            console.log(err)
        })
}
handelchange(e) {
    this.setState({
      bag: [{ quantity: e.target.value }]
    })
}
    render() {
        const {style}=this.state
        return (
            < div className="styles" >
            <select onChange={(e) => this.handelchange(e)}  className="selectsize" name="cars" id="cars">
                <option value="Select size">Select size</option>
             {style.map((element,index)=>
                 <option key={index} value={element.size}>{element.size}</option>
             )}
            </select>
            <select onChange={(e) => this.handelchange(e)}className="quantity" name="cars" id="cars">
             <option value="1">1</option>
                {style.map((element,index)=>
                <option key={index} value={element.quantity}>{element.quantity}</option>
                )}  
            </select>
            <input className="addtocart" type="submit" value="Add to cart    +" />
            
        </div >
        )
    }
}

