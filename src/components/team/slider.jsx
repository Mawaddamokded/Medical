import OwlCarousel from 'react-owl-carousel';


     //    <OwlCarousel 
     //    	className={'owl-theme'}
		   //  loop={true}
		   //  margin={10}
		   //  nav={false}
		   //  dots={false}
		   //  autoplay={true}
		   //  autoplayTimeout={2000}
		   //  items={4} >
		    
		   //  <div className={'item'}>
		   //    Item 1
		   //  </div>
		   //  <div className={'item'}>
		   //    Item 2
		   //  </div>
		   //  <div className={'item'}>
		   //    Item 3
		   //  </div>
		   //  <div className={'item'}>
		   //    Item 4
		   //  </div>
		   //  <div className={'item'}>
		   //    Item 5
		   //  </div>
	    // </OwlCarousel>

const options:{
    loop: true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
},

class Slider extends Component {
    state= {
        responsive:{
            0: {
                items: 1,
            },
            450: {
                items: 2,
            },
            600: {
                items: 3,
            },
            1000: {
                items: 4,
            },
        },
    }
    render() {
        return (
	        <OwlCarousel className={'owl-theme'}
			    loop={true}
			    margin={10}
			    nav={true}
			    dots={false}
			    autoplay={true}
			    autoplayTimeout={2000}
			    items={4}
			    responsive={this.state.responsive} >
			    
			    <div className={'item'}>
			      Item 1
			    </div>
			    <div className={'item'}>
			      Item 2
			    </div>
			    <div className={'item'}>
			      Item 3
			    </div>
			    <div className={'item'}>
			      Item 4
			    </div>
			    <div className={'item'}>
			      Item 5
			    </div>
		    </OwlCarousel>
	    )
    }
}

export default Slider;
