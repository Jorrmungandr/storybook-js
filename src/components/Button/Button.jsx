import React from 'react';
import PropTypes from 'prop-types';

import {
  StyledButton,
  Image,
} from './styles';

import logoPNG from './assets/logo.png';

function Button({
  children,
  image,
  slim,
  shady,
  darkmode,
  ...other
}) {
  return (
    <StyledButton type="submit" darkmode={darkmode} slim={slim} shady={shady} {...other} image={image}>
      {children}
      {image && <Image src={logoPNG} alt="logomarca" />}
    </StyledButton>
  );
}

Button.propTypes = {
  /** The children are whatever is inside of the component */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  /** Whether if it has the storybook logo displayed or not */
  image: PropTypes.bool,
  /** If setted to true, button is a little bit thinner */
  slim: PropTypes.bool,
  /** Adds box-shadow to button */
  shady: PropTypes.bool,
  /** Display button as darkmode */
  darkmode: PropTypes.bool,
};

Button.defaultProps = {
  image: false,
  slim: false,
  shady: false,
  darkmode: false,
};

export default Button;
