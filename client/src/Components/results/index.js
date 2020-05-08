import React from 'react';
import { Jumbotron, Container, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Col} from 'reactstrap';

const Example = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Results</h1>
          </Container>
          <Card>
              <Col sm="3">
              <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
              </Col>
        <Col sm="9">
        
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        
        </Col>
        
        
      </Card>

      </Jumbotron>
    </div>
  );
};

export default Example;