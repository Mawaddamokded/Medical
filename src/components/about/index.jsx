import { Container, Row, Col } from 'reactstrap';
import Header from '../header'
import SectionHeading from '../heading';

import aboutImage1 from '../../assets/images/about/about1.png';
import aboutRightShape from '../../assets/images/about/about-right-shape.png';


function About() {
	return(
	    <div id="tcd-about" className="tcd-about">
			<Row className="align-items-center margin-0">
				<Col lg="6" className="padding-0 md-mb-50">
					<div className="about-img">
						<img 
							src={aboutImage1}
							alt="About Image" 
						/>
					</div>
				</Col>
				<Col lg="6">
					<div className="about-text">
						<SectionHeading
							classes="sec-title left-shape"
							title="Why Is Medical"
							description="Lorem ipsum dolor sit amet consectetur adipisicing elit...sit amet consectetur adipisicing elit veniam quis nostrud exercitation..."
						/>
						<ul className="listing mb-50">
							<li>Feel like you are at Home Services.</li>
							<li>Lorem ipsum dolor sit amet, consectetur adipisicing elit,</li>
							<li>Medicies And Drug Store</li>
							<li>Feel like Home Services</li>
							<li>Save your Money and Time with us</li>
							<li>Easy and Affordable Billing</li>
							<li>Last list item or something</li>
						</ul>
						<div className="about-btn">
							<a className="primary-btn" href="#">View More Details</a>
						</div>
					</div>
				</Col>
			</Row>
			<div className="shape-img hidden-md">
				<img 
					src={aboutRightShape} 
					alt="About Shape Image"
				/>
			</div>
		</div>
	)
}

export default About