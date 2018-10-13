import React from 'react'

function renderNone(loaded) {
  return <tr>
    <td colSpan={3}>
      { loaded
        ? "There are no user entries to display"
        : "Loading..."
      }
    </td>
  </tr>
}

function renderEntries(newUser) {
  return newUser.map(user => <tr title={'Edit account info'} cellSpacing={0} key={user.id}>
    <td>{ user.id }</td>
    <td>{ user.name }</td>
    <td>{ user.avatar.substring(1, 45) }</td>
    <td>{ user.iat }</td>
  </tr>)
  
}

export default function UserEntryTable({ newUser, loaded }) {
    
  return <table width="100%">
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Avatar</th>
        <th>Password</th>
      </tr>
    </thead>

    <tbody>
      {
          newUser 
            ? renderEntries(newUser) 
            : renderNone(loaded)
      }
    </tbody>
  </table>

}
