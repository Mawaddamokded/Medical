import { Container, Row, Col } from 'reactstrap';
function Newsletter() {
	return(
        <div id="tcd-timing-newsletter" className="tcd-timing-newsletter newsletter-bg">
            <Row className="align-items-center margin-0">
                <Col lg="7">
                    <div className="tcd-newsletter">
                        <h2 className="title">Ask Your Own Question</h2>
                        <h5 className="subtitle">A collection of textile samples lay spread out on the table samples lay...</h5>
                        <div className="newsletter-part">
                            <form className="mb-0">
                                <div className="form-group mb-0">
                                    <input 
                                        type="email" 
                                        name="your-email" 
                                        placeholder="Type Your Message..." 
                                    />
                                    <button className="btn-newsletter"><i className="fa fa-long-arrow-right"></i></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </Col>

                <Col lg="5" className="pr-0 md-pl-0">
                    <div className="tcd-time-table">
                        <h2 className="timing-title mb-10">Working Hours</h2>
                        <h5 className="subtitle mb-20">Checkout EMedical's Working Time </h5>
                        <div className="table-part">
                            <div className="single-time pt-0">
                                <span className="day">Monday</span>
                                <span className="time">8AM-9PM</span>
                                <span className="btn-part"><a className="primary-btn timing-btn" href="#">Book Now <i className="fa fa-clock-o"></i></a></span>
                            </div>
                            <div className="single-time">
                                <span className="day">Tuesday</span>
                                <span className="time">8AM-9PM</span>
                                <span className="btn-part"><a className="primary-btn timing-btn" href="#">Book Now <i className="fa fa-clock-o"></i></a></span>
                            </div>
                            <div className="single-time">
                                <span className="day">Wednesday</span>
                                <span className="time">8AM-9PM</span>
                                <span className="btn-part"><a className="primary-btn timing-btn" href="#">Book Now <i className="fa fa-clock-o"></i></a></span>
                            </div>
                            <div className="single-time">
                                <span className="day">Thursday</span>
                                <span className="time">8AM-9PM</span>
                                <span className="btn-part"><a className="primary-btn timing-btn" href="#">Book Now <i className="fa fa-clock-o"></i></a></span>
                            </div>
                            <div className="single-time">
                                <span className="day">Friday</span>
                                <span className="time">8AM-9PM</span>
                                <span className="btn-part"><a className="primary-btn timing-btn" href="#">Book Now <i className="fa fa-clock-o"></i></a></span>
                            </div>
                            <div className="single-time closed">
                                <span className="day">Saturday-Sunday</span>
                                <span className="time">Closed</span>
                                <span className="btn-part"><a className="primary-btn timing-btn" href="#">Book Now <i className="fa fa-clock-o"></i></a></span>
                            </div>
                        </div>
                        <h2 className="timing-title mb-20">Need Flexible Time?</h2>
                        <a className="primary-btn icon-btn wow fadeInUp" data-wow-duration="800ms" data-wow-delay="800ms" href="#">Suggest Checkup Time <i className="fa fa-long-arrow-right"></i></a>
                    </div>
                </Col>
            </Row>
        </div>
	)
}

export default Newsletter 