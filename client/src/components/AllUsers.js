import React from 'react'

import UserEntryTable from './table'

import store from '../store'

class UserEntries extends React.Component {
    constructor() {
        super();
    }
    
  render() {

    const newUser = [] 
    newUser.push(store.getState().auth.user)

    if (Object.keys(store.getState().auth.user).length === 0) {
        return <div></div>
    } else {
        return <div>
            <h1 style={{color: '#8fcbff'}}>Account Info</h1>
            <UserEntryTable newUser={newUser} loaded={''} />
        </div>
    }
  }
}

export default UserEntries
