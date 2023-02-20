import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getUsers } from './redux/toolkitSlice.js';
import { users } from './services/service';
import GlobalStyles from './components/Global';
import PopUpWindow from './components/PopUpWindow';
import TableList from './components/TableList';

import { Container } from './components/styles/containers/Container.styled';
import {Button} from './components/styles/Button.styled';

const App = () => {
  const dispatch = useDispatch();

  // The data array is placed in the store
  useEffect(() => {
    users().then(value => dispatch(getUsers(value.data)));
  }, [])

  // Get values from store
  const usersList = useSelector(state => state.toolkit.users);
  const selectedColumns = useSelector(state => state.toolkit.selectedColumns);
  const availableColumns = useSelector(state => state.toolkit.availableColumns);
  
  // Displaying a modal window on click
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => {
    document.getElementById('box').style.opacity = '0.9';
    setShowModal(true);
  }

  return (
    <>
      <GlobalStyles />
      <Container id='box'>
        <Button onClick={handleShow}>select columns</Button>
        {
          usersList.length > 0 && 
          <TableList 
            selectedColumns={selectedColumns} 
            usersList={usersList}
          />
        } 
      </Container>
      { 
        showModal && 
        <PopUpWindow 
          setShowModal={setShowModal} 
          selectedColumns={selectedColumns} 
          availableColumns={availableColumns} 
        /> 
      } 
    </>
  );
}

export default App;
