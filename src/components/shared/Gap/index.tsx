import React from 'react';
import { HorizontalGap, VerticalGap } from './styled';
import { GapProps } from './types';

interface Props extends GapProps {
  isHorizontal?: boolean;
}

/*
  Takes size in px (from mockup), and converts it to the target unit (by default rem)
*/
export const Gap: React.FC<Props> = ({ isHorizontal = false, ...restProps }) => {
  return isHorizontal ? <HorizontalGap {...restProps} /> : <VerticalGap {...restProps} />;
};
