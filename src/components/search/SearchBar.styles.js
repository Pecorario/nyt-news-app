import styled from 'styled-components';

export const SearchForm = styled.form`
  display: flex;
  gap: 0.5rem;
  margin-top: 2rem;
`;

export const SearchInput = styled.input`
  flex: 1;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;

  &:focus {
    outline: 2px solid #007bff;
    border-color: transparent;
  }
`;

export const SearchButton = styled.button`
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0056b3;
  }
`;