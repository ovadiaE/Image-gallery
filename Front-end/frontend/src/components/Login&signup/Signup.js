import { useState } from "react";
import axios from "axios";
import { Button, Modal, Form } from "react-bootstrap";
import "./form.css";
const Signup = () => {
  const [userNameError, setuserNameError] = useState({});
  const [passwordError, setpasswordError] = useState({});
  const [passwordMatch, setPasswordMatch] = useState({});
  const [email, setEmail] = useState("");
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);

  const handleClose = () => {
    setShow(false);
    setpasswordError({});
    setuserNameError({});
    setPasswordMatch({});
  };

  const onSubmit = async (e) => {
    let formData = {};

    e.preventDefault();

    if (formValidation) {
      try {
        formData = {
          email: email,
          username: userName,
          password: password,
        };
        let response = await axios.post(
          "http://192.168.11.174:5050/new-user",
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
    const userNameError = {};
    const passwordError = {};
    const passwordMatch = {};
    let isValid = true;

    if (userName.trim().length < 3) {
      userNameError.userNameshort = "Username must be at least 3 characters";
      isValid = false;
      setuserNameError(userNameError);
    }
    if (password.trim().length < 6) {
      passwordError.passwordShort = "Password must be at least 6 characters";
      isValid = false;
      setpasswordError(passwordError);
    }

    if (password !== confirmPassword) {
      passwordMatch.noMatch = "Passwords do not match";
      isValid = false;
      setPasswordMatch(passwordMatch);
    }

    return isValid;
  };

  return (
    <>
      <Button className="signup" variant="primary" onClick={handleShow}>
        Signup
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Sign up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="email"
                placeholder="Enter email"
              />
              <Form.Label>Username</Form.Label>
              <Form.Control
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                type="text"
                placeholder="Enter username"
              />
              {Object.keys(userNameError).map((key) => {
                return (
                  <div className="error" style={{ color: "red" }}>
                    {userNameError[key]}
                  </div>
                );
              })}
              <Form.Label>Password</Form.Label>
              <Form.Control
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                type="password"
                placeholder="password"
              />
              {Object.keys(passwordError).map((key) => {
                return (
                  <div className="error" style={{ color: "red" }}>
                    {passwordError[key]}
                  </div>
                );
              })}
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                }}
                type="password"
                placeholder="confirm password"
              />
              {Object.keys(passwordMatch).map((key) => {
                return (
                  <div className="error" style={{ color: "red" }}>
                    {passwordMatch[key]}
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
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Signup;
