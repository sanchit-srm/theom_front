import React, { Component } from 'react';
import {Helmet} from 'react-helmet'
import '../../common/index.scss';
import Slider from 'react-slick';
import {Link} from 'react-router-dom';
import Modal from 'react-responsive-modal';
import ThemeSettings from "../../common/theme-settings"
import {Slider4} from '../../../services/script'

// Import custom components
import {
    svgFreeShipping,
    svgservice,
    svgoffer,
    svgpayment
} from "../../../services/script"
import TopCollection from "../common/collection"
import NewProduct from "../../common/new-product"
import Instagram from "../common/instagram"
import HeaderOne from "../../common/headers/header-one"
import FooterOne from "../../common/footers/footer-one"
import BlogSection from "../common/blogsection";

class Beauty extends Component {
    constructor(props){
        super(props)

        this.state = {
            open: false
        }
    }
    onOpenModal = () => {
        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };

    componentDidMount() {
        document.getElementById("color").setAttribute("href", `${process.env.PUBLIC_URL}/assets/css/color7.css` );
    }

    render(){

        var settings = {
            infinite: true,
            slidesToShow: 4,
          };

        return (
            <div>
                <Helmet>
                    <title>Homepage</title>
                </Helmet>
                <HeaderOne logoName={'layout3/logo.png'}/>
                <section className="p-0">
                    <Slider className="slide-1 home-slider">
                        <div>
                            <div className="home home34">
                                <div className="container">
                                    <div className="row">
                                        <div className="col">
                                            <div className="slider-contain">
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </section>


                {/*About Section*/}
                <section className="beauty-about">
                    <div className="container">
                        <div className="row">
                        <Slider {...Slider4} className="slide-4 category-m no-arrow">
                            <div>
                                <div className="category-wrapper">
                                        <div>
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/home-banner/home-&-garden.png`}
                                                    className="img-fluid blur-up lazyload bg-img" alt="" />
                                        </div>
                                        <h4>Home & Garden</h4>
                                </div>
                            </div>
                            <div>
                                <div className="category-wrapper">
                                        <div>
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/home-banner/Helth-&-wellbeing.png`}
                                                    className="img-fluid blur-up lazyload bg-img" alt="" />
                                        </div>
                                        <h4>Health & Wellbeing</h4>
                                </div>
                            </div>
                            <div>
                                <div className="category-wrapper">
                                        <div>
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/home-banner/wedding-&-events.png`}
                                                    className="img-fluid blur-up lazyload bg-img" alt="" />
                                        </div>
                                        <h4>Wedding & Events</h4>
                                </div>
                            </div>
                            <div>
                                <div className="category-wrapper">
                                        <div>
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/home-banner/Business-services.png`}
                                                    className="img-fluid blur-up lazyload bg-img" alt="" />
                                        </div>
                                        <h4>Business Services</h4>
                                </div>
                            </div>
                            <div>
                                <div className="category-wrapper">
                                        <div>
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/home-banner/Lessons-&-training.png`}
                                                    className="img-fluid blur-up lazyload bg-img" alt="" />
                                        </div>
                                        <h4>Lession & Training</h4>
                                </div>
                            </div>
                        </Slider>
                        </div>
                    </div>
                </section>

                <section className="beauty-about">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-5 col-lg-6 col-md-12 offset-xl-1 text-center">
                                <img src={`${process.env.PUBLIC_URL}/assets/images/beauty/about-us.jpg`} alt="" className="img-fluid blur-up lazyload" />
                            </div>
                            <div className="col-xl-5 col-lg-6 col-md-12">
                                <div className="about-section">
                                    <div>
                                        <h2>about theom</h2>
                                        <div className="about-text">
                                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                                accusantium doloremque laudantium, totam rem aperiam.sit voluptatem
                                                accusantium doloremque laudantium,totam rem aperiam.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*About Section End*/}


                <section className="section-b-space ratio_portrait">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <Slider {...Slider4} className="slide-4 category-m no-arrow">
                                    <div>
                                        <div className="category-wrapper">
                                            <div>
                                                <div>
                                                    <img src={`${process.env.PUBLIC_URL}/assets/images/home-banner/service1.png`}
                                                         className="img-fluid blur-up lazyload bg-img" alt="" />
                                                </div>
                                                <h4>House Cleaning</h4>
                                                <ul className="category-link">
                                                    <li><a href="#">d1 milano</a></li>
                                                    <li><a href="#">damaskeening</a></li>
                                                    <li><a href="#">diving watch</a></li>
                                                    <li><a href="#">dollar watch</a></li>
                                                </ul>
                                                <a href="#" className="btn btn-outline">Read More</a></div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="category-wrapper">
                                            <div>
                                                <div>
                                                    <img src={`${process.env.PUBLIC_URL}/assets/images/home-banner/service2.png`}
                                                         className="img-fluid blur-up lazyload bg-img" alt="" />
                                                </div>
                                                <h4>Personal Training</h4>
                                                <ul className="category-link">
                                                    <li><a href="#">Shock-resistant watch</a></li>
                                                    <li><a href="#">Skeleton watch</a></li>
                                                    <li><a href="#">Slow watch</a></li>
                                                    <li><a href="#">Solar-powered watch</a></li>
                                                </ul>
                                                <a href="#" className="btn btn-outline">Read More</a></div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="category-wrapper">
                                            <div>
                                                <div>
                                                    <img src={`${process.env.PUBLIC_URL}/assets/images/home-banner/service3.png`}
                                                         className="img-fluid blur-up lazyload bg-img" alt="" />
                                                </div>
                                                <h4>Wedding Photography</h4>
                                                <ul className="category-link">
                                                    <li><a href="#">Watchmaking conglomerates</a></li>
                                                    <li><a href="#">Breitling SA</a></li>
                                                    <li><a href="#">Casio watches</a></li>
                                                    <li><a href="#">Citizen Watch</a></li>
                                                </ul>
                                                <a href="#" className="btn btn-outline">Read More</a></div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="category-wrapper">
                                            <div>
                                                <div>
                                                    <img src={`${process.env.PUBLIC_URL}/assets/images/home-banner/service4.png`}
                                                         className="img-fluid blur-up lazyload bg-img" alt="" />
                                                </div>
                                                <h4>Web Design</h4>
                                                <ul className="category-link">
                                                    <li><a href="#">Manufacture d'horlogerie</a></li>
                                                    <li><a href="#">Mechanical watch</a></li>
                                                    <li><a href="#">Microbrand watches</a></li>
                                                    <li><a href="#">MIL-W-46374</a></li>
                                                </ul>
                                                <a href="#" className="btn btn-outline">Read More</a></div>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </section>


                {/*Product slider*/}
                {/* <TopCollection type={'beauty'} /> */}
                {/*Product slider End*/}

                {/*Video Section*/}
                {/* <section className="video-section pt-0">
                    <div className="title1">
                        <h4>special offer</h4>
                        <h2 className="title-inner1">product tutorial</h2>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 offset-md-2">
                                <a href="javascript:void(0)" onClick={this.onOpenModal}>
                                    <div className="video-img">
                                        <img src={`${process.env.PUBLIC_URL}/assets/images/beauty/video_1.jpg`} alt="" className="img-fluid blur-up lazyload" />
                                        <div className="play-btn">
                                            <span><i className="fa fa-play" aria-hidden="true"></i></span>
                                        </div>
                                    </div>
                                </a>
                                <Modal
                                    open={this.state.open}
                                    onClose={this.onCloseModal}
                                    id="video"
                                    className="modal fade video-modal" center>
                                    <iframe src="https://www.youtube.com/embed/FRIDLxM8Roc"
                                            allowFullScreen></iframe>
                                </Modal>
                            </div>
                        </div>
                    </div>
                </section> */}
                {/*Video Section End*/}

                {/*Product slider*/}
                {/* <TopCollection type={'beauty'} /> */}
                {/*Product slider End*/}

                {/*Blog Section*/}
                {/* <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="title1">
                                <h4>Recent Story</h4>
                                <h2 className="title-inner1">from the blog</h2>
                            </div>
                        </div>
                    </div>
                </div> */}
                {/*Blog Section end*/}


                {/*Instagram Section*/}
                {/* <div className="section-b-space">
                    <Instagram type="watch" />
                </div> */}
                {/*Instagram Section End*/}

                <FooterOne logoName={'layout3/logo.png'}/>

                <ThemeSettings />
            </div>
        )
    }
}


export default Beauty;