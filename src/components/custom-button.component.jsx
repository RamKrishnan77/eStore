  
import React from 'react';

import './styles/custom-buttom.styles.scss';
import {Button} from 'react-bootstrap'

const CustomButton = ({ children, ...otherProps }) => (
  <Button className='custom-button' {...otherProps}>
    {children}
  </Button>
);

export default CustomButton;