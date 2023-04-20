import React from 'react';
import { ButtonProps } from './types.d';
import { StyButton } from './styles';

export const Button = ({ children, outlined, ...props }: ButtonProps): React.ReactElement => (
  <StyButton {...props} className={outlined ? 'outlined' : ''}>
    {children}
  </StyButton>
);
