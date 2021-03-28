import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div>
                {/* <!-- Top header --> */}
                <div id="top-header">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-6">
                                <div className="th-text pull-left">
                                    <div className="th-item"> <a href="#"><i className="fa fa-phone"></i> +91-8483094849</a> </div>
                                    <div className="th-item"> <a href="#"><i className="fa fa-envelope"></i> info@roys.com </a></div>
                                </div>
                            </div>
                            <div className="col-xs-6">
                                <div className="th-text pull-right">
                                    <div className="th-item">
                                        <div className="btn-group">
                                            <button className="btn btn-default btn-xs js-activated" type="button"> English <span className="caret"></span> </button>
                                            {/* <ul className="dropdown-menu">
                                                <li> <a href="#">ENGLISH</a> </li>
                                                <li> <a href="#">FRANCE</a> </li>
                                                <li> <a href="#">GERMAN</a> </li>
                                                <li> <a href="#">SPANISH</a> </li>
                                            </ul> */}
                                        </div>
                                    </div>
                                    <div className="th-item">
                                        <div className="social-icons"> <a href="#"><i className="fa fa-facebook"></i></a> <a href="#"><i className="fa fa-twitter"></i></a> <a href="#"><i className="fa fa-youtube-play"></i></a> </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Header --> */}
                <header>
                    {/* <!-- Navigation --> */}
                    <div className="navbar yamm navbar-default" id="sticky">
                        <div className="container">
                            <div className="navbar-header">
                                <button type="button" data-toggle="collapse" data-target="#navbar-collapse-grid" className="navbar-toggle"> <span className="icon-bar"></span> <span className="icon-bar"></span> <span className="icon-bar"></span> </button>
                                <a href="/" className="navbar-brand">
                                    {/* <!-- Logo --> */}
                                    <div id="logo">
                                        <img id="default-logo" src="images/hotel latehar.jpg" alt="Starhotel" style={{ height: '44px' }} />
                                        <img id="retina-logo" src="images/logo-retina.png" alt="Starhotel" style={{ height: '44px' }} />
                                    </div>
                                </a>
                            </div>
                            <div id="navbar-collapse-grid" className="navbar-collapse collapse">
                                <ul className="nav navbar-nav">
                                    <li className="dropdown active"> <a href="/">Home</a></li>
                                    <li className="dropdown"> <a href="#" data-toggle="dropdown" className="dropdown-toggle js-activated">Rooms<b className="caret"></b></a>
                                        <ul className="dropdown-menu">
                                            <li><a href="/room">Room List View</a></li>
                                            <li><a href="/room-details">Room Detail</a></li>
                                        </ul>
                                    </li>
                                    {/* <li className="dropdown"> <a href="#" data-toggle="dropdown" className="dropdown-toggle js-activated">Features<b className="caret"></b></a>
                                        <div className="dropdown-menu">
                                            <div className="yamm-content">
                                                <div className="row">
                                                    <ul className="col-sm-3 list-unstyled mt20">
                                                        <li>
                                                            <p><strong>Elements</strong></p>
                                                        </li>
                                                        <li><a href="elements.html">Elements</a></li>
                                                        <li><a href="icons.html">Icons</a></li>
                                                        <li><a href="404.html">404 Page</a></li>
                                                    </ul>
                                                    <ul className="col-sm-3 list-unstyled mt20">
                                                        <li>
                                                            <p><strong>Layout</strong></p>
                                                        </li>
                                                        <li><a href="boxed-pattern.html"><i className="fa fa-square-o"></i> Boxed</a></li>
                                                        <li><a href="index.html"><i className="fa fa-arrows-h"></i> Wide</a></li>
                                                        <li><a href="boxed-background.html"><i className="fa fa-picture-o"></i> Image</a></li>
                                                    </ul>
                                                    <ul className="col-sm-6 list-unstyled mt20">
                                                        <li>
                                                            <p><strong>Colors</strong></p>
                                                            <ul className="list-unstyled">
                                                                <li className="row">
                                                                    <ul className="col-sm-6 list-unstyled">
                                                                        <li><a href="#" className="styleswitch" id="black"><i className="fa fa-circle" style={{ color: '#000' }}></i> Black</a></li>
                                                                        <li><a href="#" className="styleswitch" id="blue"><i className="fa fa-circle" style={{ color: '#057ad4' }}></i> Blue</a></li>
                                                                        <li><a href="#" className="styleswitch" id="brown"><i className="fa fa-circle" style={{ color: '#A76837' }}></i> Brown</a></li>
                                                                        <li><a href="#" className="styleswitch" id="green"><i className="fa fa-circle" style={{ color: '#7ec923' }}></i> Green</a></li>
                                                                    </ul>
                                                                    <ul className="col-sm-6 list-unstyled">
                                                                        <li><a href="#" className="styleswitch" id="orange"><i className="fa fa-circle" style={{ color: '#dc7b13' }}></i> Orange</a></li>
                                                                        <li><a href="#" className="styleswitch" id="purple"><i className="fa fa-circle" style={{ color: '#e331bf' }}></i> Purple</a></li>
                                                                        <li><a href="#" className="styleswitch" id="red"><i className="fa fa-circle" style={{ color: '#c20808' }}></i> Red</a></li>
                                                                        <li><a href="#" className="styleswitch" id="turquoise"><i className="fa fa-circle" style={{ color: '#75c5cf' }}></i> Turquoise</a></li>
                                                                    </ul>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </li> */}
                                    <li> <a href="/blog">Blog</a></li>
                                    {/* <li className="dropdown"> <a href="#" data-toggle="dropdown" className="dropdown-toggle js-activated">Blog<b className="caret"></b></a>
                                        <ul className="dropdown-menu">
                                            <li><a href="/blog">Blog</a></li>
                                            <li><a href="blog-details">Blog Details</a></li>
                                        </ul>
                                    </li> */}
                                    <li> <a href="/gallery">Gallery</a></li>
                                    <li> <a href="/contact">Contact </a></li>
                                    {/* <li className="dropdown"> <a href="#" data-toggle="dropdown" className="dropdown-toggle js-activated">Contact<b className="caret"></b></a>
                                        <ul className="dropdown-menu">
                                            <li><a href="/contact">Contact 1</a></li>
                                            <li><a href="contact-02.html">Contact 2</a></li>
                                        </ul>
                                    </li> */}
                                </ul>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        )
    }
}
export default Header;