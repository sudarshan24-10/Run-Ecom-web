import { useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { Helmet } from "react-helmet-async";
export default function SignInScreen() {
  const { search } = useLocation;
  const redirectInUrl = new URLSearchParams(search).get("redirect");
  const redirect = redirectInUrl ? redirectInUrl : "/";
  return (
    <Container className="small-container">
      <Helmet>Sign In</Helmet>
      <h1 className="my-3">Sign In</h1>
      <Form>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            className="custom-input"
            type="email"
            required
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            className="custom-input"
            type="password"
            required
          ></Form.Control>
        </Form.Group>
        <div className="mb-3">
          <Button type="submit">Sign In</Button>
        </div>
        <div className="mb-3">
          <Link to={`/signup?redirect=${redirect}`}>Create your account</Link>
        </div>
      </Form>
    </Container>
  );
}
