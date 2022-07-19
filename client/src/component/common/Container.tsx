import React from 'react';
import styled, {
  css,
  FlattenInterpolation,
  ThemeProps,
  CSSObject,
} from 'styled-components';

export type AdditionalStyleProps =
  | string
  | CSSObject
  | FlattenInterpolation<ThemeProps<any>>
  | undefined;

type FlexAttributes = [
  'row' | 'column',
  (
    | 'auto'
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
  ),
  (
    | 'auto'
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
  ),
  'wrap' | 'no-wrap',
];

type PositionAttributes = 'absolute' | 'fixed' | 'relative';

type StyledContainerProps = {
  width?: string;
  height?: string;
  flexInfo?: FlexAttributes;
  position?: PositionAttributes;
  margin?: string;
  padding?: string;
  additionalStyle?: AdditionalStyleProps;
};

const Container = styled.div<StyledContainerProps>`
  ${({ width, height, position, margin, padding, additionalStyle }) => css`
    position: ${position};
    width: ${width};
    height: ${height};
    margin: ${margin};
    padding: ${padding};
    ${additionalStyle}
  `}
  ${({ flexInfo, theme }) => flexInfo && theme.mixin.flexMixin(...flexInfo)}
`;

export default Container;
