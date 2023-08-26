import React from 'react';
import Menu from '../components/menu/Menu'; // Componente Menú ( Barra de menu del proyecto) 

import Footer from '../components/Footer/Footer';// Componente Footer (Pie de pagina del proyecto) 
//import { Card } from 'reactstrap';
//import Productos from '../components/productos/productos';

 
class Home extends React.Component {
 
	render() {
 
		return(
 
			<>
 
			<Menu /> 
                   
	  		<Footer />
 
	  		</>
 
		)
 
	}
 
}


 
export default Home;