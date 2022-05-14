import * as React from 'react';
import ImageList, {ImageListProps} from '@mui/material/ImageList';
import ImageListItem, {ImageListItemProps} from '@mui/material/ImageListItem';
import ImageListItemBarTitle, {ImageListItemBarProps} from '@mui/material/ImageListItemBar';

import {styled} from '@mui/material/styles';


export const CImage = (props: React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>) => {
  return (
    <img alt={""} {...props}/>
  )
};

export const CImageList = styled(ImageList)<ImageListProps>(
  (/* { theme } */) => ({
  }),
);

export const CImageListItem = styled(ImageListItem)<ImageListItemProps>(
  (/* { theme } */) => ({
  }),
);

export const CImageListItemBarTitle = styled(ImageListItemBarTitle)<ImageListItemBarProps>(
  (/* { theme } */) => ({
  }),
);
