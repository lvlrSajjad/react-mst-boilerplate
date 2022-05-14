import Input, {InputProps} from '@mui/material/Input';
import InputLabel, {InputLabelProps} from '@mui/material/InputLabel';
import InputBase, {InputBaseProps} from '@mui/material/InputBase';
import InputAdornment, {InputAdornmentProps} from '@mui/material/InputAdornment';
import FilledInput, {FilledInputProps} from '@mui/material/FilledInput';
import OutlinedInput, {OutlinedInputProps} from '@mui/material/OutlinedInput';

import {styled} from '@mui/material/styles';

export const CInput = styled(Input)<InputProps>(
  (/* { theme } */) => ({
  }),
);

export const CInputLabel = styled(InputLabel)<InputLabelProps>(
  (/* { theme } */) => ({
  }),
);

export const CInputBase = styled(InputBase)<InputBaseProps>(
  (/* { theme } */) => ({
  }),
);

export const CInputAdornment = styled(InputAdornment)<InputAdornmentProps>(
  (/* { theme } */) => ({
  }),
);


export const CFilledInput = styled(FilledInput)<FilledInputProps>(
  (/* { theme } */) => ({
  }),
);


export const COutlinedInput = styled(OutlinedInput)<OutlinedInputProps>(
  (/* { theme } */) => ({
  }),
);


