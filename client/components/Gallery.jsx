import React, { Component } from 'react'
import Information from './Information.jsx'
import axios from 'axios'
import Style from './Style.jsx'
import Navbar from './Navbar.jsx'
export default class Gallery extends Component {
    constructor(props) {
        super(props)
        this.state = {
            style: [],          
            info: [],          
            rating:0,
            name:"",
            category:"",
            price:"",
            value: 0,
            images: [],
            image:[],
            data_Id:"11003",
            color:[],
            img: []
        }
        this.getdata=this.getdata.bind(this)
        this.change_Id=this.change_Id.bind(this)
    }
    changestyle(newphotos) {
        this.setState({
            images:newphotos,
            img: newphotos.map(e=>e.url)
        });
    }
    componentDidMount() {
        this.getdata()
    }
change_Id(id){
    this.setState({data_Id:id})
    this.getdata()
}
        getdata(){
        const token = "058a6a70fbe5ad44b3190e84600dfada5e4022b7"
        axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/${this.state.data_Id}/styles`, {

            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-type": "Application/json",
                "Authorization": token
            }
        })
            .then((res) => {
                res.data.results.map((elem) => {
                    var styles = Object.values(elem.photos)   
                             
                          this.setState({ data:styles,images:styles, img : styles.map(e=>e.url)})          
                        })       
                })
            .catch((err) => {
                console.log(err)
            })
            axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/${this.state.data_Id}`, {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Content-type": "Application/json",
                    "Authorization": token
                }
            })
                .then((res) => {
                    console.log(res.data)
                    this.setState({ 
                        category:res.data.category,
                        name:res.data.name    
                    })
                }).catch((err) => {
                    console.log(err)
                })
                axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/reviews?product_id=${this.state.data_Id}`, {
    
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
                    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/${this.state.data_Id}/styles`, {
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
                        axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/${this.state.data_Id}/styles`, {

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
                        axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/${this.state.data_Id}/styles`, {
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
  
  
    handelchange(e) {
        this.setState({
            size: e.target.value,
            number: this.state.info.filter(el => el.size == e.target.value)[0].quantity,
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
        const {images , img}=this.state
        var array=[]
        for(var i=0;i<images.length;i++) array.push(images[i].url)
        return (
            <div>
            <Navbar changeId={this.change_Id}/>
         
           <div className="container">
            <div className="row">
            <div className="col col-lg-2" id="slider-thumbs">
                    <div className="hide-bullets">
                      {images.map((imge, index) => (
                        <div key={index} className="col-sm-12"> 
                          <a
                            className="thumbnail"
                            id={images[index+ 1]}
                          >
                            <img src={imge.thumbnail_url} className="myimg" />
                          </a>
                        </div>
                      ))}
                    </div>
                
                  </div>
                
                <div className="col-7">     
                        
                    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel" data-interval="false">
                        <div className="carousel-inner">
                    
                            <div className="carousel-item active">
                            <img className="block" src={img[0]} alt="First slide" />
                            </div>        
                             <div className="carousel-item">
                                <img className="block" src={img[1]} alt="Second slide" />
                            </div>
                           <div className="carousel-item">
                                <img className="block" src={img[2]} alt="Second slide" />
                            </div>
                            <div className="carousel-item">
                                <img className="block" src={img[3]} alt="Second slide" />
                            </div>
                            <div className="carousel-item">
                                <img className="block" src={img[4]} alt="Second slide" />
                            </div>
                            <div className="carousel-item">
                                <img className="block" src={img[5]} alt="Second slide" />
                            </div> 
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                   </div>
                   
            <div className="col-2">
            <div className="col-md-auto">
                    <Information data={this.state} />
                    </div>
                     <Style data={this.state} styleimages={(newphotos) => this.changestyle(newphotos)} id={this.state.data_Id} />
        
                    </div>
                    </div>
            </div>
            </div>


        )
    }
}
