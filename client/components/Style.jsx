import React, { Component } from 'react'
import axios from 'axios'
import swal from 'sweetalert';

export default class Style extends Component {
constructor(){
    super()
    this.state={
        style:[],
        name: "black",
        info:[],
        bag:[]
    }
    this.handelchange=this.handelchange.bind(this)
}
componentDidMount(){
    const token = "9edba59329638e16ec4547ccb25fed2a8edcf241"
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/11003/styles`, {

        headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-type": "Application/json",
            "Authorization": token
        }
    })
        .then((res) => {             
                this.setState({style:res.data.results})      
    })
        .catch((err) => {
            console.log(err)
        })
        axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/11003`, {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-type": "Application/json",
                "Authorization": token
            }
        })
            .then((res) => {
                
                this.setState({info:res.data})
            }).catch((err) => {
                console.log(err)
            })
}
change(name) {
    this.setState({
      name: name,
    });
  }
addCart() {
    swal('Added product to the card successfully')
    swal({
      title: "'Added product to the cart successfully'",
      text: "'Added product to the cart successfully'",
      icon: "success",
    })
  }
handelchange(e) {
    this.setState({
      bag: [{ quantity: e.target.value }]
    })
}
    render() {
        const {style,info}=this.state
        return (
            <div>
            < div className="styles" >
                <strong>Styles > </strong> {info.name}
              </div>
              <div className="row">
              {style.map((element,index)=>
                  <div key={index} id={element.style_id} style={{background:element.name}} className="circle">
                      <div onClick={()=>this.change(element.name)}> 
                    <span
                  onClick={()=>this.props.styeimages(element.photos)}     
                  ></span>
                  </div>
                  </div>
              )}
             </div>
            <select onChange={(e) => this.handelchange(e)}  className="selectsize" name="cars" id="cars">
                <option value="Select size">Select size</option>
             {style.map((element,index)=>
                 <option key={index} value={element.size}>{element.size}</option>
             )}
            </select>
            <select onClick={(e) => this.handelchange(e)}className="quantity" name="cars" id="cars">
             <option value="1">1</option>
                {style.map((element,index)=>
                <option key={index} value={element.quantity}>{element.quantity}</option>
                )}  
            </select>
            <input onClick={(e)=>this.addCart(e)} className="addtocart" type="submit" value="Add to cart    +" />
            <div className="favstar-position">
               <input className="star1" type="checkbox" title="bookmark page"/>
            </div>
        </div >
        
        )
    }
}

