import React from 'react';

import {
  StyledButton,
  Image,
} from './styles';

import logoPNG from './assets/logo.png';

function Button({
  children,
  image,
  ...other
}) {
  return (
    <StyledButton type="submit" {...other} image={image}>
      {children}
      {image && <Image src={logoPNG} alt="logomarca" />}
    </StyledButton>
  );
}

export default Button;
