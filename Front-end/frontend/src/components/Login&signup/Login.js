import { useState } from "react";
import axios from "axios";
import { Button, Modal, Form } from "react-bootstrap";
function Login() {
  const [show, setShow] = useState(false);
  const [passwordError, setPassworderror] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e) => {
    let formData = {};
    e.preventDefault();
    const isValid = formValidation();

    if (isValid) {
      try {
        formData = {
          email: email,
          password: password,
        };
        let response = await axios.post(
          " http://172.16.1.45:5050/login",
          formData
        );
        console.log(response);
        handleClose();
      } catch (error) {
        console.log(error);
      }
    }
  };

  const formValidation = () => {
    const passwordError = {};
    let isValid = true;

    if (password.trim().length < 6) {
      passwordError.passwordShort = "Password is too short";
      isValid = false;
      setPassworderror(passwordError);
    }
    return isValid;
  };

  const handleClose = () => {
    setPassworderror({});
    setShow(false);
  };
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Login
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Log in</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                value={email}
                placeholder="Enter email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />

              <Form.Label>Password</Form.Label>

              <Form.Control
                value={password}
                type="password"
                placeholder="Enter password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              {Object.keys(passwordError).map((key) => {
                return (
                  <div className="error" style={{ color: "red" }}>
                    {passwordError[key]}
                  </div>
                );
              })}
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={onSubmit} variant="primary">
            {" "}
            submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Login;
