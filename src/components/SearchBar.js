import { Search } from './styles/Search.styled';

export const SearchBar = ({ filterBySearch }) => {
  
  return (
      <Search 
        type='text'
        onChange={filterBySearch} 
        placeholder='Search available columns...'
      ></Search>
  )
}
