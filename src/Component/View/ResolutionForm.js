import React, { Component } from 'react';

class ResolutionSlider extends Component {
    render() {
        return (
            // <!-- Revolution Slider -->
            <section className="revolution-slider">
                <div className="bannercontainer">
                    <div className="banner">
                        <ul>
                            {/* <!-- Slide 1 --> */}
                            <li data-transition="fade" data-slotamount="7" data-masterspeed="1500" >
                                {/* <!-- Main Image -->  */}
                                <img src="images/slides/slide-bg.jpg" style={{opacity:0}} alt="slidebg1" data-bgfit="cover" data-bgposition="left bottom" data-bgrepeat="no-repeat"/>
                                    {/* <!-- Layers -->            */}
                                    {/* <!-- Layer 1 --> */}
                                    <div className="caption sft revolution-starhotel bigtext"
                                        data-x="505"
                                        data-y="30"
                                        data-speed="700"
                                        data-start="1700"
                                        data-easing="easeOutBack">
                                        <span>
                                            <i className="fa fa-star-o"></i> 
                                            <i className="fa fa-star-o"></i> 
                                            <i className="fa fa-star-o"></i> 
                                            <i className="fa fa-star-o"></i> 
                                            <i className="fa fa-star-o"></i>
                                        </span> A Five Star Hotel 
                                        <span><i className="fa fa-star-o">
                                            </i> <i className="fa fa-star-o"></i> 
                                            <i className="fa fa-star-o"></i> 
                                            <i className="fa fa-star-o"></i> 
                                            <i className="fa fa-star-o"></i>
                                        </span>
                                    </div>
                                    {/* <!-- Layer 2 --> */}
                                    <div className="caption sft revolution-starhotel smalltext"
                                        data-x="605"
                                        data-y="105"
                                        data-speed="800"
                                        data-start="1700"
                                        data-easing="easeOutBack">
                                        <span>And we like to keep it that way!</span></div>
                                    {/* <!-- Layer 3 --> */}
                                    <div className="caption sft"
                                        data-x="775"
                                        data-y="175"
                                        data-speed="1000"
                                        data-start="1900"
                                        data-easing="easeOutBack">
                                        <a href="room-list.html" className="button btn btn-purple btn-lg">See rooms</a>
                                    </div>
                            </li>
                                {/* <!-- Slide 2 --> */}
                            <li data-transition="boxfade" data-slotamount="7" data-masterspeed="1000" >
                                {/* <!-- Main Image -->  */}
                                <img src="images/slides/slide-bg-02.jpg" alt="darkblurbg" data-bgfit="cover" data-bgposition="left top" data-bgrepeat="no-repeat"/>
                                    {/* <!-- Layers -->            */}
                                    {/* <!-- Layer 1 --> */}
                                    <div className="caption sft revolution-starhotel bigtext"
                                        data-x="585"
                                        data-y="30"
                                        data-speed="700"
                                        data-start="1700"
                                        data-easing="easeOutBack">
                                        <span>
                                            <i className="fa fa-star-o"></i> 
                                            <i className="fa fa-star-o"></i> 
                                            <i className="fa fa-star-o"></i> 
                                            <i className="fa fa-star-o"></i> 
                                            <i className="fa fa-star-o"></i>
                                        </span> Double room 
                                        <span>
                                            <i className="fa fa-star-o"></i> 
                                            <i className="fa fa-star-o"></i> 
                                            <i className="fa fa-star-o"></i> 
                                            <i className="fa fa-star-o"></i> 
                                            <i className="fa fa-star-o"></i>
                                        </span>
                                    </div>
                                    {/* <!-- Layer 2 --> */}
                                    <div className="caption sft revolution-starhotel smalltext"
                                        data-x="682"
                                        data-y="105"
                                        data-speed="800"
                                        data-start="1700"
                                        data-easing="easeOutBack">
                                        <span>??? 99,- a night this summer</span>
                                    </div>
                                    {/* <!-- Layer 3 --> */}
                                    <div className="caption sft"
                                        data-x="785"
                                        data-y="175"
                                        data-speed="1000"
                                        data-start="1900"
                                        data-easing="easeOutBack">
                                        <a href="room-detail.html" className="button btn btn-purple btn-lg">Book this room</a>
                                    </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        )
    }
}
export default ResolutionSlider;