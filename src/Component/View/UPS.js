import React, { Component } from 'react';

class UPS extends Component {
    render() {
        return (
            // <!-- USP's -->
            <section className="usp mt100">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <h2 className="lined-heading"><span>USP section</span></h2>
                        </div>
                        <div className="col-sm-3 bounceIn appear" data-start="0">
                            <div className="box-icon">
                                <div className="circle"><i className="fa fa-glass fa-lg"></i></div>
                                <h3>Beverages included</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse interdum eleifend augue, quis rhoncus purus fermentum. </p>
                                <a href="#">Read more<i className="fa fa-angle-right"></i></a> </div>
                        </div>
                        <div className="col-sm-3 bounceIn appear" data-start="400">
                            <div className="box-icon">
                                <div className="circle"><i className="fa fa-credit-card fa-lg"></i></div>
                                <h3>Stay First, Pay After!</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse interdum eleifend augue, quis rhoncus purus fermentum. </p>
                                <a href="#">Read more<i className="fa fa-angle-right"></i></a> </div>
                        </div>
                        <div className="col-sm-3 bounceIn appear" data-start="800">
                            <div className="box-icon">
                                <div className="circle"><i className="fa fa-cutlery fa-lg"></i></div>
                                <h3>24 Hour Restaurant</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse interdum eleifend augue, quis rhoncus purus fermentum. </p>
                                <a href="#">Read more<i className="fa fa-angle-right"></i></a> </div>
                        </div>
                        <div className="col-sm-3 bounceIn appear" data-start="1200">
                            <div className="box-icon">
                                <div className="circle"><i className="fa fa-tint fa-lg"></i></div>
                                <h3>Spa Included!</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse interdum eleifend augue, quis rhoncus purus fermentum. </p>
                                <a href="#">Read more<i className="fa fa-angle-right"></i></a> </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default UPS;