import React, { Component } from 'react';

class Rooms extends Component {
    render() {
        return (
            // <!-- Rooms -->
            <section className="rooms mt50">
              <div className="container">
                <div className="row">
                  <div className="col-sm-12">
                    <h2 className="lined-heading"><span>Guests Favorite Rooms</span></h2>
                  </div>
                  {/* <!-- Room --> */}
                  <div className="col-sm-4">
                    <div className="room-thumb"> <img src="images/rooms/room-01.jpg" alt="room 1" className="img-responsive" />
                      <div className="mask">
                        <div className="main">
                          <h5>Double bedroom</h5>
                          <div className="price">&euro; 99<span>a night</span></div>
                        </div>
                        <div className="content">
                          <p><span>A modern hotel room in Star Hotel</span> Nunc tempor erat in magna pulvinar fermentum. Pellentesque scelerisque at leo nec vestibulum. 
                            malesuada metus.</p>
                          <div className="row">
                            <div className="col-xs-6">
                              <ul className="list-unstyled">
                                <li><i className="fa fa-check-circle"></i> Incl. breakfast</li>
                                <li><i className="fa fa-check-circle"></i> Private balcony</li>
                                <li><i className="fa fa-check-circle"></i> Sea view</li>
                              </ul>
                            </div>
                            <div className="col-xs-6">
                              <ul className="list-unstyled">
                                <li><i className="fa fa-check-circle"></i> Free Wi-Fi</li>
                                <li><i className="fa fa-check-circle"></i> Incl. breakfast</li>
                                <li><i className="fa fa-check-circle"></i> Bathroom</li>
                              </ul>
                            </div>
                          </div>
                          <a href="room-detail.html" className="btn btn-primary btn-block">Read More</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Room --> */}
                  <div className="col-sm-4">
                    <div className="room-thumb"> <img src="images/rooms/room-02.jpg" alt="room 2" className="img-responsive" />
                      <div className="mask">
                        <div className="main">
                          <h5>King Size Bedroom </h5>
                          <div className="price">&euro; 149<span>a night</span></div>
                        </div>
                        <div className="content">
                          <p><span>A modern hotel room in Star Hotel</span> Nunc tempor erat in magna pulvinar fermentum. Pellentesque scelerisque at leo nec vestibulum. 
                            malesuada metus.</p>
                          <div className="row">
                            <div className="col-xs-6">
                              <ul className="list-unstyled">
                                <li><i className="fa fa-check-circle"></i> Incl. breakfast</li>
                                <li><i className="fa fa-check-circle"></i> Private balcony</li>
                                <li><i className="fa fa-check-circle"></i> Sea view</li>
                              </ul>
                            </div>
                            <div className="col-xs-6">
                              <ul className="list-unstyled">
                                <li><i className="fa fa-check-circle"></i> Free Wi-Fi</li>
                                <li><i className="fa fa-check-circle"></i> Incl. breakfast</li>
                                <li><i className="fa fa-check-circle"></i> Bathroom</li>
                              </ul>
                            </div>
                          </div>
                          <a href="room-detail.html" className="btn btn-primary btn-block">Read More</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Room --> */}
                  <div className="col-sm-4">
                    <div className="room-thumb"> <img src="images/rooms/room-03.jpg" alt="room 3" className="img-responsive" />
                      <div className="mask">
                        <div className="main">
                          <h5>Single room</h5>
                          <div className="price">&euro; 120<span>a night</span></div>
                        </div>
                        <div className="content">
                          <p><span>A modern hotel room in Star Hotel</span> Nunc tempor erat in magna pulvinar fermentum. Pellentesque scelerisque at leo nec vestibulum. 
                            malesuada metus.</p>
                          <div className="row">
                            <div className="col-xs-6">
                              <ul className="list-unstyled">
                                <li><i className="fa fa-check-circle"></i> Incl. breakfast</li>
                                <li><i className="fa fa-check-circle"></i> Private balcony</li>
                                <li><i className="fa fa-check-circle"></i> Sea view</li>
                              </ul>
                            </div>
                            <div className="col-xs-6">
                              <ul className="list-unstyled">
                                <li><i className="fa fa-check-circle"></i> Free Wi-Fi</li>
                                <li><i className="fa fa-check-circle"></i> Incl. breakfast</li>
                                <li><i className="fa fa-check-circle"></i> Bathroom</li>
                              </ul>
                            </div>
                          </div>
                          <a href="room-detail.html" className="btn btn-primary btn-block">Read More</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
        )
    }
}
export default Rooms;