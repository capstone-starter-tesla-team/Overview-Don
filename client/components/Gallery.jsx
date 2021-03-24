import React, { Component } from 'react'
import Information from './Information.jsx'

export default class Gallery extends Component {
    
    render() {
        jQuery(document).ready(function ($) {
            $("#myCarousel").carousel({
              interval: 50000,
            });
        })
        return (
            <div id="carouselExampleFade" className="inline1" data-ride="carousel">
                <div className="container">
                    <div className="carousel-item active">
                        <img src="https://d1fmx1rbmqrxrr.cloudfront.net/cnet/optim/i/edit/2019/04/eso1644bsmall__w770.jpg" className="d-block w-100" alt="..." />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
                <div className="inline2">
                    <Information />
                    </div>
                
            </div>

        )
    }
}
