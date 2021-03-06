import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            // <!-- Footer -->
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-3">
                            <h4>About Starhotel</h4>
                            <p>Suspendisse sed sollicitudin nisl, at dignissim libero. Sed porta tincidunt ipsum, vel volutpat. <br/>
                                <br/>Nunc ut fringilla urna. Cras vel adipiscing ipsum. Integer dignissim nisl eu lacus interdum facilisis. Aliquam erat volutpat. Nulla semper vitae felis vitae dapibus. </p>
                        </div>
                        <div className="col-md-3 col-sm-3">
                            <h4>Recieve our newsletter</h4>
                            <p>Suspendisse sed sollicitudin nisl, at dignissim libero. Sed porta tincidunt ipsum, vel volutpa!</p>
                            <form>
                                <div className="form-group">
                                    <input name="newsletter" type="text" id="newsletter" value="" className="form-control" placeholder="Please enter your E-mailaddress"/>
                                </div>
                                <button type="submit" className="btn btn-lg btn-black btn-block">Submit</button>
                            </form>
                        </div>
                        <div className="col-md-3 col-sm-3">
                            <h4>From our blog</h4>
                            <ul>
                                <li>
                                    <article>
                                        <a href="blog-post.html">This is a video post<br/>April 15 2014</a>
                                    </article>
                                </li>
                                <li>
                                    <article>
                                        <a href="blog-post.html">An image post<br/>April 14 2014</a>
                                    </article>
                                </li>
                                <li>
                                    <article>
                                        <a href="blog-post.html">Audio included post<br/>April 12 2014</a>
                                    </article>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-sm-3">
                            <h4>Address</h4>
                            <address>
                                <strong>Starhotel</strong><br/>795 Las Palmas<br/>Spain, CA 94107<br/>
                                <abbr title="Phone">P:</abbr> <a href="#">(123) 456-7890</a><br/>
                                <abbr title="Email">E:</abbr> <a href="#">mail@example.com</a><br/>
                                <abbr title="Website">W:</abbr> <a href="#">www.slashdown.nl</a><br/>
                            </address>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-6"> &copy; 2021 Starhotel All Rights Reserved </div>
                            <div className="col-xs-6 text-right">
                                <ul>
                                    <li><a href="contact-01.html">Contact{" :- "} 8483094849</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="go-top"><i className="fa fa-angle-up fa-2x"></i></div>
            </footer>
        )
    }
}
export default Footer;