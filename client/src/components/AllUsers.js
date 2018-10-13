import React from 'react'
import { connect } from 'react-redux'

import UserEntryTable from './table'
import store from '../store'

class UserEntries extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            errors: {},
            mydata: {},
        }
    }
    
  render() {

    const newUser = [] 
    newUser.push(store.getState().auth.user)
    
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
