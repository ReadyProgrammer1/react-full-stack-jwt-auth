import React from 'react'
import { connect } from 'react-redux'

import { getUser } from '../actions/authentication';

import UserEntryTable from './table'

import store from '../store'

class UserEntries extends React.Component {
  //this.props.loginUser(user);
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            errors: {},
            mydata: {},
        }
        //this.handleInputChange = this.handleInputChange.bind(this);
        //this.handleSubmit = this.handleSubmit.bind(this);
        this.showData = this.showData.bind(this)
    }

    showData(data) {
        this.setState(state => {
            state.myData = data;
            return state;
          });
        //alert(this.state.myData)
    }

    componentWillMount() {
        getNewUser()
        function getNewUser() {
            const myuser = {"email":"batman@us.gov","password":"password"}
            getUser(myuser, (response) => {
                console.log(response)
                }
            )
        }
    }
    

  render() {
    var entry = new Date();
    
    const allusers = {
  
        "users": [
            {
            "date": entry.toString(),
            "name": "Batman",
            'email': 'batman@us.gov',
            'password': 'password'
            },
            {
                "date": entry.toString(),
                "name": 'Superman',
                'email': 'superman@us.gov',
                'password': 'password'
            },
            {
                "date": entry.toString(),
                "name": "Ironman",
                'email': 'ironman@us.gov',
                'password': 'password'
            }   
        ]
    }

    //alert(JSON.stringify(this.state.mydata))

    const newUser = [] 
    newUser.push(store.getState().auth.user)
    //alert(newUser)
    return <div>
      <h1 style={{color: '#8fcbff'}}>Account Info</h1>
      <UserEntryTable newUser={newUser} loaded={''} />
    </div>
  }
}





function mapStateToProps(state) {
  return {
    //entries: state.userEntries.entries
  }
}

function mapDispatchToProps(dispatch) {
  return {
    persistUserEntries: (payload) => {
      dispatch({ type: 'LOAD', payload })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserEntries)