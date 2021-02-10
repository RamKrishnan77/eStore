import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

const MyCollapse = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Button color="dark" onClick={toggle} style={{ marginBottom: '1rem' }}>Toggle</Button>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody>
          
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
}

export default MyCollapse;