import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import SelectBox from "./SelectBox";

function SelectAndTitleLayout() {
  return (
    <Container>
      <Row>
        <Col className="product-title text-xl fs-2 fw-bold">All Products</Col>
        <Col md="auto" className="heading d-flex align-items-center">
          Sort By:
        </Col>
        <Col xs lg="2">
          <SelectBox />
        </Col>
      </Row>
    </Container>
  );
}

export default SelectAndTitleLayout;
