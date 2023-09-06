import React, { useContext, useState } from "react";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import "assets/css/login.css";
import { AuthContext } from "Auth/AuthCtx";
import { postAuth } from "../../httprequest/httprequest";
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
  CardFooter,
} from "reactstrap";

const LoginComponent = () => {
  const url = process.env.REACT_APP_API_BASE_URL;
  const { signin } = useContext(AuthContext);
  const navigate = useNavigate();

  const [contraseña_usuario, setPassword] = useState("");
  const [correo_usuario, setEmail] = useState("");

  const cbRedirect = () => {
    navigate("/register");
  };

  const cbResponse = (response) => {
    console.log(response);
    if (response === "USER_DOES_NOT_EXISTS") {
      Swal.fire({
        icon: "error",
        title: "Ups...",
        text: "El usuario no existe",
      });
    } else if (response === "ERROR_PASSWORD") {
      Swal.fire({
        icon: "error",
        title: "Ups...",
        text: "Contraseña incorrecta",
      });
    } else {
      localStorage.setItem("userInfo", JSON.stringify(response));
      signin(response, cbRedirect);

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Login exitoso",
        showConfirmButton: true,
        timer: 4000,
      });
      
    }
  };

  const onSubmit = (e) => {
    postAuth(
      `${url}/api/userAuth/auth`,
      { correo_usuario, contraseña_usuario },
      cbResponse
    );
  };

  /* 
    const [ user, setUser ] = useState();

    const [ id, setId ] = useState('');
    const [ documentType, setDocumentType ] = useState('');
    const [ name, setName ] = useState('');
    const [ city, setCity ] = useState('');
    const [ address, setAddress ] = useState('');
    const [ rol, setRol ] = useState('');
    const [ estado, setEstado ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ phone, setPhone ] = useState(''); 

     const onSubmit = async (e) => {
    e.preventDefault();

    Axios.post(`${url}/user/login`, {
      contraseña_usuario,
      correo_usuario,
    })
      .then((res) => console.log("Posting...", res))
      .catch((err) => console.log(err));
  };

  
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Login exitoso",
        showConfirmButton: false,
        timer: 4000,
      });

        Swal.fire({
         icon: "error",
         title: "Ups...",
         text: "Algo salió mal!",
         timer: 4000,
       });
   


    
    useEffect(
        ()=> {
            getUser ();
        }, []
    );

    const getUser = async () => {
        const response = await axios.get(url);
        setUser(response.data);
    };



*/

  return (
    <section className="section loginsection">
      <Container className="pt-lg-7">
        <Row className="justify-content-center">
          <Col lg="5">
            <Card className="shadow my-2">
              <CardHeader className="loginHeader">
                <CardText tag="h4">Logueate tambien con</CardText>
                <div className="btn-wrapper text-center">
                  <Button
                    className="btn-neutral btn-icon"
                    color="default"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <span className="btn-inner--icon ">
                      <img
                        className="socialnetworkicon"
                        alt="..."
                        src={
                          require("assets/img/icons/common/github.svg").default
                        }
                      />
                    </span>
                    <span className="btn-inner--text socialnetworkBtn">
                      Github
                    </span>
                  </Button>

                  <Button
                    className="btn-neutral btn-icon ml-1"
                    color="default"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <span className="btn-inner--icon mr-1">
                      <img
                        className="socialnetworkicon"
                        alt="..."
                        src={
                          require("assets/img/icons/common/google.svg").default
                        }
                      />
                    </span>

                    <span className="btn-inner--text socialnetworkBtn">
                      Google
                    </span>
                  </Button>
                </div>
              </CardHeader>

              <CardBody className="px-md-5 py-md-5">
                <Form onSubmit={onSubmit}>
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
                  </FormGroup>

                  <FormGroup check className="pt-2">
                    <Input type="checkbox" />
                    <Label check>Recordarme</Label>
                  </FormGroup>

                  <Button className="mt-4" color="primary" type="submit">
                    Login
                  </Button>
                </Form>
              </CardBody>

              <CardFooter className="loginFooter">
                <Row className="mt-2">
                  <Col className="text-center" md>
                    <Link className="text-dark" to="#">
                      <small>Olvidé contraseña</small>
                    </Link>
                  </Col>

                  <Col className="text-center" md>
                    <Link className="text-dark" to={"/register"}>
                      <small>Crear una cuenta</small>
                    </Link>
                  </Col>
                </Row>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default LoginComponent;
