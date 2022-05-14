import * as React from "react";
import Typography, {TypographyProps} from '@mui/material/Typography';
import {styled} from '@mui/material/styles';

const generalStyle = {};

export const CTypography = styled(Typography)<TypographyProps>(
  (/* { theme } */) => ({
    ...generalStyle,
  }),
);

export const CH1 = (props: TypographyProps) => {
  return (
    <CTypography variant={"h1"} {...props}>
      {props.children}
    </CTypography>
  )
}

export const CH2 = (props: TypographyProps) => {
  return (
    <CTypography variant={"h2"} {...props}>
      {props.children}
    </CTypography>
  )
}

export const CH3 = (props: TypographyProps) => {
  return (
    <CTypography variant={"h3"} {...props}>
      {props.children}
    </CTypography>
  )
}

export const CH4 = (props: TypographyProps) => {
  return (
    <CTypography variant={"h4"} {...props}>
      {props.children}
    </CTypography>
  )
}

export const CH5 = (props: TypographyProps) => {
  return (
    <CTypography variant={"h5"} {...props}>
      {props.children}
    </CTypography>
  )
}

export const CH6 = (props: TypographyProps) => {
  return (
    <CTypography variant={"h6"} {...props}>
      {props.children}
    </CTypography>
  )
}

export const CSubtitle1 = (props: TypographyProps) => {
  return (
    <CTypography variant={"subtitle1"} {...props}>
      {props.children}
    </CTypography>
  )
}

export const CSubtitle2 = (props: TypographyProps) => {
  return (
    <CTypography variant={"subtitle2"} {...props}>
      {props.children}
    </CTypography>
  )
}

export const CBody1 = (props: TypographyProps) => {
  return (
    <CTypography variant={"body1"} {...props}>
      {props.children}
    </CTypography>
  )
}

export const CBody2 = (props: TypographyProps) => {
  return (
    <CTypography variant={"body2"} {...props}>
      {props.children}
    </CTypography>
  )
}

export const CButtonText = (props: TypographyProps) => {
  return (
    <CTypography variant={"button"} {...props}>
      {props.children}
    </CTypography>
  )
}

export const CCaption = (props: TypographyProps) => {
  return (
    <CTypography variant={"caption"} {...props}>
      {props.children}
    </CTypography>
  )
}

export const COverline = (props: TypographyProps) => {
  return (
    <CTypography variant={"overline"} {...props}>
      {props.children}
    </CTypography>
  )
}
