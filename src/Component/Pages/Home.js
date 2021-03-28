import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ResolutionSlider from '../View/ResolutionForm';
import ResolutionForm from '../View/ResolutionSlider';
import Rooms from '../View/Rooms';
import UPS from '../View/UPS';
import ParallaxEffect from '../View/ParallaxEffect';
import GallerySlider from '../View/GallerySlider';
import Container from '../View/Container';

class Home extends Component {
    render() {
        return (
            <React.Fragment>
                

                {/* <!-- Revolution Slider --> */}
                <ResolutionSlider />

                {/* <!-- Reservation form --> */}
                <ResolutionForm />

                {/* <!-- Rooms --> */}
                <Rooms />

                {/* <!-- USP's --> */}
                <UPS />

                {/* <!-- Parallax Effect --> */}
                {/* <script type="text/javascript">$(document).ready(function(){$('#parallax-image').parallax("50%", -0.35);});</script> */}

                <ParallaxEffect />

                {/* <!-- Gallery --> */}
                <GallerySlider />
                <Container />
            </React.Fragment>

        )
    }
}

export default Home;