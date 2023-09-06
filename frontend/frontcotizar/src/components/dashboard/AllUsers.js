import React, { useEffect, useState } from "react";
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
  getUser,
  postNewUserAuth,
  putUpdateUserAuth,
  deleteUser,
} from "../../httprequest/httprequest";

const UserForm = () => {
  const { gettingData, setGettingData } = useState(true);
  const { usersList, setUsersList } = useState("");
  const url = process.env.REACT_APP_API_BASE_URL;

  const cbResponse = (response) => {
    console.log(response);
    setGettingData(false);
  };

  useEffect(() => {
    gettingData &&
      getUser(`${url}/users`, (response) => {
        console.log(response);
        setGettingData(false);
      });
  }, [gettingData, url]);

  

  const [id_usuario, setId] = useState("");
  const [id_tipo_documento, setDocumentType] = useState("1");
  const [nombre_usuario, setName] = useState("");
  const [id_ciudad, setCity] = useState("1");
  const [direccion, setAddress] = useState("");
  const [rol, setRol] = useState("");
  const [contraseña_usuario, setPassword] = useState("");
  const [correo_usuario, setEmail] = useState("");
  const [telefono_usuario, setPhone] = useState("");

  /*

  const cbResponse = (response) => {
    console.log(response);

    if (response === "USER_CREATE_SUCCESFULLY") {
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
*/

  const onUpdateSubmit = (e) => {
    putUpdateUserAuth(
      `${url}/api/users`,
      {
        id_usuario,
        id_tipo_documento,
        nombre_usuario,
        id_ciudad,
        direccion,
        rol,
        contraseña_usuario,
        correo_usuario,
        telefono_usuario,
      },
      cbResponse
    );
  };

  return (
    <section className="section registersection">
      <Container className="pt-lg-7">
        <Row className="justify-content-center">
          <Col lg="5">
            <Card className="shadow my-2 ">
              <CardHeader className="newRegHeader productsCardHeader">
                <CardText tag="h4">Manejo de usuarios</CardText>
                <Form >
                  <Row xs="2">
                    <Col className="mt-3 ">
                      <FormGroup>
                        <Input
                         bsSize="sm"
                          id="idProdForm"
                          name="idProd"
                          placeholder="escribe numero de documento"
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
                <Form onSubmit={onUpdateSubmit}>
                  <FormGroup>
                    <Label for="nameForm">Nombre</Label>
                    <Input
                      id="nameForm"
                      name="Name"
                      placeholder="ingresa nombre"
                      type="text"
                      maxLength={40}
                      required
                      onChange={(e) => setName(e.target.value)}
                    />
                  </FormGroup>

                  <Row>
                    <Col md={3}>
                      <FormGroup>
                        <Label for="doctypeSelect">Tipo documento</Label>
                        <Input
                          id="doctypeSelect"
                          name="docselect"
                          type="select"
                          required
                          onChange={(e) => setDocumentType(e.target.value)}
                        >
                          <option value={"1"}>(CC) Cedula de Ciudadania</option>
                          <option value={"2"}>
                            (CE) Cedula de Extranjeria
                          </option>
                          <option value={"3"}>
                            (NIT) Numero de Identificacion Tributaria
                          </option>
                        </Input>
                      </FormGroup>
                    </Col>
                    <Col md={9}>
                      <FormGroup>
                        <Label for="docForm">Numero de documento</Label>
                        <Input
                          id="docForm"
                          name="document"
                          placeholder="numero de documento"
                          type="tel"
                          maxLength={10}
                          minLength={6}
                          required
                          onChange={(e) => setId(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <FormGroup>
                    <Label for="phoneForm">Numero Telefono</Label>
                    <Input
                      id="phoneForm"
                      name="phone"
                      placeholder="numero celular"
                      type="tel"
                      maxLength={10}
                      minLength={10}
                      required
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label for="citySelect">Ciudad Residencia</Label>
                    <Input
                      id="citySelect"
                      name="cityselect"
                      type="select"
                      required
                      onChange={(e) => setCity(e.target.value)}
                    >
                      <option value={"5"}>Barranquilla</option>
                      <option value={"3"}>Bogotá</option>
                      <option value={"1"}>Cali</option>
                      <option value={"4"}>Cartagena</option>
                      <option value={"2"}>Medellin</option>
                    </Input>
                  </FormGroup>

                  <FormGroup>
                    <Label for="addressForm">Direccion</Label>
                    <Input
                      id="addressForm"
                      name="address"
                      placeholder="direccion"
                      type="address"
                      required
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label for="emailForm">Correo electronico</Label>
                    <Input
                      id="emailForm"
                      name="email"
                      placeholder="correo electronico"
                      type="email"
                      required
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <FormText>Ingresa un correo electronico valido</FormText>
                  </FormGroup>

                  <FormGroup>
                    <Label for="passForm">Contraseña</Label>
                    <Input
                      id="passForm"
                      name="password"
                      placeholder="contraseña"
                      type="password"
                      required
                      maxLength={10}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <FormText>
                      Ingresa una contraseña entre 5 y 10 caracteres
                    </FormText>
                  </FormGroup>

                  <FormGroup check>
                    <Input
                      type="checkbox"
                      onChange={(e) => setRol(e.target.value === "on" ? 1 : 0)}
                    />
                    <Label check>Usuario Administrador</Label>
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
