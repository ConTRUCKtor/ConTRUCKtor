export default function Home() {
  import {Navbar, Container} from "solid-bootstrap";
  return (
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#">
            This is a Navbar
          </Navbar.Brand>
        </Container>
      </Navbar>
  );
}
