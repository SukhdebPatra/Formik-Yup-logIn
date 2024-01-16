import Card from "react-bootstrap/Card";
function CustomCard({ children }) {
  return (
    <Card className="cardClass">
      <Card.Body>{children}</Card.Body>
    </Card>
  );
}

export default CustomCard;
