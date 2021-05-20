import { Container, Row, Col } from 'reactstrap';
// Assets
import callLogo from '../../assets/images/arrows/phone.svg';

function Header() {
	return(
	    <header id="tcd-header" className="tcd-header-1">
	        <div className="menu-bar menu-sticky">
	            <Container>
				<Row>
						<Col lg="1">
							<div className="logo">
								<a href="#">
									<span>EMedical</span>
								</a>
							</div>
							<button 
								className="mobile-menu-icon" 
								aria-label="Main Menu"
							>
								<span></span>
								<span></span>
								<span></span>
							</button>
						</Col>
						<Col lg="11">
							<div className="mainmenu">
								<ul id="onepage-menu" className="nav-menu onepage-menu">
									<li><a href="#tcd-banner">Home</a></li>


									<li><a href="#tcd-services">Services</a></li>

									<li><a href="#tcd-team">Team</a></li>

									<li><a to="#tcd-blog" href="../blog/index.jsx">Blog</a></li>

									<li><a href="#tcd-footer">Contact</a></li>
								</ul>
							 	<div className="contact-menu hidden-md">
									<span className="icon">
										<img 
											src={callLogo}
											alt="Phone Icon"
										/> 
									</span>
									<div className="contact-number">
										<span>Call Us</span>
										<span>
											<a 
												className="phone" 
												href="tel:01234567"
											>
												+088-123456
											</a>
										</span>
									</div>
								</div>
							</div>
							<div className="search hidden-md">
								<a 
									className="tc-search" 
									data-target=".search-modal" 
									data-toggle="modal" 
									href="#"
								>
									<i className="fa fa-search"></i>
								</a>
							</div>
						</Col>
					</Row>
	            </Container>
	        </div>
	    </header>
	)
}

export default Header