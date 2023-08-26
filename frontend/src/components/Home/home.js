import React from 'react';
 
import Menu from '../menu/Menu'; // Componente Menú ( Barra de menu del proyecto) 
//import Slider from './Slider/slider';
import Servicios from './servicios/Servicios';
import Footer from '../footer/footer';// Componente Footer (Pie de pagina del proyecto) 
 
 
class Home extends React.Component {
 
	render() {
 
		return(
 
			<>
 
			<Menu /> 
 
			<main role="main" className="flex-shrink-0 mt-5">
 
		            <div className="container">
		  	  		
		  	        
		  	        <Servicios /> 

		  	        <hr className="featurette-divider" />
 
		            </div>
 
	  		</main>
 
	  		<Footer />
 
	  		</>
 
		)
 
	}
 
}
 
export default Home;