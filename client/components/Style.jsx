import React, { Component } from 'react'
import axios from 'axios'
import swal from 'sweetalert';
import { map, reduce, somethingElse, _ } from 'underscore'

export default class Style extends Component {
    constructor() {
        super()
        this.state = {
            name: "White",
            size: 'S',
            number: null,
            range: [],
          
        }
        this.handelchange = this.handelchange.bind(this)
    }
   
    handleStyle(element) {
        this.props.styleimages(element.photos)
        this.setState({ name: element.name })
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
            size: e.target.value,
            number: this.props.data.info.filter(el => el.size == e.target.value)[0].quantity,
        })

    }
    myrange() {
        
        var array = []
        for (var i = 0; i < this.state.number; i++) {
            array.push(i + 1)

        }


        this.setState({ range: array })
    }
   
      
    
    render() {
        return (
            <div>
                < div className="styles" >
                    <strong>Styles > </strong> {this.state.name}
                </div>
                <div className="row">
                    {this.props.data.style.map((element, index) =>
                        <div key={index} id={element.style_id} style={{background:element.name}} className="circle" onClick={() => { this.handleStyle(element) }} >
                        </div>

                    )}
                </div >
                <div className="row ">
                <div className="col-6 col-sm-4">
                    <select onChange={(e) => this.handelchange(e)}    onClick={() => this.myrange()} className="selectsize" name="cars" id="cars">
                        <option value="Select size">Select size</option>
                        {this.props.data.info.map((element, index) =>
                            <option key={index}>{element.size}</option>
                        )}
                    </select>
                </div>
                <div className=" col-sm-4">
                    <select onChange={(e) => this.handelchange(e)} className="quantity" name="cars" id="cars">
                        <option value="1">1</option>
                        {this.state.range.map((element, index) => 
                            <option key={index}>{element}</option>

                        )}

                    </select>
       
                    <div className="w-100 d-none d-md-block"></div>
                </div >
                <div className="col-9">
                <input onClick={(e) => this.addCart(e)} className="addtocart" type="submit" value="Add to cart    +" />
                </div>
                <div className="col">
                <div className="favstar-position">
                    <input className="star1" type="checkbox" title="bookmark page" />
                </div>
                </div>
            </div >
</div>
        )
    }
}

