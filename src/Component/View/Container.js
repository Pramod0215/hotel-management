import React, { Component } from 'react';

class Container extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    {/* <!-- Testimonials --> */}
                    <section className="testimonials mt100">
                        <div className="col-md-6">
                            <h2 className="lined-heading bounceInLeft appear" data-start="0"><span>What Other Visitors Experienced</span></h2>
                            <div id="owl-reviews" className="owl-carousel">
                                <div className="item">
                                    <div className="row">
                                        <div className="col-lg-3 col-md-4 col-sm-2 col-xs-12"> <img src="images/reviews/review-01.jpg" alt="Review 1" className="img-circle" /></div>
                                        <div className="col-lg-9 col-md-8 col-sm-10 col-xs-12">
                                            <div className="text-balloon">Searched the internet and i found, booked and visited this hotel that i like to call utopia... <span>Kim Jones, Single Room</span> </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-3 col-md-4 col-sm-2 col-xs-12"> <img src="images/reviews/review-02.jpg" alt="Review 2" className="img-circle" /></div>
                                        <div className="col-lg-9 col-md-8 col-sm-10 col-xs-12">
                                            <div className="text-balloon">I give it a 5 out of 5! Great hotel, friendly staff, clean, relaxing... Yep i'm coming back! ;-) <span>Sandra Donnathan, Double Room</span> </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="row">
                                        <div className="col-lg-3 col-md-4 col-sm-2 col-xs-12"> <img src="images/reviews/review-03.jpg" alt="Review 3" className="img-circle" /></div>
                                        <div className="col-lg-9 col-md-8 col-sm-10 col-xs-12">
                                            <div className="text-balloon">Such a nice place... Next time i will book a 3 weeks stay at this place. <span>Rosanne O'Donald, Single Room</span> </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-3 col-md-4 col-sm-2 col-xs-12"> <img src="images/reviews/review-04.jpg" alt="Review 4" className="img-circle" /></div>
                                        <div className="col-lg-9 col-md-8 col-sm-10 col-xs-12">
                                            <div className="text-balloon">By far the best hotel in the city! Location is nice and the service is great! <span>Carl Adams, Single Room</span> </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* <!-- About --> */}
                    <section className="about mt100">
                        <div className="col-md-6">
                            <h2 className="lined-heading bounceInRight appear" data-start="800"><span>Hotel Tabs</span></h2>
                            {/* <!-- Nav tabs --> */}
                            <ul className="nav nav-tabs">
                                <li className="active"><a href="#hotel" data-toggle="tab">Our hotels</a></li>
                                <li><a href="#events" data-toggle="tab">Events</a></li>
                                <li><a href="#kids" data-toggle="tab">Kids</a></li>
                            </ul>
                            {/* <!-- Tab panes --> */}
                            <div className="tab-content">
                                <div className="tab-pane fade in active" id="hotel">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse interdum eleifend augue, quis rhoncus purus fermentum. In hendrerit risus arcu, in eleifend metus dapibus varius. Nulla dolor sapien, laoreet vel tincidunt non, egestas non justo. Phasellus et mattis lectus, et gravida urna.</p>
                                    <p><img src="images/tab/restaurant-01.jpg" alt="food" className="pull-right" /> Donec pretium sem non tincidunt iaculis. Nunc at pharetra eros, a varius leo. Mauris id hendrerit justo. Mauris egestas magna vitae nisi ultricies semper. Nam vitae suscipit magna. Nam et felis nulla. Ut nec magna tortor. Nulla dolor sapien, laoreet vel tincidunt non, egestas non justo. </p>
                                </div>
                                <div className="tab-pane fade" id="events">Phasellus sodales justo felis, a vestibulum risus mattis vitae. Aliquam vitae varius elit, non facilisis massa. Vestibulum luctus diam mollis gravida bibendum. Aliquam mattis velit dolor, sit amet semper erat auctor vel. Integer auctor in dui ac vehicula. Integer fermentum nunc ut arcu feugiat, nec placerat nunc tincidunt. Pellentesque in massa eu augue placerat cursus sed quis magna.</div>
                                <div className="tab-pane fade" id="kids">Aa vestibulum risus mattis vitae. Aliquam vitae varius elit, non facilisis massa. Vestibulum luctus diam mollis gravida bibendum. Aliquam mattis velit dolor, sit amet semper erat auctor vel. Integer auctor in dui ac vehicula. Integer fermentum nunc ut arcu feugiat, nec placerat nunc tincidunt. Pellentesque in massa eu augue placerat cursus sed quis magna.</div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}

export default Container;