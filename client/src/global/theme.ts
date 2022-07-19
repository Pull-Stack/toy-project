import { css } from 'styled-components';

const mixin = {
  flexMixin: (
    direction = 'row',
    align = 'auto',
    justify = 'auto',
    wrap = 'auto',
  ) => css`
    display: flex;
    flex-direction: ${direction};
    align-items: ${align};
    justify-content: ${justify};
    flex-wrap: ${wrap};
  `,
};

const theme = {
  mixin,
};

export default theme;
