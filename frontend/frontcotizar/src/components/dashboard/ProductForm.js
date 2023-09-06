import React, { useState } from "react";
import "assets/css/App.css";
import Swal from "sweetalert2";
import {
  Button,
  Card,
  Label,
  CardBody,
  FormGroup,
  Form,
  Input,
  CardHeader,
  Container,
  Row,
  Col,
  CardText,
  FormText,
} from "reactstrap";
import { Link } from "react-router-dom";
import {
  getProduct,
  postNewProduct,
  putUpdateProduct,
  deleteProduct,
} from "../../httprequest/httprequest";

const UserForm = () => {
  const { getData, setGetData } = useState(true);
  const { prodList, ProdList } = useState("");
  const url = process.env.REACT_APP_API_BASE_URL;

  const [id_producto, setId] = useState("");
  const [nombre_producto, setProdName] = useState("1");
  const [id_categoria, setProdCategory] = useState("");
  const [descripcion, setProDescription] = useState("1");
  const [precio, setProdPrice] = useState("");
  const [stock, setProdStock] = useState("");
  const [stock_minimo, setProdMinStock] = useState("");

  const cbResponse = (response) => {
    if (response === "PRODUCT_CREATED_SUCCESFULLY") {
      console.log("Enviado con exito");
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Usuario creado exitosamente",
        showConfirmButton: false,
        timer: 2000,
      });
    } else {
      console.log("Enviado sin exito");

      Swal.fire({
        icon: "error",
        title: "Ups...",
        text: "Algo salió mal!",
      });
    }
  };

  const onSubmit = (e) => {};

  return (
    <section className="section registersection">
      <Container className="pt-lg-7">
        <Row className="justify-content-center">
          <Col lg="5">
            <Card className="shadow my-2">
              <CardHeader className="newRegHeader productsCardHeader">
                <CardText tag="h4">Manejo de Productos</CardText>
                <Form onSubmit={onSubmit}>
                  <Row xs="2">
                    <Col className="mt-3 ">
                      <FormGroup>
                        <Input
                          bsSize="sm"
                          id="idProdForm"
                          name="idProd"
                          placeholder="escribe el id del producto a consultar"
                          type="text"
                          maxLength={40}
                          required
                          onChange={(e) => setId(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                    <Col className=" mt-3">
                      <Button className="ml-1" color="primary" type="submit" size="sm">
                        Consultar
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </CardHeader>

              <CardBody className="px-md-5 py-md-5">
                <Form onSubmit={onSubmit}>
                  <FormGroup>
                    <Label for="nameProdForm">Nombre</Label>
                    <Input
                      id="nameProdForm"
                      name="nameProd"
                      placeholder="referencia"
                      type="text"
                      maxLength={40}
                      required
                      onChange={(e) => setProdName(e.target.value)}
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label for="categoryProdForm">Categorias</Label>
                    <Input
                      id="categoryProdForm"
                      name="categoryProdSelect"
                      type="select"
                      required
                      onChange={(e) => setProdCategory(e.target.value)}
                    >
                      <option value={"1"}>Camaras</option>
                      <option value={"2"}>Videograbadoras</option>
                      <option value={"3"}>Almacenamiento</option>
                      <option value={"4"}>Pantallas y Controladores</option>
                      <option value={"5"}>Alarmas</option>
                      <option value={"6"}>Accesorios</option>
                      <option value={"7"}>Controladores de Accesos</option>
                      <option value={"8"}>Kits</option>
                    </Input>
                  </FormGroup>

                  <FormGroup>
                    <Label for="descripcionProdForm">Descripcion</Label>
                    <Input
                      id="descripcionProdForm"
                      name="descriptionProd"
                      placeholder="descripcion"
                      type="tel"
                      maxLength={10}
                      minLength={10}
                      required
                      onChange={(e) => setProDescription(e.target.value)}
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label for="priceProdForm">Precio</Label>
                    <Input
                      id="priceProdForm"
                      name="PriceProd"
                      placeholder="referencia"
                      type="text"
                      maxLength={40}
                      required
                      onChange={(e) => setProdName(e.target.value)}
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label for="stockProdForm">Stock</Label>
                    <Input
                      id="stockProdForm"
                      name="stockProd"
                      placeholder="numero de existencias"
                      type="address"
                      required
                      onChange={(e) => setProdStock(e.target.value)}
                    />
                  </FormGroup>

                  <Container>
                    <Button className="mt-4 mb-4" color="primary" type="submit">
                      Actualizar
                    </Button>
                  </Container>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default UserForm;
