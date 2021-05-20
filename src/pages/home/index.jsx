// Impot Components
import Banner from '../../components/banner'
import Services from '../../components/services'
import Team from '../../components/team'

 
function HomePage() {
	return (
		<div>
			{/* Banner Part */}
			<Banner />

			{/* Team Part */}
			<Team />

			{/* Service Part */}
			<Services />	
		</div>
	)
}

export default HomePage; 