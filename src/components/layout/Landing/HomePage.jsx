import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { FaArrowAltCircleRight, FaAward, FaFacebook, FaGlobe, FaLinkedin, FaLock, FaPhoneSquareAlt, FaRetweet, FaStar, FaTwitter, FaWhmcs } from 'react-icons/fa'
import FooterComponent from '../Landing/FooterComponent'
import LandingHeader from '../Landing/LandingHeader'

function HomePage(props) {
    const { setLoggedIn } = props;
    setLoggedIn(false);
    window.localStorage.clear();
    
    return (
        <div>
            <LandingHeader/> 
            <header class="masthead bg-primary text-white text-center">
                <div class="container d-flex align-items-center flex-column">
                    {/* <!-- Masthead Avatar Image--> */}
                    {/* <img class="masthead-avatar mb-5" src={"./logo.png"} alt="..." /> */}
                    {/* <!-- Masthead Heading--> */}
                    <h1 class="masthead-heading text-uppercase mb-0">College Management Tool</h1>
                    {/* <!-- Icon Divider--> */}
                    <div class="divider-custom divider-light">
                        <div class="divider-custom-line"></div>
                        <div class="divider-custom-icon"><FaStar /></div>
                        <div class="divider-custom-line"></div>
                    </div>
                    {/* <!-- Masthead Subheading--> */}
                    <p class="masthead-subheading font-weight-light mb-0">Achievements - Grievance - E-Resources</p>
                </div>
            </header>



            <section class="page-section" id="services">
                <div class="container">

                    <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Services</h2>
                    {/* <!-- Icon Divider--> */}
                    <div class="divider-custom">
                        <div class="divider-custom-line"></div>
                        <div class="divider-custom-icon"><FaWhmcs /></div>
                        <div class="divider-custom-line"></div>
                    </div>

                    <div class="row text-center">

                        <div class="col-md-4">
                            <div class="divider-custom">
                                <div class="divider-custom-icon">
                                    <FaAward />
                                </div>
                            </div>

                            <h4 class="my-3">Data Management</h4>
                            <p class="text-muted">Get prepared for accreditations from agencies like NBA/NAAC by managing institutional data,
                      maintaining necessary documents.</p>
                        </div>

                        <div class="col-md-4">
                            <div class="divider-custom">
                                <div class="divider-custom-icon">
                                    <FaRetweet />
                                </div>
                            </div>
                            <h4 class="my-3">Customization</h4>
                            <p class="text-muted">College automation software has many functions,
                            predetermined actions and tabs,
                      thus will reduce the administrative work of colleges.</p>
                        </div>
                        <div class="col-md-4">
                            <div class="divider-custom">
                                <div class="divider-custom-icon">
                                    <FaLock />
                                </div>
                            </div>
                            <h4 class="my-3">Data Security</h4>
                            <p class="text-muted">It makes sure that data and confidential information of the college stays secure,
                      under the vigilance of the admin and protected from external threats.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- About Section--> */}
            <section class="page-section bg-primary text-white mb-0" id="benfits">
                <div class="container">
                    {/* <!-- About Section Heading--> */}
                    <h2 class="page-section-heading text-center text-uppercase text-white">Benefits</h2>
                    {/* <!-- Icon Divider--> */}
                    <div class="divider-custom divider-light">
                        <div class="divider-custom-line"></div>
                        <div class="divider-custom-icon"><FaStar /></div>
                        <div class="divider-custom-line"></div>
                    </div>

                    <div class="row text-center">

                        <div class="col-md-4">
                            <p class="lead"><FaArrowAltCircleRight /> Improve Resource Management</p>
                        </div>

                        <div class="col-md-4">
                            <p class="lead"><FaArrowAltCircleRight /> Centralized Data Management</p>
                        </div>

                        <div class="col-md-4">
                            <p class="lead"><FaArrowAltCircleRight /> Cost Effective</p>
                        </div>

                        <div class="col-md-4">
                            <p class="lead"><FaArrowAltCircleRight /> Quicker Management Process</p>
                        </div>

                        <div class="col-md-4">
                            <p class="lead"><FaArrowAltCircleRight /> Accurate Data</p>
                        </div>

                        <div class="col-md-4">
                            <p class="lead"><FaArrowAltCircleRight /> Data Security</p>
                        </div>


                    </div>
                </div>
            </section>


            <section class="page-section" id="contact" >
                <div class="container">
                    {/* <!-- Contact Section Heading--> */}
                    <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Contact US</h2>
                    {/* <!-- Icon Divider--> */}
                    <div class="divider-custom ">
                        <div class="divider-custom-line "></div>
                        <div class="divider-custom-icon"><FaPhoneSquareAlt /></div>
                        <div class="divider-custom-line"></div>
                    </div>
                    {/* <!-- Contact Section Form--> */}
                    <div class="row justify-content-center">
                        <div class="col-lg-7 col-xl-6 card" style={{ padding: "15pt" }}>
                            <Form >
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="email" placeholder="Enter Name" />

                                <Form.Label>contact Number</Form.Label>
                                <Form.Control type="contactNumber" placeholder="Enter Number" />

                                <Form.Label>Address</Form.Label>
                                <Form.Control type="email" placeholder="Enter Address" />

                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea" rows={3} placeholder="Enter message" />
                                <br></br>
                                <Button variant="dark" size="sm" type="submit" >Submit</Button>

                            </Form>

                        </div>
                    </div>
                </div>
            </section>

            <section class="page-section text-center text-white" style={{ backgroundColor: "#2c3e50" }}>
                <div class="container">
                    <div class="row">
                        {/* <!-- Footer Location--> */}
                        <div class="col-lg-6 mb-lg-0">
                            <h4 class="text-uppercase mb-4">Location</h4>
                            <p class="lead mb-0">
                                <h5>H.K.E. Society's
                                S.L.N. College of Engineering,</h5>
                            Yeramarus Camp, Raichur - 584135. Karnataka.
                        </p>
                        </div>
                        {/* <!-- Footer Social Icons--> */}
                        <div class="col-lg-6  mb-lg-0">
                            <h4 class="text-uppercase mb-4">Around the Web</h4>
                            <a class="btn btn-outline-light btn-social mx-1" href="https://www.facebook.com/SLNcollegeofEngineering/" target="_blank"><FaFacebook /></a>
                            <a class="btn btn-outline-light btn-social mx-1" href="https://www.linkedin.com/school/s-l-n-college-of-engineering-raichur/?originalSubdomain=in" target="_blank"><FaLinkedin /></a>
                            <a class="btn btn-outline-light btn-social mx-1" href="http://slnceraichur.com/" target="_blank"><FaGlobe /></a>
                        </div>
                        {/* <div class="col-lg-4">
                            <h4 class="text-uppercase mb-4">About Freelancer</h4>
                            <p class="lead mb-0">
                                Freelance is a free to use, MIT licensed Bootstrap theme created by
                            <a href="http://startbootstrap.com">Start Bootstrap</a>
                            .
                        </p>
                        </div> */}
                    </div>
                </div>
            </section>
            <FooterComponent/>

        </div>
    )
}

export default HomePage
