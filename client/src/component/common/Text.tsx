import React from 'react';
import styled, {
  css,
  FlattenInterpolation,
  ThemeProps,
  CSSObject,
} from 'styled-components';

type AdditionalStyleProps =
  | string
  | CSSObject
  | FlattenInterpolation<ThemeProps<any>>
  | undefined;

type StyledTextProps = {
  size: string;
  weight: string;
  color: string;
  lineHeight: string;
  additionalStyle?: AdditionalStyleProps;
};

const Text = styled.span<StyledTextProps>`
  ${({ size, weight, color, lineHeight, additionalStyle }) =>
    css`
      font-size: them${({ theme }) =>
        theme.fontSize ? theme.fontSize[size] : size}
      font-weight: ${({ theme }) =>
        theme.fontWeight ? theme.fontWeight[weight] : size};
      color: ${({ theme }) => (theme.colors ? theme.colors[color] : color)};
      line-height: ${({ theme }) =>
        theme.lineHeight ? theme.lineHeight[lineHeight] : lineHeight};
      ${additionalStyle}
    `}
`;

export default Text;
