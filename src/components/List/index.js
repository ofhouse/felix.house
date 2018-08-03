import styled from 'styled-components';

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

List.Item = styled.li`
  padding: 0.25rem 0;

  & a {
    text-decoration: underline;
    color: black;
  }
`;

export default List;
