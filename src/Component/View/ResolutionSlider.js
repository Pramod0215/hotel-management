import React, { Component } from 'react';

class ResolutionForm extends Component {
    render() {
        return (
            // <!-- Reservation form -->
            <section id="reservation-form">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <form className="form-inline reservation-horizontal clearfix" role="form" method="post" action="https://www.slashdown.net/starhotel-html/php/reservation.php" name="reservationform" id="reservationform">
                                {/* <!-- Error message --> */}
                                <div id="message"></div>
                                <div className="row">
                                    <div className="col-sm-3">
                                        <div className="form-group">
                                            <label htmlFor="email" accesskey="E">E-mail</label>
                                            <input name="email" type="text" id="email" value="" className="form-control" placeholder="Please enter your E-mail" />
                                        </div>
                                    </div>
                                    <div className="col-sm-2">
                                        <div className="form-group">
                                            <label htmlFor="room">Room Type</label>
                                            <div className="popover-icon" data-container="body" data-toggle="popover" data-trigger="hover" data-placement="right" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."> <i className="fa fa-info-circle fa-lg"> </i> </div>
                                            <select className="form-control" name="room" id="room">
                                                <option selected="selected" disabled="disabled">Select a room</option>
                                                <option value="Single">Single room</option>
                                                <option value="Double">Double Room</option>
                                                <option value="Deluxe">Deluxe room</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-sm-2">
                                        <div className="form-group">
                                            <label htmlFor="checkin">Check-in</label>
                                            <div className="popover-icon" data-container="body" data-toggle="popover" data-trigger="hover" data-placement="right" data-content="Check-In is from 11:00"> <i className="fa fa-info-circle fa-lg"> </i> </div>
                                            <i className="fa fa-calendar infield"></i>
                                            <input name="checkin" type="text" id="checkin" value="" className="form-control" placeholder="Check-in" />
                                        </div>
                                    </div>
                                    <div className="col-sm-2">
                                        <div className="form-group">
                                            <label htmlFor="checkout">Check-out</label>
                                            <div className="popover-icon" data-container="body" data-toggle="popover" data-trigger="hover" data-placement="right" data-content="Check-out is from 12:00"> <i className="fa fa-info-circle fa-lg"> </i> </div>
                                            <i className="fa fa-calendar infield"></i>
                                            <input name="checkout" type="text" id="checkout" value="" className="form-control" placeholder="Check-out" />
                                        </div>
                                    </div>
                                    <div className="col-sm-1">
                                        <div className="form-group">
                                            <div className="guests-select">
                                                <label>Guests</label>
                                                <i className="fa fa-user infield"></i>
                                                <div className="total form-control" id="test">1</div>
                                                <div className="guests">
                                                    <div className="form-group adults">
                                                        <label htmlFor="adults">Adults</label>
                                                        <div className="popover-icon" data-container="body" data-toggle="popover" data-trigger="hover" data-placement="right" data-content="+18 years"> <i className="fa fa-info-circle fa-lg"> </i> </div>
                                                        <select name="adults" id="adults" className="form-control">
                                                            <option value="1">1 adult</option>
                                                            <option value="2">2 adults</option>
                                                            <option value="3">3 adults</option>
                                                        </select>
                                                    </div>
                                                    <div className="form-group children">
                                                        <label htmlFor="children">Children</label>
                                                        <div className="popover-icon" data-container="body" data-toggle="popover" data-trigger="hover" data-placement="right" data-content="0 till 18 years"> <i className="fa fa-info-circle fa-lg"> </i> </div>
                                                        <select name="children" id="children" className="form-control">
                                                            <option value="0">0 children</option>
                                                            <option value="1">1 child</option>
                                                            <option value="2">2 children</option>
                                                            <option value="3">3 children</option>
                                                        </select>
                                                    </div>
                                                    <button type="button" className="btn btn-default button-save btn-block">Save</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-2">
                                        <button type="submit" className="btn btn-primary btn-block">Book Now</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default ResolutionForm;