import styled from 'styled-components';

export const ItemWrapper = styled.a`
  display: block;
  padding: 1.5rem;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 1rem;
  text-decoration: none;
  color: inherit;
  transition: box-shadow 0.2s, transform 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

export const Title = styled.h3`
  margin-bottom: 0.5rem;
`;

export const Abstract = styled.p`
  color: #555;
`;
