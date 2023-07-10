import React, { useState } from 'react';
import { data } from '../db';
import { connect } from 'react-redux';
import { Add_Users, Create_User, Delete_User, Update_User, Replace_User } from './action';

// UsersAddData
const AddUserdata = {
  "id": 11,
  "name": "Sandeep Sharma",
  "username": "Sandeep2847",
  "email": "Sandeep@gmail.com",
  "address": {
    "street": "Ganiyar",
    "suite": "160",
    "city": "Ateli",
    "zipcode": "123021",
    "geo": {
      "lat": "9466",
      "lng": "452847"
    }
  },
}
const Users = ({ deleteId, updateId, replaceId, users, AddUsers, CreateUser }) => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const handleDeleteUser = () => {
    deleteId(+id);
    setId(null);
  }
  const handleUpdateUser = () => {
    updateId(+id, name);
    setId(null);
    setName('');
  }
  const handleReplaceUser = () => {
    replaceId(+id, AddUserdata);
    setId(null);
  }
  return (
    <>
      <div style={{ display: 'flex', gap: 10, flexDirection: "row", justifyContent: 'center', alignItems: 'center', flexWrap: "wrap" }}>
        {
          users.map((item, id) => (
            <div key={id} style={{borderRadius:10, padding: 10, width: 250, backgroundColor: 'lightblue', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <p>ID: {item.id}</p>
              <p>Name: {item.name}</p>
              <p>UserName: {item.username}</p>
              <p>Email: {item.email}</p>
              <p>Address: {item.address.street}</p>
            </div>
          ))
        }

      </div>
      <div style={{ marginTop: 20, display: 'flex', justifyContent: 'center', alignItems: "center", flexDirection: 'column', gap: 10 }}>
        <div style={{ display: 'flex', gap: 10 }}>
          <input style={{ height: 30, width: 400 }} type='text' placeholder='Enter id for user' onChange={(e) => setId(e.target.value)} />
          <input style={{ height: 30, width: 400 }} type='text' placeholder='Enter name for user' onChange={(e) => setName(e.target.value)} />
        </div>
        <div style={{ display: 'flex', gap: 10 }}>
          <button style={{ height: 30, width: 150 }} onClick={AddUsers}>Add Data To Users</button>
          <button style={{ height: 30, width: 150 }} onClick={CreateUser}>Create User</button>
          <button style={{ height: 30, width: 150 }} onClick={handleDeleteUser}>Delete User</button>
          <button style={{ height: 30, width: 150 }} onClick={handleUpdateUser}>Update User</button>
          <button style={{ height: 30, width: 150 }} onClick={handleReplaceUser}>Replace User</button>
        </div>
      </div>
    </>
  )
}

const mapStateToPropsUsers = (state) => {
  return {
    users: state.mainUsers.users,
  }
}
const mapDispatchToPropsUsers = (dispatch) => {
  return {
    AddUsers: () => dispatch({ type: Add_Users, payload: data }),
    CreateUser: () => dispatch({ type: Create_User, payload: AddUserdata }),
    updateId: (userId, userName) => dispatch({ type: Update_User, payload: { id: userId, name: userName } }),
    replaceId: (userId, AddUserdata) => dispatch({ type: Replace_User, payload: { id: userId, replacedData: AddUserdata } }),
    deleteId: (userId) => dispatch({ type: Delete_User, payload: userId })
  }
}
export default connect(mapStateToPropsUsers, mapDispatchToPropsUsers)(Users);

