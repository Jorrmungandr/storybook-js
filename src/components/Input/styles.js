import styled from 'styled-components';
import { Colors } from '../../global/tools';

const TextInput = styled.input`
  border: none;
  border-bottom: 1px solid ${Colors.mainPink};
  /* border-radius: 5px; */
  background-color: white;
  outline: none;
  transition: all .5s ease-in-out;
  padding: 5px;
  color: ${Colors.mainBlack};
  margin: 5px 0;

  ::placeholder {
    color: ${Colors.mainBlack};
  }
`;

export {
  TextInput,
};
