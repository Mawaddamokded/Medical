import { Container, Row, Col } from 'reactstrap';

// Import Assets
import servicesImage1 from '../../assets/images/services/1.jpg';
import servicesImage2 from '../../assets/images/services/2.jpg';
import servicesImage3 from '../../assets/images/services/3.jpg';
import servicesImage4 from '../../assets/images/services/4.jpg';

function ServiceTab() {
	return(
        <div id="tcd-services" className="tcd-services-tab pt-110 md-pt-70">
            <Container>
                <div className="tcd-nav-part gray-bg">
                    <ul className="nav nav-tabs tcd-nav-tabs">
                        <li><a className="active show" data-toggle="tab" href="#one">Orthopaedics</a></li>
                        <li><a data-toggle="tab" href="#two">Cardiology</a></li>
                        <li><a data-toggle="tab" href="#three">Neurology</a></li>
                        <li><a data-toggle="tab" href="#four">Haematology</a></li>
                    </ul>
                </div>
                <div className="tab-content tcd-tab-content">
                    <div id="one" className="single-tab-part tab-pane fade active show">
                        <Row className="align-items-center">
                            <Col>
                                <div className="single-tab">                                    
                                    <div className="img-part">
                                        <img 
                                            src={servicesImage1}
                                            alt="Services Image"
                                        />
                                    </div>
                                </div>
                            </Col>
                            <Col>
                                <div className="service-content">
                                    <div className="service-categories">
                                        <span className="subtitle">Services</span>
                                        <span className="title">Orthopaedics</span>
                                    </div>
                                    <p>One Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, iste, architecto ullam tenetur quia nemo ratione tempora consectetur quos minus ut quo nulla ipsa aliquid neque molestias et qui sunt. Odit, molestiae.</p>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <ul className="listing mt-10">
                                                <li>Qualified Doctors</li>
                                                <li>24×7 Emergency Services</li>
                                                <li>General Medical</li>
                                            </ul>
                                        </div>
                                        <div className="col-sm-6">
                                            <ul className="listing mt-10 xs-mt-0">
                                                <li>Feel like Home Services</li>
                                                <li>Outdoor Checkup</li>
                                                <li>Easy and Affordable Billing</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <a className="primary-btn mt-30" href="#">View Details</a>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div id="two" className="single-tab-part tab-pane fade">
                        <Row className="align-items-center">
                            <Col>
                                <div className="single-tab">
                                    <div className="img-part">
                                        <img 
                                            src={servicesImage2}
                                            alt="Services Image"
                                        />
                                    </div>
                                </div>
                            </Col>
                            <Col>
                                <div className="service-content">
                                    <div className="service-categories">
                                        <span className="subtitle">Services</span>
                                        <span className="title">Cardiology</span>
                                    </div>
                                    <p>One Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, iste, architecto ullam tenetur quia nemo ratione tempora consectetur quos minus ut quo nulla ipsa aliquid neque molestias et qui sunt. Odit, molestiae.</p>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <ul className="listing mt-10">
                                                <li>Qualified Doctors</li>
                                                <li>24×7 Emergency Services</li>
                                                <li>General Medical</li>
                                            </ul>
                                        </div>
                                        <div className="col-sm-6">
                                            <ul className="listing mt-10 xs-mt-0">
                                                <li>Feel like Home Services</li>
                                                <li>Outdoor Checkup</li>
                                                <li>Easy and Affordable Billing</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <a className="primary-btn mt-30" href="#">View Details</a>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div id="three" className="single-tab-part tab-pane fade">
                        <Row className="align-items-center">
                            <Col>
                                <div className="single-tab">
                                    <div className="img-part">
                                        <img 
                                            src={servicesImage3}
                                            alt="Services Image"
                                        />
                                    </div>
                                </div>
                            </Col>
                            <Col>
                                <div className="service-content">
                                    <div className="service-categories">
                                        <span className="subtitle">Services</span>
                                        <span className="title">Neurology</span>
                                    </div>
                                    <p>One Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, iste, architecto ullam tenetur quia nemo ratione tempora consectetur quos minus ut quo nulla ipsa aliquid neque molestias et qui sunt. Odit, molestiae.</p>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <ul className="listing mt-10">
                                                <li>Qualified Doctors</li>
                                                <li>24×7 Emergency Services</li>
                                                <li>General Medical</li>
                                            </ul>
                                        </div>
                                        <div className="col-sm-6">
                                            <ul className="listing mt-10 xs-mt-0">
                                                <li>Feel like Home Services</li>
                                                <li>Outdoor Checkup</li>
                                                <li>Easy and Affordable Billing</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <a className="primary-btn mt-30" href="#">View Details</a>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div id="four" className="single-tab-part tab-pane fade">
                        <Row className="align-items-center">
                            <Col>
                                <div className="single-tab">
                                    <div className="img-part">
                                        <img 
                                            src={servicesImage4}
                                            alt="Services Image"
                                        />
                                    </div>
                                </div>
                            </Col>
                            <Col>
                                <div className="service-content">
                                    <div className="service-categories">
                                        <span className="subtitle">Services</span>
                                        <span className="title">Haematology</span>
                                    </div>
                                    <p>One Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, iste, architecto ullam tenetur quia nemo ratione tempora consectetur quos minus ut quo nulla ipsa aliquid neque molestias et qui sunt. Odit, molestiae.</p>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <ul className="listing mt-10">
                                                <li>Qualified Doctors</li>
                                                <li>24×7 Emergency Services</li>
                                                <li>General Medical</li>
                                            </ul>
                                        </div>
                                        <div className="col-sm-6">
                                            <ul className="listing mt-10 xs-mt-0">
                                                <li>Feel like Home Services</li>
                                                <li>Outdoor Checkup</li>
                                                <li>Easy and Affordable Billing</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <a className="primary-btn mt-30" href="#">View Details</a>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Container>
        </div>
	)
}

export default ServiceTab 