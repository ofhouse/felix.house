import styled from 'styled-components';

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
`;

List.Item = styled.li`
  padding: 0.25rem 4px;

  &:first-child {
    padding-left: 0;
  }

  & a {
    font-size: 1.125rem;
    text-decoration: underline;
    color: #c2c2c2;
  }
`;

export default List;
