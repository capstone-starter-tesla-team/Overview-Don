import React, { Component } from 'react'
import axios from 'axios'
import swal from 'sweetalert';
import { map, reduce, somethingElse, _ } from 'underscore'

export default class Style extends Component {
    constructor() {
        super()
        this.state = {
            style: [],
            name: "White",
            info: [],
            range: [],
            size: 'S',
            number: null
        }
        this.handelchange = this.handelchange.bind(this)
    }
    componentDidMount() {
        const token = "f7c4293210902d0d6b19e8a637d428c26496e090"
        axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/11003/styles`, {

            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-type": "Application/json",
                "Authorization": token
            }
        })
            .then((res) => {
                this.setState({ style: res.data.results })
            })
            .catch((err) => {
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
                res.data.results.map((elem) => {
                    var skus = Object.values(elem.skus)
                    this.setState({ info: skus })
                })
            })
            .catch((err) => {
                console.log(err)
            })
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
            number: this.state.info.filter(el => el.size == e.target.value)[0].quantity,
        })

    }
    myrange() {
        const { number } = this.state
        var array = []
        for (var i = 0; i < number; i++) {
            array.push(i + 1)

        }


        this.setState({ range: array })
    }
    render() {
        const { style, info, name, range, number } = this.state

        return (
            <div>
                < div className="styles" >
                    <strong>Styles > </strong> {name}
                </div>
                <div className="row">
                    {style.map((element, index) =>
                        <div key={index} id={element.style_id} style={{ background: element.name }} className="circle" onClick={() => { this.handleStyle(element) }} >
                        </div>

                    )}
                </div >
                <div className="row ">
                <div className="col-6 col-sm-4">
                    <select onChange={(e) => this.handelchange(e)}    onClick={() => this.myrange()} className="selectsize" name="cars" id="cars">
                        <option value="Select size">Select size</option>
                        {info.map((element, index) =>
                            <option key={index}>{element.size}</option>
                        )}
                    </select>
                </div>
                <div className=" col-sm-4">
                    <select onChange={(e) => this.handelchange(e)} className="quantity" name="cars" id="cars">
                        <option value="1">1</option>
                        {range.map((element, index) => 
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

