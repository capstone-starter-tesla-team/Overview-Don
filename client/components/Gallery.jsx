import React, { Component } from 'react'
import Information from './Information.jsx'
import axios from 'axios'
import Style from './Style.jsx'

export default class Gallery extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            images: [],
            image:[]

        }
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
                res.data.results.map((elem) => {
                    var styles = Object.values(elem.photos);
                    var array = []
                    styles.map((element) => {
                        array.push(element.thumbnail_url)
                        this.setState({ data: array ,images:styles})

                    })
                })
            })
            .catch((err) => {
                console.log(err)
            })
    }
    changestyle(newphotos) {
        this.setState({
            images: newphotos,
        });
  
       
    }

    render() {
        
        const {images,data } = this.state
    
        var array=[]
        for(var i=0;i<images.length;i++) array.push(images[i].url)
 
        return (
            
         
           <div className="container">
               {console.log(this.state)}
            <div className="row">
            <div className="col col-lg-2" id="slider-thumbs">
                    <ul className="hide-bullets">
                      {images.map((imge, index) => (
                        <li key={index} className="col-sm-12">
                          <a
                            className="thumbnail"
                            id={`carousel-selector-${index + 1}`}
                          >
                              
                            <img src={imge.thumbnail_url}  className="myimg" />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                <div className="col-7">                
                    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel" data-interval="false">
                        <div className="carousel-inner">
                        
                            <div className="carousel-item active">
                            <img className="block" src={array[0]} alt="First slide" />
                            </div>
                           
                             <div className="carousel-item">
                                <img className="block" src={array[1]} alt="Second slide" />
                            </div>
                           <div className="carousel-item">
                                <img className="block" src={array[2]} alt="Second slide" />
                            </div>
                            <div className="carousel-item">
                                <img className="block" src={array[3]} alt="Second slide" />
                            </div>
                            <div className="carousel-item">
                                <img className="block" src={array[4]} alt="Second slide" />
                            </div>
                            <div className="carousel-item">
                                <img className="block" src={array[5]} alt="Second slide" />
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
                    <Information />
                    </div>
         <Style styleimages={(newphotos) => this.changestyle(newphotos)} />
        
                    </div>
                    </div>
            </div>
              


        )
    }
}
