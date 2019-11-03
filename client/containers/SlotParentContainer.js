import React from 'react';
import SlotParent from '../components/SlotParent';

export default ({
  isWrapper,
  Footer,
  Top,
  Bottom,
  image,
  onClickImage,
  onClickFooter,
  isRadius,
  isBig,
  imageHeight,
  className,
}) => {
  return (
    <SlotParent
      isWrapper={isWrapper}
      Footer={Footer}
      Top={Top}
      Bottom={Bottom}
      image={image}
      onClickImage={onClickImage}
      onClickFooter={onClickFooter}
      isRadius={isRadius}
      isBig={isBig}
      imageHeight={imageHeight}
      className={className}
    />
  );
};
