import React from 'react'
import {Container,Row,Col,Card,Image} from 'react-bootstrap'

const ProfilePage = ({userData}) => {
    return (
        <div className='profile'>
          
          <Col md={4}>
          <Card >
          <Card.Body>
              <Card.Title>{userData.displayName}</Card.Title>
                  <Card.Text>
                    Email: {userData.email}
                  </Card.Text>
                  <Card.Text>ID: {userData.id}</Card.Text>

          </Card.Body>
        </Card>
          </Col>
          
            
        
          </div>
    );
};

export default ProfilePage;