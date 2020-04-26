import React from './node_modules/react';
import { Card, Button, CardTitle, CardText, Row, Col, Label, Input } from './node_modules/reactstrap';

const Example = (props) => {
  return (

    <Card body>
    <CardTitle>

    <Row>
      <Col sm="10">
      <Input type="text" name="address" id="exampleAddress" placeholder="1234 Main St"/>
      </Col>
     <Col sm="2">
     <Button sm="3">Search</Button>
     </Col>
    </Row>


    </CardTitle>
    
  
  </Card>

   
  );
};

export default Example;