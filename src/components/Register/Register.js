import React, {useContext, useEffect, useState} from "react";
import Form from "react-bootstrap/Form";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  FormGroup, Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row
} from "reactstrap";
import Firebase from "../../config/fbConfig";
import {GameContext, GlobalContext} from "../../App";


export default function Register() {
  const REGISTER_SUCCESS_MSG = "You have registered successfully!";

  let {
    showAlert, toggleShowAlert,
    alertMsg, updateAlertMsg
  } = useContext(GlobalContext);

  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [username, setUsername] = useState("");
  let [firstName, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");
  let [successMsg, setSuccessMsg] = useState("");


  async function handleSubmit(e) {
    e.preventDefault();
    try {
      let response = await Firebase.getInstance().registerUser({
        firstName: firstName,
        lastName: lastName,
        email: email,
        username: username,
        password: password,
      });
      setSuccessMsg(REGISTER_SUCCESS_MSG);
      resetFields();
      console.log(`User with email: ${email} created`)
    } catch (e) {
      console.log(e)
    }
  }

  function resetFields() {
    setPassword("");
    setEmail("");
    setUsername("");
    setLastName("");
    setFirstName("")
  }

  return (
      <>
        <Container className="pt-lg-7 mt-5">
          <Row className="justify-content-center">
            <Col lg="5">
              <Card className="bg-secondary shadow border-0">
                <CardHeader className="bg-white pb-5">
                  <div className="text-muted text-center mb-3">
                    <h1>Sign up</h1>
                  </div>
                  <h4 className="text-success text-center"> {successMsg}</h4>
                </CardHeader>
                <CardBody style={{background: "whitesmoke"}}
                          className="px-lg-5 py-lg-5">
                  <Form role="form"
                        onSubmit={handleSubmit}>
                    <FormGroup className="mb-3">
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                             <i className="fas fa-file-signature"/>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                            placeholder="First Name"
                            name="firstName"
                            value={firstName}
                            onChange={e => {
                              setSuccessMsg("");
                              setFirstName(e.target.value)
                            }}
                            required
                        />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup className="mb-3">
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="fas fa-file-signature"/>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                            placeholder="Last Name"
                            name="lastName"
                            value={lastName}
                            onChange={e => {
                              setSuccessMsg("");
                              setLastName(e.target.value)
                            }}
                            required
                        />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup className="mb-3">
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="far fa-envelope"/>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                            placeholder="Email"
                            name="email"
                            value={email}
                            onChange={e => {
                              setSuccessMsg("");
                              setEmail(e.target.value)
                            }}
                            required
                        />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup className="mb-3">
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="fas fa-signature"/>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                            placeholder="Username"
                            name="username"
                            value={username}
                            onChange={e => {
                              setSuccessMsg("");
                              setUsername(e.target.value)
                            }}
                            required
                        />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup>
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="fas fa-key"/>
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
            </Col>
          </Row>
        </Container>
      </>
  )
}
