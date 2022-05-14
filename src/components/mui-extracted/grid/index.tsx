import * as React from 'react';
import Grid, {GridProps} from '@mui/material/Grid';
import {styled} from '@mui/material/styles';

export const CGrid = styled(Grid)<GridProps>(
  (/* { theme } */) => ({}),
);

export const CGridContainer = (props: GridProps) => {
  return (
    <CGrid container {...props}>{props.children}</CGrid>
  )
}
