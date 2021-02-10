import React from 'react';
import {Button} from 'react-bootstrap'
// import {useAuth0} from '@auth0/auth0-react'
import {addUser,getAllUsers} from '../redux/user/user.actions'
import {connect} from 'react-redux'

const LoginButton = ({text}) => {
    // const { loginWithPopup,logout, user, isAuthenticated } = useAuth0()
    // console.log(myCurrentUser.data)
    
  //  if(isAuthenticated){
  //   addUser(user)
  //   // console.log(users.data.map(el => el.sub === user.sub))
  //  }
     
    return (           
        <Button variant='dark' className="mr-sm-4">{text}</Button>        
    );
};

const mapStateToProps = state => ({
  myCurrentUser: state.user.myCurrentUser
  // newProduct: state.products.item
})

export default connect(mapStateToProps,{addUser,getAllUsers})(LoginButton)