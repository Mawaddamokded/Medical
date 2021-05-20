import { Container, Row, Col } from 'reactstrap';

function Footer() {
	return(
	    <div id="tcd-footer" className="tcd-footer pt-110 md-pt-70">
			<Container>
				<div className="footer-top-part">
					<Row>
						<Col>
							<div className="footer-widget">
								<h4 className="footer-title">Quick Links</h4>
								<ul className="footer-menu left">
									<li><a href="#">Doctor</a></li>
									<li><a href="#">Services</a></li>
									<li><a href="#">Gallery</a></li>
									<li><a href="#">News</a></li>
								</ul>
								<ul className="footer-menu right">
									<li><a href="#">Terms of Use</a></li>
									<li><a href="#">Privacy & Policy</a></li>
									<li><a href="#">Disclaimer</a></li>
									<li><a href="#">Sitemap</a></li>
								</ul>				                    
							</div>
						</Col>
						<Col>
							<div className="footer-widget">
								<h4 className="footer-title">Opening Hours</h4>
								<div className="footer-schedule">
									<ul className="appointment">
										<li><span className="date">Monday - Friday</span><span className="time">9 am - 4 pm</span></li>
										<li><span className="date">Monday - Friday</span><span className="time">9 am - 4 pm</span></li>
										<li><span className="date">Monday - Friday</span><span className="time">9 am - 4 pm</span></li>
									</ul>
								</div>
							</div>
						</Col>
						<Col>
							<div className="footer-widget">
								<h4 className="footer-title">Contact Us</h4>
								<div className="footer-desc">
									<p>Lorem ipsum dolor sit amet,<br /> ipsum consectetuer</p>
									<p className="mb-10">Phone: <a className="phone" href="tel:01234567">+088-123456</a></p>
									<p>Email: <a className="email" href="mailto:your@website.com">your@website.com</a></p>
								</div>
							</div>
						</Col>
					</Row>
				</div>
				<div className="footer-bottom-part text-center pt-75 pb-100 md-pt-35 md-pb-60">
					<p className="copyright mb-0">Copyright 2018-2020 Medical Theme by <a href="#">The Codude</a></p>
				</div>
			</Container>
		</div>
	)
}

export default Footer