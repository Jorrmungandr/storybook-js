const Colors = {
  mainBlue: '#26A6F9',
  mainBlack: '#333333',
  mainGray: '#010203',
  secondaryWhite: '#E9F3F5',
  mainWhite: '#FFF',
  mainPink: '#EE5683',
};

const flexcc = `
  display: flex;
  justify-content: center;
  align-items: center;
`;

const flex = (justify = 'unset', align = 'unset', direction = 'unset', wrap = 'unset') => `
  display: flex;
  justify-content: ${justify};
  align-items: ${align};
  flex-direction: ${direction};
  flex-wrap: ${wrap};
`;

export {
  Colors,
  flex,
  flexcc,
};
