import React, { Component } from 'react';

class ParallaxEffect extends Component {
    render() {
        return (
            <section className="parallax-effect mt100">
                <div id="parallax-image" style={{backgroundImage: 'url(images/parallax/parallax-01.jpg)'}}>
                    <div className="color-overlay fadeIn appear" data-start="600">
                        <div className="container">
                            <div className="content">
                                <h3 className="text-center"><i className="fa fa fa-star-o"></i> STARHOTEL</h3>
                                <p className="text-center">An Exceptional Hotel Template!<br/>
                                    <a href="blog.html" className="btn btn-default btn-lg mt30">Checkout the blog</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default ParallaxEffect;