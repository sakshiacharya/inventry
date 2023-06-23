import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import { fetchUser } from '../redux/Action/fetchUser';
import { detailData } from '../redux/Action/detailData';
export const List = () => {

  const userList = useSelector(state => state?.fetchUserReducer?.users?.users)
  const [addItem, setAddItem] = useState(false);
  const [userData, setUserData] = useState({
    id: '',
    name: '',
    phone: '',
    email: '',
    city: '',
    zipcode: '',
  });

  

  const [selectedUser, setSelectedUser] = useState(null);
  const [userListStored, setUserListStored] = useState(userList || []);
  const [editedUser, setEditedUser] = useState(null);

  useEffect(() => {
    setUserListStored(userList)
  }, [userList])

  console.log(userListStored)

  const editUser = (user) => {
    setEditedUser(user);
  };

  



  const addUser = (event) => {
    event.preventDefault()
    setAddItem(true);
    setTimeout(() => {
      closeModal()
    }, 2000)

  }


  const deleteUser = (userId) => {
     const updatedUserList = userList.filter((user) => user.id !== userId);
  setUserListStored(updatedUserList);
  };
 


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser())
  }, [])


  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      padding: '10px',
      // overflowY: 'scroll',
      // height: '80%'

    },
  };


  Modal.setAppElement('#root');


  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
    setAddItem(false)
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.

  }

  function closeModal(e) {
    setIsOpen(false);
  }





  return (
    <React.Fragment>

      <div>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="add user">
          <>
            {
              addItem ? <div className='thankyou'>Data is submitted Successfully..</div> :

                <div >
                  <h1 className="header" >Add New User</h1>
                  <form className='details' onSubmit={addUser}>
                    <div>
                      <label for="ID">ID:</label>
                      <input id="ID" type="number" placeholder="ID" onChange={(e) => { setUserData({ ...userData, id: e.target.value }) }} required />
                    </div>

                    <div>
                      <label for="Name">Name:</label>
                      <input id="Name" placeholder="Name" type="text" onChange={(e) => { setUserData({ ...userData, name: e.target.value }) }} required />
                    </div>

                    <div>
                      <label for="Phone">Phone:</label>
                      <input id="phone" placeholder="phone" type="tel" onChange={(e) => { setUserData({ ...userData, phone: e.target.value }) }} required maxLength={10} />
                    </div>

                    <div>
                      <label for="Email">Email:</label>
                      <input id="Email" placeholder="Email" type="email" onChange={(e) => { setUserData({ ...userData, email: e.target.value }) }} required />
                    </div>

                    <div>
                      <label for="City">City:</label>
                      <input id="City" placeholder="City" type="text" onChange={(e) => { setUserData({ ...userData, city: e.target.value }) }} required />
                    </div>

                    <div>
                      <label for="Zipcode">Zipcode:</label>
                      <input id="Zipcode" placeholder="Zipcode" type="tel" maxLength={6} onChange={(e) => { setUserData({ ...userData, zipcode: e.target.value }) }} required />
                    </div>

                
                    <div className='text-center' >
                      <div className="back-button" style={{ display: 'flex', flexDirection: 'row' }}>
                        <button type='submit'>

                          Save</button>
                        <button onClick={() => closeModal()} >
                          

                          Close</button>
                      </div>
                    </div>
                  </form>



                </div>
            }
          </>
        </Modal>
      </div>

      <div className='main'>
        <h1>User Management System</h1>
        <div className='table-data'>
          <div className='head' >
            <span className='product'>Users</span>
            <button onClick={openModal} >+ Add User</button>
          </div>
          <div>
            <table className="styled-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Email</th>
           
                  <th>City</th>
                  <th>Zip Code</th>
                  <th>Action</th>
                  
                </tr>
              </thead>
              <tbody>
                <tr>
                  {
                    addItem &&
                    <>
                      <td>{userData.id}</td>
                      <td>{userData.name}</td>
                      <td>{userData.phone}</td>
                      <td>{userData.email}</td>
                      <td>{userData.city}</td>
                      <td>{userData.zipcode}</td>
                     
                     
                    </>

                  }
                </tr>
                {userListStored?.map((data, index) => (
    <tr key={index}>
      <td>{data.id}</td>
      <td>{data.name}</td>
      <td>{data.phone}</td>
      <td>{data.email}</td>
      <td>{data.address.city}</td>
      <td>{data.address.zipcode}</td>
    
      <td>
        <button onClick={() =>  editUser(data)}>Edit</button>
        <button onClick={() => deleteUser(data.id)}>Delete</button>
      </td>
    </tr>
  ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className='text-center'>

       

        </div>
      </div>


    </React.Fragment>
  )
}
