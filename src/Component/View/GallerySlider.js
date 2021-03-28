import React, { Component } from 'react';

class GallerySlider extends Component {
    render() {
        return (
            <section className="gallery-slider mt100">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="lined-heading"><span>Gallery</span></h2>
                        </div>
                    </div>
                </div>
                <div id="owl-gallery" className="owl-carousel">
                    <div className="item">
                        <a href="images/gallery/1.jpg" data-rel="prettyPhoto[gallery1]">
                            <img src="images/gallery/1.jpg" alt="Image 1"/><i className="fa fa-search"></i>
                        </a>
                    </div>
                    <div className="item">
                        <a href="images/gallery/2.jpg" data-rel="prettyPhoto[gallery1]">
                            <img src="images/gallery/2.jpg" alt="Image 2"/><i className="fa fa-search"></i>
                        </a>
                    </div>
                    <div className="item">
                        <a href="images/gallery/3.jpg" data-rel="prettyPhoto[gallery1]">
                            <img src="images/gallery/3.jpg" alt="Image 3"/><i className="fa fa-search"></i>
                        </a>
                    </div>
                    <div className="item">
                        <a href="images/gallery/4.jpg" data-rel="prettyPhoto[gallery1]">
                            <img src="images/gallery/4.jpg" alt="Image 4"/><i className="fa fa-search"></i>
                        </a>
                        </div>
                    </div>
            </section>
        )
    }
}

export default GallerySlider;