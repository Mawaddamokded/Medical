import { Container, Row, Col } from 'reactstrap';
import SectionHeading from '../heading';
import SingleBlog from './single';

import blogImage1 from '../../assets/images/blog/1.jpg';
import blogImage2 from '../../assets/images/blog/2.jpg';

function Blog() {
	return(
	    <div id="tcd-blog" className="tcd-blog">
			<div className="sec-title mb-40">
				<h2 className="title mb-20">Our Blog</h2>
				<p className="desc mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit <br />veniam quis nostrud exercitation...</p>
			</div>
			<div className="blog-item mb-25 wow fadeInUp" data-wow-duration="800ms" data-wow-delay="800ms">
				<div className="blog-img">
					<a href="#">
						<img 
							src={blogImage1} 
							alt="Blog Image"
						/>
					</a>
				</div>
				<div className="blog-content">
					<div className="top-part">
						<span className="date">12 January</span>
					</div>
					<div className="content-part">
						<h4 className="title"><a href="#">Dental Operation</a></h4>
						<p className="desc">A wonderful serenity has taken <br />possessionof my entire soul like these....</p>
					</div>
					<div className="comment-part">
						<span><i className="fa fa-thumbs-o-up"></i> 08</span>
						<span><i className="fa fa-comment-o"></i> 01</span>
					</div>
				</div>
			</div>
			<div className="blog-item wow fadeInUp" data-wow-duration="800ms" data-wow-delay="800ms">
				<div className="blog-img">
					<a href="#">
						<img 
							src={blogImage2} 
							alt="Blog Image"
						/>
					</a>
				</div>
				<div className="blog-content">
					<div className="top-part">
						<span className="date">12 January</span>
					</div>
					<div className="content-part">
						<h4 className="title"><a href="#">Dental Operation</a></h4>
						<p className="desc">A wonderful serenity has taken <br />possessionof my entire soul like these....</p>
					</div>
					<div className="comment-part">
						<span><i className="fa fa-thumbs-o-up"></i> 08</span>
						<span><i className="fa fa-comment-o"></i> 01</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Blog