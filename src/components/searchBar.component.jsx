import React,{Component} from 'react'
import {FormControl,Container} from 'react-bootstrap'
 
class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      value: ''
    };
  }

  // <input type="text" onChange={(e) => this.props.onSearch(e.target.value)} />
  render() {
    return (
      
      <div className='search-bar'>
      <FormControl type="text" onChange={(e) => this.props.onSearch(e.target.value)} placeholder="Search"/>          
      </div>
    );
  }
}

export default SearchBar