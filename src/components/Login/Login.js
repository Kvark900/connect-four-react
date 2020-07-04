import React, {useState} from "react";
import NavbarMenu from "../Navbar/Navbar";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";
import Firebase from "../../config/fbConfig";
import {useHistory} from "react-router";


export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  let history = useHistory();


  function goHome() {
    history.push("/");
  }


  let handleSubmit = async (event) => {
    let fb = Firebase.getInstance();
    console.log(email, password);
    event.preventDefault();
    try {
      let response = await fb.signIn(email, password);
      console.log(response);
      goHome();
      setErrorMsg("");
      localStorage.setItem("authUser", JSON.stringify(response.user));
      console.log("Current user is", localStorage.getItem("authUser"));
   } catch (e) {
      console.error(e);
      localStorage.removeItem("authUser");
      setErrorMsg("Invalid credentials")
    }
  };

  return (
      <>
        <NavbarMenu/>
        <Container className="pt-lg-7 mt-5">
          <Row className="justify-content-center">
            <Col lg="5">
              <Card className="bg-secondary shadow border-0">
                <CardHeader className="bg-white pb-5">
                  <div className="text-muted text-center mb-3">
                    <h1>Sign in</h1>
                  </div>
                  <div className="text-center text-danger"> {errorMsg}</div>
                </CardHeader>
                <CardBody style={{background: "whitesmoke"}}
                          className="px-lg-5 py-lg-5">
                  <Form role="form"
                        onSubmit={handleSubmit}>
                    <FormGroup className="mb-3">
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            {/*<i className="ni ni-email-83"/>*/}
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                            placeholder="Email"
                            name="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            required
                        />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup>
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            {/*<i className="ni ni-lock-circle-open"/>*/}
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                            placeholder="Password"
                            type="password"
                            name="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            autoComplete="off"
                            required
                        />
                      </InputGroup>
                    </FormGroup>
                    <div className="text-center">
                      <Button
                          className="my-4"
                          color="primary"
                          type="submit"
                      >
                        Sign in
                      </Button>
                    </div>
                  </Form>
                </CardBody>
              </Card>
              <Row className="mt-3">
                <Col className="text-right"
                     xs="6">
                  <a
                      className="text-light"
                      href={"#pablo"}
                      onClick={(e) => e.preventDefault()}
                  >
                    <small>Create new account</small>
                  </a>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </>
  )
}
