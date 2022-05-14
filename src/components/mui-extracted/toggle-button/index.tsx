import * as React from "react";
import ToggleButton, {ToggleButtonProps} from '@mui/material/ToggleButton';
import ToggleButtonGroup, {ToggleButtonGroupProps} from '@mui/material/ToggleButtonGroup';

import {styled} from '@mui/material/styles';

export const CToggleButton = styled(ToggleButton)<ToggleButtonProps>(
  (/* { theme } */) => ({
  }),
);

export const CToggleButtonGroup = styled(ToggleButtonGroup)<ToggleButtonGroupProps>(
  (/* { theme } */) => ({
  }),
);
