import React from 'react';
import { Card, Button, CardTitle, FormText, Row, Col, Label, Input } from 'reactstrap';

const Example = ({keyword, handleInputChange}) => {
  return (

    <Card body>
    <CardTitle>
    <Label for="bookSearch">Book Search</Label>
    <FormText for="text">Book</FormText>
    <Row>
      <Col sm="10">
      <Input type="text" name="keyword" value={keyword} id="searchbox" placeholder="Harry Potter"/>
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