import { keyframes } from '@emotion/core';

const fade = keyframes`
  from {
    opacity: 0;
  }
`;

export default {
  hoverOpacity: 0.8,
  transitionMedium: '0.7s',
  transitionFast: '0.5s',
  fade,
  fadeLong: '1.25s',
  fadeDefault: '1s',
  fadeFase: '0.7s',
  buttonBorderRadius: '200px',
  buttonPadding: '12px 25px',
  inputPadding: '5px 25px',
  inputBorderRadius: '200px',
  imageBorderRadius: '35px',
  additionalBorderRadius: '12px',
  fontBig: '27px',
  fontSmall: '18px',
  mainShadow: '0px 2px 5px rgba(0, 0, 0, 0.10)',
  mainShadowHover: '0px 4px 8px rgba(0, 0, 0, 0.14)',
};
