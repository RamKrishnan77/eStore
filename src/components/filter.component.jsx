import React, { useState } from 'react'
import { Checkbox} from 'antd';
import { Collapse, Button, CardBody, Card, UncontrolledCollapse } from 'reactstrap';
import { Container } from 'react-bootstrap';
import '../App.css'

const { Panel } = Collapse;

const options = [
    {
        id:1,
        name: "Men"
    },
    {
        id:2,
        name: "Women"
    }
]


function CheckBox(props) {

    const [Checked, setChecked] = useState([])
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const handleToggle = (value) => {

        const currentIndex = Checked.indexOf(value);
        const newChecked = [...Checked];

        if (currentIndex === -1) {
            newChecked.push(value)
        } else {
            newChecked.splice(currentIndex, 1)
        }

        setChecked(newChecked)
        // console.log(Checked)
        props.handleFilters(newChecked)
        //update this checked information into Parent Component 

    }

    const renderCheckboxLists = () => options.map((value, index) => (
        <React.Fragment key={index}>
            <Checkbox
                onChange={() => handleToggle(value.name)}
                type="checkbox"
                checked={Checked.indexOf(value.name) === -1 ? false : true}
                
            />
            <span className='checkbox-label'>{value.name}</span>
        </React.Fragment>
    ))   

    return (

        <div className='filter'>          
               
                        {renderCheckboxLists()}
             
        </div>               
                    
               
           
       
    )
}

export default CheckBox