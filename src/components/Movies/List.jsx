import { Row, Col } from "react-bootstrap";
import Cards from "./Cards";

export default function List({ items, isLoading }) {
  return (
    <Row
      xs={1}
      sm={2}
      md={3}
      lg={5}
      className="g-4 "
    >
      {items &&
        items.map((item) => (
          <Col key={item.id}>
            <Cards item={item} isLoading={isLoading} />
          </Col>
        ))}
    </Row>
  );
}
