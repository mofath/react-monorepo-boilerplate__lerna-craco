import React, { ComponentType } from 'react';
import { IconButton as IconButtonMUI, Icon } from '@mui/material';

interface Props {
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  icon: ComponentType;
  size?: 'large' | 'small' | 'medium';
  color?:
    | 'inherit'
    | 'default'
    | 'primary'
    | 'secondary'
    | 'error'
    | 'info'
    | 'success'
    | 'warning';
}

export const IconButton = ({ icon, onClick, size = 'large', color }: Props) => {
  return (
    <IconButtonMUI
      size={size || 'large'}
      color={color || 'inherit'}
      onClick={onClick}
    >
      <Icon component={icon} />
    </IconButtonMUI>
  );
};
