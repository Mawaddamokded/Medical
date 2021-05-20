import { Container, Row, Col } from 'reactstrap';

// Import Assets
import servicesImage1 from '../../assets/images/services/1.jpg';
import servicesImage2 from '../../assets/images/services/2.jpg';
import servicesImage3 from '../../assets/images/services/3.jpg';
import servicesImage4 from '../../assets/images/services/4.jpg';

function Faq() {
	return(
        <div className="tcd-faq">
            <div className="sec-title mb-40">
                <h2 className="title mb-20">Our Department</h2>
                <p className="desc mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit <br />veniam quis nostrud exercitation...</p>
            </div>
            <div id="tcd-accordion" className="tcd-accordion">
                <div className="accordion-item mb-15">
                    <div className="accordion-header" id="heading-1">
                    <h4 className="mb-0">
                        <button className="accordion-btn collapsed" data-toggle="collapse" data-target="#collapse-1" aria-expanded="true" aria-controls="collapse-1">
                            General Health Care
                        </button>
                    </h4>
                    </div>
                    <div id="collapse-1" className="collapse" aria-labelledby="heading-1" data-parent="#tcd-accordion">
                        <div className="accordion-body">
                            <span className="d-block mb-30">Lorem ipsum dolor sit amet consectetur adipisicing elit veniam quis nostrud exercitation A collection of textile samples lay spread out on the table - Samsa was a travelling</span>
                            <span className="mb-0">salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine...</span>
                        </div>
                    </div>
                </div>
                <div className="accordion-item mb-15">
                    <div className="accordion-header" id="heading-2">
                    <h4 className="mb-0">
                        <button className="accordion-btn collapsed" data-toggle="collapse" data-target="#collapse-2" aria-expanded="false" aria-controls="collapse-2">
                            Cancer Care
                        </button>
                    </h4>
                    </div>
                    <div id="collapse-2" className="collapse" aria-labelledby="heading-2" data-parent="#tcd-accordion">
                        <div className="accordion-body">
                            <span className="d-block mb-30">Lorem ipsum dolor sit amet consectetur adipisicing elit veniam quis nostrud exercitation A collection of textile samples lay spread out on the table - Samsa was a travelling</span>
                            <span className="mb-0">salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine...</span>
                        </div>
                    </div>
                </div>
                <div className="accordion-item mb-15">
                    <div className="accordion-header" id="heading-3">
                    <h4 className="mb-0">
                        <button className="accordion-btn collapsed" data-toggle="collapse" data-target="#collapse-3" aria-expanded="false" aria-controls="collapse-3">
                            Dental Cleaning Care
                        </button>
                    </h4>
                    </div>
                    <div id="collapse-3" className="collapse" aria-labelledby="heading-3" data-parent="#tcd-accordion">
                        <div className="accordion-body">
                            <span className="d-block mb-30">Lorem ipsum dolor sit amet consectetur adipisicing elit veniam quis nostrud exercitation A collection of textile samples lay spread out on the table - Samsa was a travelling</span>
                            <span className="mb-0">salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine...</span>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <div className="accordion-header" id="heading-4">
                    <h4 className="mb-0">
                        <button className="accordion-btn" data-toggle="collapse" data-target="#collapse-4" aria-expanded="false" aria-controls="collapse-4">
                            Nurology Department
                        </button>
                    </h4>
                    </div>
                    <div id="collapse-4" className="collapse show" aria-labelledby="heading-4" data-parent="#tcd-accordion">
                        <div className="accordion-body mb-0">
                            <span className="d-block mb-30">Lorem ipsum dolor sit amet consectetur adipisicing elit veniam quis nostrud exercitation A collection of textile samples lay spread out on the table - Samsa was a travelling</span>
                            <span className="mb-0">salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine...</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
	)
}

export default Faq 