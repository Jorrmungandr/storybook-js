import styled from 'styled-components';
import { Colors, flex } from '../../global/tools';

const StyledForm = styled.form`
  ${flex('center', 'center', 'column')}
  border: 1px solid ${Colors.mainPink};
  border-radius: 5px;
  padding: 30px 5px;
  max-width: 300px;
`;

const Title = styled.h2`
  color: ${Colors.mainBlack};
  font-style: bolder;
  font-family: 'Roboto', sans-serif;
  margin: 20px 0;
  text-align: center;
`;

export {
  StyledForm,
  Title,
};
