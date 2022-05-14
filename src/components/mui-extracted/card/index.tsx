import Card, {CardProps} from '@mui/material/Card';
import CardActions, {CardActionsProps} from '@mui/material/CardActions';
import CardContent, {CardContentProps} from '@mui/material/CardContent';
import CardActionArea, {CardActionAreaProps} from '@mui/material/CardActionArea';
import CardMedia, {CardMediaProps} from '@mui/material/CardMedia';
import CardHeader, {CardHeaderProps} from '@mui/material/CardHeader';

import {styled} from '@mui/material/styles';

export const CCard = styled(Card)<CardProps>(
  (/* { theme } */) => ({
  }),
);

export const CCardActions = styled(CardActions)<CardActionsProps>(
  (/* { theme } */) => ({
  }),
);

export const CCardContent = styled(CardContent)<CardContentProps>(
  (/* { theme } */) => ({
  }),
);

export const CCardActionArea = styled(CardActionArea)<CardActionAreaProps>(
  (/* { theme } */) => ({
  }),
);

export const CCardMedia = styled(CardMedia)<CardMediaProps>(
  (/* { theme } */) => ({
  }),
);

export const CCardHeader = styled(CardHeader)<CardHeaderProps>(
  (/* { theme } */) => ({
  }),
);
