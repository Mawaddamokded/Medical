function SingleBlog(props) {
	return(
        <div className="blog-item">
            <div className="blog-img">
                <a href={props.Link}>
                    <img 
                        src={props.img} 
                        alt="Blog Image"
                    />
                </a>
            </div>
            <div className="blog-content">
                <div className="left-part">
                    <div className="single-part">
                        <span className="date">{props.date}</span>
                        <span className="date">{props.month}</span>
                    </div>
                    <div className="single-part">
                        <span>Likes: {props.likesCount}</span>
                    </div>
                    <div className="single-part">
                        <span>{props.commentsCount}</span>
                        <span>Comments</span>
                    </div>
                </div>
                <div className="right-part">
                    <h4 className="title"><a href={props.Link}>{props.title}</a></h4>
                    <p className="desc">{props.description}</p>
                    <a className="blog-btn" href={props.Link}>{props.btnText}</a>
                </div>
            </div>
        </div>
	)
}

export default SingleBlog