import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getSelectedColumns, getAvailableColumns } from '../redux/toolkitSlice';

import { SearchBar } from './SearchBar';

import { Bord } from './styles/modal/Bord.styled';
import { Item } from './styles/Item.styled';
import { Title } from './styles/Title.styled';
import { Span } from './styles/Span.styled';
import { Button } from './styles/Button.styled';
import { Modal } from './styles/modal/Modal.styled';
import { Wrapper } from './styles/containers/Wrapper.styled';

const PopUpWindow = ({ setShowModal, selectedColumns, availableColumns }) => {
  const dispatch = useDispatch();
  // To create state for boarders
  const [boards, setBoards] = useState([
    {id: 1, title: 'Availible columns', items: [...availableColumns]},
    {id: 2, title: 'Selected columns', items: [...selectedColumns]}
  ]);

  // Creating a search button
  const filterBySearch = e => {
    e.preventDefault();
    // Access input value
    const query = e.target.value;
    // Create copy of item list
    const updatedList = [...availableColumns];
    // Create copy of item list
    const newBoards = [...boards];
    // Filter the array to match the values
    newBoards[0].items = updatedList.filter(item => item.toLowerCase().indexOf(query.toLowerCase()) !== -1);
    // Add new data to the state
    setBoards(updatedList);
    setBoards(newBoards);
  };

  // Сreate a state for the current board and a value
  const [currentBoard, setCurrentBoard] = useState(null);
  const [currentItem, setCurrentItem] = useState(null);
  const dragOverHandler = e => {
    e.preventDefault();
  }

  // Add the current board and value to the state
  const dragStartHandler = (e, board, item) => {
    setCurrentBoard(board);
    setCurrentItem(item);
  }

  // Move the value
  const dragHandler = (e, board, item) => {
    e.preventDefault();
    // Get the index of the current value
    const currentIndex = currentBoard.items.indexOf(currentItem);
    // Remove a value from the current board
    currentBoard.items.splice(currentIndex, 1);
    // The index over which we keep the current value
    const dropIndex = board.items.indexOf(item);
    // Places the value after the value we hold over
    board.items.splice(dropIndex + 1, 0, currentItem);

    setBoards(boards.map(b => {
      if (b.id === board.id) {
        return board;
      }

      if (b.id === currentBoard.id) {
        return currentBoard;
      }

      return b;
    }))
  }

  // Add the value
  const dropCardHandler = (e, board) => {
    e.preventDefault();
    // Add the value to the board
    board.items.push(currentItem);
    // Get the index of the current value
    const currentIndex = currentBoard.items.indexOf(currentItem);
    // Remove the value from the current board
    currentBoard.items.splice(currentIndex, 1);

    setBoards(boards.map(b => {
      if (b.id === board.id) {
        return board;
      }
      if (b.id === currentBoard.id) {
        return currentBoard;
      }
      return b;
    }))
  }

  // Remove the value field on click
  const handleRemove = item => {
    // Create copy of item list
    const newBoards = [...boards];
    // Remove the value from the second board
    newBoards[1].items = newBoards[1].items.filter(el => el !== item);
    // Add the value to the first board
    newBoards[0].items.push(item);
    // Add new values to state
    setBoards(newBoards);
  }

  const applyChanges = e => {
    e.preventDefault();
    // Save the selected object key values on store
    dispatch(getSelectedColumns(boards[1].items));
    dispatch(getAvailableColumns(boards[0].items))
    // Make the container transparent
    document.getElementById('box').style.opacity = 1;
    // Сlose the modal window
    setShowModal(false);
  }

  return (
    <Modal>
    <SearchBar filterBySearch={filterBySearch} />
      <Wrapper>
        {
          boards.map((board, id) => 
            <Bord
              key={id}
              onDragOver={e => dragOverHandler(e)}
              onDrop={e => dropCardHandler(e, board)}
            >
              <Title>{board.title}</Title>
              {
                board.items.map((item, id) => 
                  <Item
                    key={id}
                    onDragOver={(e => dragOverHandler(e))}
                    onDragStart={(e) => dragStartHandler(e, board, item)}
                    onDrag={(e) => dragHandler(e, board, item)}
                    draggable={board.id === 1 ? true : false}
                  >
                    {item}
                    {
                      board.id === 2 ? <Span onClick={() => handleRemove(item)}>x</Span> : false
                    }
                  </Item>
                )
              }
            </Bord>
          )
        } 
      </Wrapper>
      <Button onClick={e => applyChanges(e)}>apply</Button>
    </Modal>
  )
}

export default PopUpWindow;
