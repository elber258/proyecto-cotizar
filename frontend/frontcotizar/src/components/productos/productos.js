/* eslint-disable no-unused-vars */

import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { show_alerta } from '../../function';
//import Card from '../cardsproductos/card';




const Productos = () => {
    const url = 'http://localhost:3300/productos';
    const [ id, setId ] = useState('');
    const [ nombre, setNombre ] = useState('');
    const [ stock, setStock ] = useState('');
    const [ precio, setPrecio ] = useState('');
    const [ operation, setOperation ] = useState ()
    const [ products, setProducts ] = useState([]);
    const [ title, setTitle ] = useState('');

    useEffect(
        ()=> {
            getProducts ();
        }, []
    );

    const getProducts = async () => {
        const response = await axios.get(url);
        setProducts(response.data);
    };

    const deleteProduct = (id, nombre) => {
        const MySwal = withReactContent(Swal);
        MySwal.fire({
            title:'¿Seguro de eliminar el producto '+nombre+' ?',
            icon: 'question',text:'Esta acción es irreversible',
            showCancelButton:true,confirmButtonText:'Si, eliminar',cancelButtonText:'Cancelar'
        }).then((result) =>{
            if(result.isConfirmed){
                setId(id);
                console.log(id);
                enviarPeticion('DELETE',{id:id});
            }
            else{
                show_alerta('El producto NO fue eliminado','info');
            }
        });
    }

    const openModal = (operacion, id, nombre, stock, precio) => {
        setId('');
        setNombre('');
        setStock('');
        setPrecio('');
        setOperation(operacion);

        if (operacion===1){
            setTitle('Registrar Producto');
        }
        else if (operacion===2){
            setTitle('Modificar Producto');
            setId(id);
            setNombre(nombre);
            setStock(stock);
            setPrecio(precio);
        }
    }

    const validar = () => {
        var metodo,
            parametros;
        
        if (nombre.trim()===''){
            show_alerta('Por favor escriba el nombre del producto', 'warning');
        } else if (stock.trim()===''){
            show_alerta('Por favor escriba la cantidad de productos en stock', 'warning');
        } else if (precio.trim()===''){
            show_alerta('Por favor escriba el precio del producto', 'warning');
        } else {
            if (operation===1){
                metodo='POST';
                parametros={nombre: nombre.trim(),
                            stock: stock.trim(),
                            precio: precio.trim()
                            }
            }
            else {
                metodo='PUT';
                parametros={id: id,
                            nombre: nombre.trim(),
                            stock: stock.trim(),
                            precio: precio.trim()        
                }
            }
            enviarPeticion (metodo, parametros);
        }
    }

    const enviarPeticion = async (metodo, parametros) => {
        const response = await axios({method: metodo, url:url, data: parametros}).then(function(response){
            var tipo = response.data[0];
            var mensaje = response.data[1];
            show_alerta(mensaje, tipo);
            if (tipo==='success'){
                document.getElementById('btnCerrar').click();
                getProducts();
            }
        }).catch(function(error) {
            show_alerta('Ha ocurrido un error en la petición', 'error');
            console.log(error);
        });
    }

    return (
        <div>
            <div>
            
                <h1>Lista de Productos</h1>
                  <button onClick={() => openModal(1)}>Agregar Producto</button>
                            <table>
                                <thead>
                                    <tr>
                                    <th>ID</th>
                                    <th>Nombre</th>
                                    <th>Stock</th>
                                    <th>Precio</th>
                                    <th>Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {products.map(product => (
                                    <tr key={product.id}>
                                        <td>{product.id}</td>
                                        <td>{product.nombre}</td>
                                        <td>{product.stock}</td>
                                        <td>{product.precio}</td>
                                        <td>
                                        <button onClick={() => openModal(2, product.id, product.nombre, product.stock, product.precio)}>Editar</button>
                                        <button onClick={() => deleteProduct(product.id, product.nombre)}>Eliminar</button>
                                        </td>
                                    </tr>
                                    ))}
                                </tbody>
                            </table> 
                        
                              {/* Aquí puedes renderizar el modal para agregar/editar productos */}
                        <di id="myModal" className="modal">
                            
                       </di>    
                    {/* Contenido del modal */}
            </div>
        </div>
     
    );
  };
 

export default Productos;