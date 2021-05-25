// Impot Components
import Banner from '../../components/banner'
import Services from '../../components/services'
import Team from '../../components/team'

 
function HomePage() {
	return (
		<div style={{width:"100%"}}>
			{/* Banner Part */}
			<Banner />


			{/* Service Part */}
			<Services />	
		</div>
	)
}

export default HomePage; 