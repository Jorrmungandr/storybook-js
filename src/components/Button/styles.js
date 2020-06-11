import styled from 'styled-components';
import { Colors, flexcc } from '../../global/tools';

const StyledButton = styled.button`
  border: 1px solid ${Colors.mainPink};
  background-color: white;
  outline: none;
  padding: ${({ slim }) => (slim ? '3px' : '10px')} 60px;
  border-radius: 50px;
  cursor: pointer;
  transition: background-color .5s ease-in-out, color .5s ease-in-out, padding .5s ease-in-out;
  color: ${Colors.mainBlack};
  font-weight: bolder;
  box-shadow: ${({ shady }) => shady && `3px 2px 10px ${Colors.mainGray}`};
  ${flexcc}
  margin: 30px 0 0;

  &:hover {
    background-color: ${Colors.mainPink};
    color: white;
  }
`;

const Image = styled.img`
  height: 20px;
`;

export {
  StyledButton,
  Image,
};
