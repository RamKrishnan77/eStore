import React from 'react';
import {Image} from 'react-bootstrap'

class HomePage extends React.Component {

    render() {
        return (
 
            <div className='panel1'>
            <Image src='https://i.pinimg.com/originals/fa/45/96/fa4596ad9a9d39901eeb455ed4f74e44.jpg'  fluid/>

            <Image src='https://s3.amazonaws.com/nikeinc/assets/91660/Nike-Air-Zoom-Pulse_2_native_1600.jpg?1573245547'  fluid/>
            
            <Image src='https://s3.amazonaws.com/nikeinc/assets/93455/nike-air-max-2090-4_rectangle_1600.jpg?1579197133'  fluid/>
            
            
            </div>        
            
        );
    }
}

export default HomePage;